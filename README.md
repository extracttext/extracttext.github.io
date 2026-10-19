# ExtractText — Free Online Image to Text Converter (OCR)

> Extract text from images, screenshots, and photos instantly in your browser.
> 100% free, no sign-up, and completely private — **zero server uploads**.

🌐 **Live:** [extracttext.github.io](https://extracttext.github.io)

---

## ✨ Features

- **100% Client-Side** — All OCR processing runs locally in your browser using WebAssembly. Your images never leave your device.
- **Drag & Drop / Paste** — Upload images by dragging, browsing, or pasting from your clipboard (`Ctrl+V` / `⌘V`).
- **Multi-Language OCR** — Recognize text in English, Spanish, Portuguese, German, French, and Japanese.
- **Copy & Download** — Edit extracted text, copy to clipboard, or download as `.txt`.
- **Dark/Light Mode** — Persistent theme with zero FOUC (flash of unstyled content).
- **6 UI Languages** — Full i18n with subpath routing (`/`, `/es/`, `/pt/`, `/de/`, `/fr/`, `/ja/`).
- **SEO Optimized** — Hreflang tags, canonical URLs, Open Graph, Twitter Cards, and JSON-LD structured data.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build) (Static Site Generation) |
| UI Library | [React 19](https://react.dev) (Astro Islands with `client:load`) |
| OCR Engine | [Tesseract.js](https://tesseract.projectnaptha.com/) (WebAssembly) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) (`darkMode: 'class'`) |
| Icons | Inline SVGs + [lucide-react](https://lucide.dev) |
| Deployment | [GitHub Pages](https://pages.github.com) via GitHub Actions |

---

## 🏗 Architecture

```
src/
├── components/
│   ├── OcrWorkspace.tsx     ← React island (client:load)
│   ├── Header.astro         ← Sticky nav with theme/language/support
│   ├── ThemeToggle.astro    ← Dark/light toggle
│   ├── LanguagePicker.astro ← Locale switcher
│   ├── Features.astro       ← Feature cards
│   ├── HowItWorks.astro     ← 3-step workflow
│   ├── Faq.astro            ← Accordion FAQ
│   └── Footer.astro         ← Privacy + links
├── i18n/
│   ├── ui.ts                ← 6-locale translation dictionary
│   └── utils.ts             ← i18n helpers
├── layouts/
│   └── Layout.astro         ← Master layout (SEO, hreflang, JSON-LD)
└── pages/
    ├── index.astro           ← English (default, root /)
    ├── [lang]/index.astro    ← es, pt, de, fr, ja subpaths
    └── 404.astro             ← Custom 404
```

All OCR processing happens inside `OcrWorkspace.tsx` via `Tesseract.recognize()`. The WASM worker and language model files are fetched from a CDN on first use and cached by the browser.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+ and npm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/extracttext/extracttext.github.io.git
cd extracttext.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

The static site will be generated in `dist/` with all 6 locale pages.

### Preview Production Build

```bash
npm run preview
```

---

## 🌍 Deployment

This project deploys automatically to GitHub Pages via the [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) workflow on every push to `main`.

To enable deployment:

1. Go to your repository **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**

---

## 🎨 Design System

| Token | Hex | Usage |
|-------|-----|-------|
| Soft Cream | `#FDF4D2` | Light mode background |
| Sky Blue | `#B0CDE6` | Primary buttons (light) |
| Muted Purple | `#A290B7` | Borders, primary buttons (dark) |
| Dusty Rose | `#946D6D` | Text color (light mode) |

---

## 🔒 Privacy

ExtractText processes images **entirely in your browser**. No data is sent to any server. No cookies, no tracking, no analytics.

---

## 🤝 Support

If you find this tool useful, consider supporting the developer:

**[☕ Support on Ko-fi](https://ko-fi.com/kishara)**

---

## 📄 License

[MIT](LICENSE)
