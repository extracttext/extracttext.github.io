import { useState, useRef, useEffect, useCallback, type ChangeEvent, type DragEvent } from 'react';
import Tesseract from 'tesseract.js';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface OcrWorkspaceProps {
  /** Flat record of translation strings keyed by i18n key */
  t: Record<string, string>;
}

type Status = 'idle' | 'loading' | 'recognizing' | 'complete' | 'error';

const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/bmp', 'image/webp'];

const OCR_LANGUAGES = [
  { code: 'eng', key: 'ocr.language.eng' },
  { code: 'spa', key: 'ocr.language.spa' },
  { code: 'por', key: 'ocr.language.por' },
  { code: 'deu', key: 'ocr.language.deu' },
  { code: 'fra', key: 'ocr.language.fra' },
  { code: 'jpn', key: 'ocr.language.jpn' },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function OcrWorkspace({ t }: OcrWorkspaceProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [ocrLang, setOcrLang] = useState('eng');
  const [status, setStatus] = useState<Status>('idle');
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const [extractedText, setExtractedText] = useState('');
  const [copied, setCopied] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /* ---- Translation helper ---- */
  const tr = useCallback((key: string) => t[key] ?? key, [t]);

  /* ---- Image handling ---- */
  const handleImageFile = useCallback((file: File) => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setErrorMessage(tr('ocr.error.invalid'));
      return;
    }
    setErrorMessage('');
    setImageFile(file);
    setExtractedText('');
    setStatus('idle');
    setProgress(0);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, [tr]);

  /* ---- Clipboard paste listener ---- */
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of Array.from(items)) {
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) {
            e.preventDefault();
            handleImageFile(file);
          }
          break;
        }
      }
    };
    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, [handleImageFile]);

  /* ---- Drag & Drop handlers ---- */
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleImageFile(file);
  };

  /* ---- File input handler ---- */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageFile(file);
  };

  /* ---- OCR Extraction ---- */
  const handleExtract = async () => {
    if (!imageFile) return;

    setStatus('loading');
    setProgress(0);
    setStatusMessage(tr('ocr.progress.loading'));
    setExtractedText('');
    setErrorMessage('');

    try {
      const result = await Tesseract.recognize(imageFile, ocrLang, {
        logger: (m: { status: string; progress: number }) => {
          if (m.status === 'recognizing text') {
            setStatus('recognizing');
            setProgress(m.progress);
            setStatusMessage(tr('ocr.progress.recognizing'));
          } else {
            setStatus('loading');
            setProgress(m.progress);
            setStatusMessage(tr('ocr.progress.loading'));
          }
        },
      });

      setExtractedText(result.data.text);
      setStatus('complete');
      setStatusMessage(tr('ocr.progress.complete'));
      setProgress(1);
    } catch {
      setStatus('error');
      setErrorMessage(tr('ocr.error.failed'));
    }
  };

  /* ---- Copy to clipboard ---- */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(extractedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select textarea text
      textareaRef.current?.select();
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  /* ---- Download as .txt ---- */
  const handleDownload = () => {
    const blob = new Blob([extractedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'extracted-text.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  /* ---- Clear / Reset ---- */
  const handleClear = () => {
    setImageFile(null);
    setImagePreview('');
    setExtractedText('');
    setStatus('idle');
    setProgress(0);
    setStatusMessage('');
    setErrorMessage('');
    setCopied(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const isProcessing = status === 'loading' || status === 'recognizing';

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */

  return (
    <section className="py-8 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Privacy badge */}
        <div className="flex items-center justify-center gap-2 mb-6 text-sm font-medium text-[#946D6D] dark:text-slate-300">
          <span>{tr('ocr.privacy.badge')}</span>
        </div>

        {/* OCR Language selector row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <label
            htmlFor="ocr-lang"
            className="text-sm font-medium text-[#946D6D] dark:text-slate-300"
          >
            {tr('ocr.language.label')}
          </label>
          <select
            id="ocr-lang"
            value={ocrLang}
            onChange={(e) => setOcrLang(e.target.value)}
            disabled={isProcessing}
            className="appearance-none rounded-md border border-[#A290B7]/40 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#946D6D] dark:text-slate-200 text-sm pl-3 pr-8 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B0CDE6] dark:focus:ring-[#A290B7] transition-colors disabled:opacity-50"
          >
            {OCR_LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {tr(lang.key)}
              </option>
            ))}
          </select>
        </div>

        {/* Main workspace grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ---- LEFT: Image input / preview ---- */}
          <div className="flex flex-col gap-4">
            {!imagePreview ? (
              /* Dropzone */
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                  relative flex flex-col items-center justify-center min-h-[280px] rounded-xl
                  border-2 border-dashed cursor-pointer transition-colors
                  ${dragActive
                    ? 'border-[#B0CDE6] bg-[#B0CDE6]/20 dark:border-[#A290B7] dark:bg-[#A290B7]/20'
                    : 'border-[#A290B7] hover:bg-[#B0CDE6]/10 dark:border-slate-700 dark:hover:bg-slate-800/50'
                  }
                `}
              >
                {/* Upload icon */}
                <svg
                  className="w-12 h-12 mb-4 text-[#A290B7] dark:text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <p className="text-lg font-semibold text-[#946D6D] dark:text-slate-200 mb-1">
                  {tr('ocr.dropzone.title')}
                </p>
                <p className="text-sm text-[#946D6D]/70 dark:text-slate-400 mb-2 text-center px-4">
                  {tr('ocr.dropzone.subtitle')}
                </p>
                <p className="text-xs text-[#A290B7] dark:text-slate-500">
                  {tr('ocr.dropzone.formats')}
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/gif,image/bmp,image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                  aria-label={tr('ocr.dropzone.title')}
                />
              </div>
            ) : (
              /* Image preview */
              <div className="rounded-xl border border-[#A290B7]/20 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[#A290B7]/10 dark:border-slate-800">
                  <span className="text-sm font-medium text-[#946D6D] dark:text-slate-300">
                    {tr('ocr.preview.title')}
                  </span>
                  <button
                    onClick={handleClear}
                    disabled={isProcessing}
                    className="text-sm text-[#946D6D]/60 dark:text-slate-500 hover:text-[#946D6D] dark:hover:text-slate-300 transition-colors disabled:opacity-50"
                  >
                    {tr('ocr.button.clear')}
                  </button>
                </div>
                <div className="p-4 flex items-center justify-center bg-[#FDF4D2]/30 dark:bg-slate-950">
                  <img
                    src={imagePreview}
                    alt="Uploaded image for OCR text extraction"
                    className="max-h-[300px] max-w-full object-contain rounded"
                  />
                </div>
                {/* Extract button */}
                <div className="p-4 flex gap-3">
                  <button
                    onClick={handleExtract}
                    disabled={isProcessing}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#B0CDE6] dark:bg-[#A290B7] text-slate-900 dark:text-white font-semibold rounded-lg px-4 py-3 hover:brightness-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    {isProcessing ? (
                      /* Spinner */
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                    )}
                    {isProcessing ? statusMessage : tr('ocr.button.extract')}
                  </button>
                </div>
              </div>
            )}

            {/* Progress bar */}
            {isProcessing && (
              <div className="rounded-lg border border-[#A290B7]/20 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#946D6D] dark:text-slate-300">
                    {statusMessage}
                  </span>
                  <span className="text-sm text-[#A290B7] dark:text-slate-500">
                    {Math.round(progress * 100)}%
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={Math.round(progress * 100)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={statusMessage}
                  className="w-full h-2.5 bg-[#FDF4D2] dark:bg-slate-800 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-[#B0CDE6] dark:bg-[#A290B7] rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Error message */}
            {errorMessage && (
              <div className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-400">
                {errorMessage}
              </div>
            )}
          </div>

          {/* ---- RIGHT: Result panel ---- */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-[#A290B7]/20 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden flex flex-col min-h-[280px]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#A290B7]/10 dark:border-slate-800">
                <span className="text-sm font-medium text-[#946D6D] dark:text-slate-300">
                  {tr('ocr.result.title')}
                </span>
                {extractedText && (
                  <span className="text-xs text-[#A290B7] dark:text-slate-500">
                    {tr('ocr.result.edit.hint')}
                  </span>
                )}
              </div>

              {/* Textarea */}
              <textarea
                ref={textareaRef}
                value={extractedText}
                onChange={(e) => setExtractedText(e.target.value)}
                placeholder={tr('ocr.result.placeholder')}
                aria-label={tr('ocr.result.title')}
                className="flex-1 w-full min-h-[200px] p-4 text-sm leading-relaxed text-[#946D6D] dark:text-slate-200 bg-transparent placeholder:text-[#A290B7]/50 dark:placeholder:text-slate-600 resize-none focus:outline-none"
                readOnly={!extractedText && status !== 'complete'}
              />

              {/* Action buttons */}
              {extractedText && (
                <div className="flex gap-2 p-3 border-t border-[#A290B7]/10 dark:border-slate-800">
                  <button
                    onClick={handleCopy}
                    className={`flex-1 flex items-center justify-center gap-2 font-semibold rounded-lg px-4 py-2.5 text-sm transition-all shadow-sm ${
                      copied
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                        : 'bg-[#B0CDE6] dark:bg-[#A290B7] text-slate-900 dark:text-white hover:brightness-95'
                    }`}
                  >
                    {copied ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    )}
                    {copied ? tr('ocr.button.copied') : tr('ocr.button.copy')}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold border border-[#A290B7]/30 dark:border-slate-700 text-[#946D6D] dark:text-slate-300 hover:bg-[#FDF4D2] dark:hover:bg-slate-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    {tr('ocr.button.download')}
                  </button>
                </div>
              )}
            </div>

            {/* Completion badge */}
            {status === 'complete' && extractedText && (
              <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {tr('ocr.progress.complete')}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
