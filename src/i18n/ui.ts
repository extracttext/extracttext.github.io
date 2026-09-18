/**
 * Complete i18n translation dictionary for ExtractText.
 * Covers: SEO meta, navigation, OCR workspace, features, how-it-works,
 * FAQ, footer, 404 page, and developer support CTA.
 *
 * All translations are final — zero placeholders.
 */

export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
} as const;

export type Locale = keyof typeof languages;

export const defaultLang: Locale = 'en';

export const ui = {
  // ─── ENGLISH ────────────────────────────────────────────────
  en: {
    // SEO
    'seo.title': 'ExtractText | Free Image to Text Converter (OCR) Online',
    'seo.description':
      'Extract text from images, screenshots, and photos instantly in your browser. 100% free, no sign-up, and completely private with zero server uploads.',
    'seo.keywords':
      'OCR, image to text, extract text, screenshot to text, free OCR, online OCR, browser OCR, private OCR',

    // Hero Header
    'hero.h1': 'Free Online Image to Text Converter (OCR)',
    'hero.subtitle':
      'Extract text from images, photos, and screenshots instantly in your browser. 100% free, private, and secure with zero server uploads.',

    // Navigation
    'nav.brand': 'ExtractText',
    'nav.theme.light': 'Light mode',
    'nav.theme.dark': 'Dark mode',
    'nav.theme.toggle': 'Toggle theme',
    'nav.language': 'Language',
    'nav.support': '☕ Support the Developer',

    // OCR Workspace
    'ocr.dropzone.title': 'Drop an image here',
    'ocr.dropzone.subtitle': 'or click to browse — you can also paste with Ctrl+V',
    'ocr.dropzone.subtitle.mac': 'or click to browse — you can also paste with ⌘V',
    'ocr.dropzone.formats': 'Supports PNG, JPG, JPEG, GIF, BMP, WEBP',
    'ocr.language.label': 'OCR Language',
    'ocr.language.eng': 'English',
    'ocr.language.spa': 'Spanish',
    'ocr.language.por': 'Portuguese',
    'ocr.language.deu': 'German',
    'ocr.language.fra': 'French',
    'ocr.language.jpn': 'Japanese',
    'ocr.button.extract': 'Extract Text',
    'ocr.button.clear': 'Clear',
    'ocr.button.copy': 'Copy to Clipboard',
    'ocr.button.copied': 'Copied!',
    'ocr.button.download': 'Download as .txt',
    'ocr.progress.loading': 'Loading OCR engine…',
    'ocr.progress.recognizing': 'Recognizing text…',
    'ocr.progress.complete': 'Done!',
    'ocr.result.title': 'Extracted Text',
    'ocr.result.placeholder': 'Extracted text will appear here…',
    'ocr.result.edit.hint': 'You can edit the text before copying.',
    'ocr.privacy.badge': '🔒 100% Private — Runs Locally',
    'ocr.error.invalid': 'Please upload a valid image file.',
    'ocr.error.failed': 'Text extraction failed. Please try again with a different image.',
    'ocr.preview.title': 'Image Preview',

    // Features
    'features.heading': 'Why ExtractText?',
    'features.private.title': '100% Private',
    'features.private.desc':
      'Your images never leave your device. All processing happens right in your browser using WebAssembly.',
    'features.multilang.title': 'Multi-Language OCR',
    'features.multilang.desc':
      'Extract text in English, Spanish, Portuguese, German, French, and Japanese with high accuracy.',
    'features.instant.title': 'Instant Results',
    'features.instant.desc':
      'No sign-up, no waiting. Drop an image and get your text in seconds — completely free.',

    // How It Works
    'howto.heading': 'How It Works',
    'howto.step1.title': 'Upload Your Image',
    'howto.step1.desc': 'Drag and drop, browse your files, or paste from your clipboard.',
    'howto.step2.title': 'Extract Text',
    'howto.step2.desc':
      'Our OCR engine processes your image locally and extracts all readable text.',
    'howto.step3.title': 'Copy & Use',
    'howto.step3.desc':
      'Edit the extracted text if needed, then copy to clipboard or download as a text file.',

    // FAQ
    'faq.heading': 'Frequently Asked Questions',
    'faq.q1': 'Is my data safe?',
    'faq.a1':
      'Absolutely. ExtractText processes images entirely in your browser. No data is ever sent to a server. Your images and text remain 100% private on your device.',
    'faq.q2': 'What image formats are supported?',
    'faq.a2':
      'We support PNG, JPG, JPEG, GIF, BMP, and WEBP. For best results, use clear, high-contrast images.',
    'faq.q3': 'How accurate is the text extraction?',
    'faq.a3':
      'Accuracy depends on image quality. Printed text in high-resolution images typically yields excellent results. Handwritten text and very low-resolution images may produce less accurate output.',
    'faq.q4': 'Do I need to create an account?',
    'faq.a4':
      'No. ExtractText is completely free with no sign-up, no login, and no usage limits.',
    'faq.q5': 'Does it work offline?',
    'faq.a5':
      'The OCR engine needs to download language data on first use. After that, subsequent uses may be cached by your browser for faster performance.',
    'faq.q6': 'Which languages can it recognize?',
    'faq.a6':
      'Currently English, Spanish, Portuguese, German, French, and Japanese. Select the OCR language before extracting for best results.',

    // Footer
    'footer.privacy': 'Your images are never uploaded. All processing is 100% local.',
    'footer.copyright': '© {year} ExtractText. Built with ❤️ for privacy.',
    'footer.developer': 'Made by Kishara Dilshan',
    'footer.support': 'Support the Developer',

    // 404 Page
    '404.title': 'Page Not Found',
    '404.description': "The page you're looking for doesn't exist or has been moved.",
    '404.button': 'Go to Homepage',
  },

  // ─── SPANISH ────────────────────────────────────────────────
  es: {
    'seo.title': 'ExtractText | Convertidor Gratuito de Imagen a Texto (OCR) en Línea',
    'seo.description':
      'Extrae texto de imágenes, capturas de pantalla y fotos instantáneamente en tu navegador. 100% gratis, sin registro y completamente privado, sin subir archivos al servidor.',
    'seo.keywords':
      'OCR, imagen a texto, extraer texto, captura a texto, OCR gratis, OCR en línea, OCR navegador, OCR privado',

    // Hero Header
    'hero.h1': 'Convertidor Gratuito de Imagen a Texto (OCR) en Línea',
    'hero.subtitle':
      'Extrae texto de imágenes, fotos y capturas de pantalla al instante en tu navegador. 100% gratis, privado y seguro, sin subir archivos.',

    'nav.brand': 'ExtractText',
    'nav.theme.light': 'Modo claro',
    'nav.theme.dark': 'Modo oscuro',
    'nav.theme.toggle': 'Cambiar tema',
    'nav.language': 'Idioma',
    'nav.support': '☕ Apoya al desarrollador',

    'ocr.dropzone.title': 'Suelta una imagen aquí',
    'ocr.dropzone.subtitle': 'o haz clic para buscar — también puedes pegar con Ctrl+V',
    'ocr.dropzone.subtitle.mac': 'o haz clic para buscar — también puedes pegar con ⌘V',
    'ocr.dropzone.formats': 'Soporta PNG, JPG, JPEG, GIF, BMP, WEBP',
    'ocr.language.label': 'Idioma OCR',
    'ocr.language.eng': 'Inglés',
    'ocr.language.spa': 'Español',
    'ocr.language.por': 'Portugués',
    'ocr.language.deu': 'Alemán',
    'ocr.language.fra': 'Francés',
    'ocr.language.jpn': 'Japonés',
    'ocr.button.extract': 'Extraer texto',
    'ocr.button.clear': 'Limpiar',
    'ocr.button.copy': 'Copiar al portapapeles',
    'ocr.button.copied': '¡Copiado!',
    'ocr.button.download': 'Descargar como .txt',
    'ocr.progress.loading': 'Cargando motor OCR…',
    'ocr.progress.recognizing': 'Reconociendo texto…',
    'ocr.progress.complete': '¡Listo!',
    'ocr.result.title': 'Texto extraído',
    'ocr.result.placeholder': 'El texto extraído aparecerá aquí…',
    'ocr.result.edit.hint': 'Puedes editar el texto antes de copiarlo.',
    'ocr.privacy.badge': '🔒 100% Privado — Se ejecuta localmente',
    'ocr.error.invalid': 'Por favor, sube un archivo de imagen válido.',
    'ocr.error.failed':
      'La extracción de texto falló. Intenta de nuevo con una imagen diferente.',
    'ocr.preview.title': 'Vista previa de imagen',

    'features.heading': '¿Por qué ExtractText?',
    'features.private.title': '100% Privado',
    'features.private.desc':
      'Tus imágenes nunca salen de tu dispositivo. Todo el procesamiento ocurre directamente en tu navegador usando WebAssembly.',
    'features.multilang.title': 'OCR multilingüe',
    'features.multilang.desc':
      'Extrae texto en inglés, español, portugués, alemán, francés y japonés con alta precisión.',
    'features.instant.title': 'Resultados instantáneos',
    'features.instant.desc':
      'Sin registro, sin esperas. Suelta una imagen y obtén tu texto en segundos — completamente gratis.',

    'howto.heading': 'Cómo funciona',
    'howto.step1.title': 'Sube tu imagen',
    'howto.step1.desc':
      'Arrastra y suelta, busca en tus archivos o pega desde el portapapeles.',
    'howto.step2.title': 'Extrae texto',
    'howto.step2.desc':
      'Nuestro motor OCR procesa tu imagen localmente y extrae todo el texto legible.',
    'howto.step3.title': 'Copia y usa',
    'howto.step3.desc':
      'Edita el texto extraído si es necesario, luego cópialo al portapapeles o descárgalo como archivo de texto.',

    'faq.heading': 'Preguntas frecuentes',
    'faq.q1': '¿Mis datos están seguros?',
    'faq.a1':
      'Totalmente. ExtractText procesa las imágenes completamente en tu navegador. Nunca se envían datos a un servidor. Tus imágenes y texto permanecen 100% privados en tu dispositivo.',
    'faq.q2': '¿Qué formatos de imagen se admiten?',
    'faq.a2':
      'Admitimos PNG, JPG, JPEG, GIF, BMP y WEBP. Para mejores resultados, usa imágenes claras y de alto contraste.',
    'faq.q3': '¿Qué tan precisa es la extracción de texto?',
    'faq.a3':
      'La precisión depende de la calidad de la imagen. El texto impreso en imágenes de alta resolución generalmente produce resultados excelentes. El texto manuscrito y las imágenes de muy baja resolución pueden producir resultados menos precisos.',
    'faq.q4': '¿Necesito crear una cuenta?',
    'faq.a4':
      'No. ExtractText es completamente gratuito, sin registro, sin inicio de sesión y sin límites de uso.',
    'faq.q5': '¿Funciona sin conexión?',
    'faq.a5':
      'El motor OCR necesita descargar datos del idioma en el primer uso. Después, los usos posteriores pueden ser almacenados en caché por tu navegador para un rendimiento más rápido.',
    'faq.q6': '¿Qué idiomas puede reconocer?',
    'faq.a6':
      'Actualmente inglés, español, portugués, alemán, francés y japonés. Selecciona el idioma OCR antes de extraer para obtener mejores resultados.',

    'footer.privacy':
      'Tus imágenes nunca se suben. Todo el procesamiento es 100% local.',
    'footer.copyright': '© {year} ExtractText. Hecho con ❤️ por la privacidad.',
    'footer.developer': 'Creado por Kishara Dilshan',
    'footer.support': 'Apoya al desarrollador',

    '404.title': 'Página no encontrada',
    '404.description':
      'La página que buscas no existe o ha sido movida.',
    '404.button': 'Ir a la página principal',
  },

  // ─── PORTUGUESE ─────────────────────────────────────────────
  pt: {
    'seo.title': 'ExtractText | Conversor Gratuito de Imagem para Texto (OCR) Online',
    'seo.description':
      'Extraia texto de imagens, capturas de tela e fotos instantaneamente no seu navegador. 100% grátis, sem cadastro e completamente privado, sem envio ao servidor.',
    'seo.keywords':
      'OCR, imagem para texto, extrair texto, captura para texto, OCR grátis, OCR online, OCR navegador, OCR privado',

    // Hero Header
    'hero.h1': 'Conversor Gratuito de Imagem para Texto (OCR) Online',
    'hero.subtitle':
      'Extraia texto de imagens, fotos e capturas de tela instantaneamente no seu navegador. 100% grátis, privado e seguro, sem upload.',

    'nav.brand': 'ExtractText',
    'nav.theme.light': 'Modo claro',
    'nav.theme.dark': 'Modo escuro',
    'nav.theme.toggle': 'Alternar tema',
    'nav.language': 'Idioma',
    'nav.support': '☕ Apoie o desenvolvedor',

    'ocr.dropzone.title': 'Solte uma imagem aqui',
    'ocr.dropzone.subtitle': 'ou clique para procurar — você também pode colar com Ctrl+V',
    'ocr.dropzone.subtitle.mac': 'ou clique para procurar — você também pode colar com ⌘V',
    'ocr.dropzone.formats': 'Suporta PNG, JPG, JPEG, GIF, BMP, WEBP',
    'ocr.language.label': 'Idioma OCR',
    'ocr.language.eng': 'Inglês',
    'ocr.language.spa': 'Espanhol',
    'ocr.language.por': 'Português',
    'ocr.language.deu': 'Alemão',
    'ocr.language.fra': 'Francês',
    'ocr.language.jpn': 'Japonês',
    'ocr.button.extract': 'Extrair texto',
    'ocr.button.clear': 'Limpar',
    'ocr.button.copy': 'Copiar para a área de transferência',
    'ocr.button.copied': 'Copiado!',
    'ocr.button.download': 'Baixar como .txt',
    'ocr.progress.loading': 'Carregando motor OCR…',
    'ocr.progress.recognizing': 'Reconhecendo texto…',
    'ocr.progress.complete': 'Concluído!',
    'ocr.result.title': 'Texto extraído',
    'ocr.result.placeholder': 'O texto extraído aparecerá aqui…',
    'ocr.result.edit.hint': 'Você pode editar o texto antes de copiar.',
    'ocr.privacy.badge': '🔒 100% Privado — Executa localmente',
    'ocr.error.invalid': 'Por favor, envie um arquivo de imagem válido.',
    'ocr.error.failed':
      'A extração de texto falhou. Tente novamente com uma imagem diferente.',
    'ocr.preview.title': 'Pré-visualização da imagem',

    'features.heading': 'Por que o ExtractText?',
    'features.private.title': '100% Privado',
    'features.private.desc':
      'Suas imagens nunca saem do seu dispositivo. Todo o processamento acontece diretamente no seu navegador usando WebAssembly.',
    'features.multilang.title': 'OCR multilíngue',
    'features.multilang.desc':
      'Extraia texto em inglês, espanhol, português, alemão, francês e japonês com alta precisão.',
    'features.instant.title': 'Resultados instantâneos',
    'features.instant.desc':
      'Sem cadastro, sem espera. Solte uma imagem e obtenha seu texto em segundos — completamente grátis.',

    'howto.heading': 'Como funciona',
    'howto.step1.title': 'Envie sua imagem',
    'howto.step1.desc':
      'Arraste e solte, procure em seus arquivos ou cole da área de transferência.',
    'howto.step2.title': 'Extraia texto',
    'howto.step2.desc':
      'Nosso motor OCR processa sua imagem localmente e extrai todo o texto legível.',
    'howto.step3.title': 'Copie e use',
    'howto.step3.desc':
      'Edite o texto extraído se necessário, depois copie para a área de transferência ou baixe como arquivo de texto.',

    'faq.heading': 'Perguntas frequentes',
    'faq.q1': 'Meus dados estão seguros?',
    'faq.a1':
      'Com certeza. O ExtractText processa imagens inteiramente no seu navegador. Nenhum dado é enviado a um servidor. Suas imagens e texto permanecem 100% privados no seu dispositivo.',
    'faq.q2': 'Quais formatos de imagem são suportados?',
    'faq.a2':
      'Suportamos PNG, JPG, JPEG, GIF, BMP e WEBP. Para melhores resultados, use imagens claras e de alto contraste.',
    'faq.q3': 'Quão precisa é a extração de texto?',
    'faq.a3':
      'A precisão depende da qualidade da imagem. Texto impresso em imagens de alta resolução geralmente produz resultados excelentes. Texto manuscrito e imagens de resolução muito baixa podem produzir resultados menos precisos.',
    'faq.q4': 'Preciso criar uma conta?',
    'faq.a4':
      'Não. O ExtractText é completamente gratuito, sem cadastro, sem login e sem limites de uso.',
    'faq.q5': 'Funciona offline?',
    'faq.a5':
      'O motor OCR precisa baixar dados do idioma no primeiro uso. Depois disso, usos subsequentes podem ser armazenados em cache pelo navegador para melhor desempenho.',
    'faq.q6': 'Quais idiomas ele pode reconhecer?',
    'faq.a6':
      'Atualmente inglês, espanhol, português, alemão, francês e japonês. Selecione o idioma OCR antes de extrair para obter melhores resultados.',

    'footer.privacy':
      'Suas imagens nunca são enviadas. Todo o processamento é 100% local.',
    'footer.copyright': '© {year} ExtractText. Feito com ❤️ pela privacidade.',
    'footer.developer': 'Criado por Kishara Dilshan',
    'footer.support': 'Apoie o desenvolvedor',

    '404.title': 'Página não encontrada',
    '404.description':
      'A página que você procura não existe ou foi movida.',
    '404.button': 'Ir para a página inicial',
  },

  // ─── GERMAN ─────────────────────────────────────────────────
  de: {
    'seo.title':
      'ExtractText | Kostenloser Bild-zu-Text-Konverter (OCR) Online',
    'seo.description':
      'Extrahieren Sie sofort Text aus Bildern, Screenshots und Fotos in Ihrem Browser. 100% kostenlos, ohne Anmeldung und vollständig privat — keine Server-Uploads.',
    'seo.keywords':
      'OCR, Bild zu Text, Text extrahieren, Screenshot zu Text, kostenlose OCR, Online-OCR, Browser-OCR, private OCR',

    // Hero Header
    'hero.h1': 'Kostenloser Online Bild-zu-Text-Konverter (OCR)',
    'hero.subtitle':
      'Extrahieren Sie sofort Text aus Bildern, Fotos und Screenshots in Ihrem Browser. 100% kostenlos, privat und sicher ohne Server-Upload.',

    'nav.brand': 'ExtractText',
    'nav.theme.light': 'Heller Modus',
    'nav.theme.dark': 'Dunkler Modus',
    'nav.theme.toggle': 'Thema wechseln',
    'nav.language': 'Sprache',
    'nav.support': '☕ Unterstütze den Entwickler',

    'ocr.dropzone.title': 'Bild hier ablegen',
    'ocr.dropzone.subtitle':
      'oder klicken zum Durchsuchen — Sie können auch mit Strg+V einfügen',
    'ocr.dropzone.subtitle.mac':
      'oder klicken zum Durchsuchen — Sie können auch mit ⌘V einfügen',
    'ocr.dropzone.formats': 'Unterstützt PNG, JPG, JPEG, GIF, BMP, WEBP',
    'ocr.language.label': 'OCR-Sprache',
    'ocr.language.eng': 'Englisch',
    'ocr.language.spa': 'Spanisch',
    'ocr.language.por': 'Portugiesisch',
    'ocr.language.deu': 'Deutsch',
    'ocr.language.fra': 'Französisch',
    'ocr.language.jpn': 'Japanisch',
    'ocr.button.extract': 'Text extrahieren',
    'ocr.button.clear': 'Löschen',
    'ocr.button.copy': 'In die Zwischenablage kopieren',
    'ocr.button.copied': 'Kopiert!',
    'ocr.button.download': 'Als .txt herunterladen',
    'ocr.progress.loading': 'OCR-Engine wird geladen…',
    'ocr.progress.recognizing': 'Text wird erkannt…',
    'ocr.progress.complete': 'Fertig!',
    'ocr.result.title': 'Extrahierter Text',
    'ocr.result.placeholder': 'Der extrahierte Text erscheint hier…',
    'ocr.result.edit.hint': 'Sie können den Text vor dem Kopieren bearbeiten.',
    'ocr.privacy.badge': '🔒 100% Privat — Läuft lokal',
    'ocr.error.invalid': 'Bitte laden Sie eine gültige Bilddatei hoch.',
    'ocr.error.failed':
      'Die Textextraktion ist fehlgeschlagen. Bitte versuchen Sie es mit einem anderen Bild.',
    'ocr.preview.title': 'Bildvorschau',

    'features.heading': 'Warum ExtractText?',
    'features.private.title': '100% Privat',
    'features.private.desc':
      'Ihre Bilder verlassen niemals Ihr Gerät. Die gesamte Verarbeitung erfolgt direkt in Ihrem Browser mit WebAssembly.',
    'features.multilang.title': 'Mehrsprachige OCR',
    'features.multilang.desc':
      'Extrahieren Sie Text auf Englisch, Spanisch, Portugiesisch, Deutsch, Französisch und Japanisch mit hoher Genauigkeit.',
    'features.instant.title': 'Sofortige Ergebnisse',
    'features.instant.desc':
      'Keine Anmeldung, kein Warten. Legen Sie ein Bild ab und erhalten Sie Ihren Text in Sekunden — völlig kostenlos.',

    'howto.heading': 'So funktioniert es',
    'howto.step1.title': 'Bild hochladen',
    'howto.step1.desc':
      'Ziehen und ablegen, Dateien durchsuchen oder aus der Zwischenablage einfügen.',
    'howto.step2.title': 'Text extrahieren',
    'howto.step2.desc':
      'Unsere OCR-Engine verarbeitet Ihr Bild lokal und extrahiert den gesamten lesbaren Text.',
    'howto.step3.title': 'Kopieren und verwenden',
    'howto.step3.desc':
      'Bearbeiten Sie den extrahierten Text bei Bedarf, dann kopieren Sie ihn in die Zwischenablage oder laden Sie ihn als Textdatei herunter.',

    'faq.heading': 'Häufig gestellte Fragen',
    'faq.q1': 'Sind meine Daten sicher?',
    'faq.a1':
      'Absolut. ExtractText verarbeitet Bilder vollständig in Ihrem Browser. Es werden niemals Daten an einen Server gesendet. Ihre Bilder und Texte bleiben 100% privat auf Ihrem Gerät.',
    'faq.q2': 'Welche Bildformate werden unterstützt?',
    'faq.a2':
      'Wir unterstützen PNG, JPG, JPEG, GIF, BMP und WEBP. Für beste Ergebnisse verwenden Sie klare, kontrastreiche Bilder.',
    'faq.q3': 'Wie genau ist die Textextraktion?',
    'faq.a3':
      'Die Genauigkeit hängt von der Bildqualität ab. Gedruckter Text in hochauflösenden Bildern liefert in der Regel hervorragende Ergebnisse. Handgeschriebener Text und sehr niedrig aufgelöste Bilder können weniger genaue Ergebnisse liefern.',
    'faq.q4': 'Muss ich ein Konto erstellen?',
    'faq.a4':
      'Nein. ExtractText ist völlig kostenlos — ohne Registrierung, ohne Anmeldung und ohne Nutzungsbeschränkungen.',
    'faq.q5': 'Funktioniert es offline?',
    'faq.a5':
      'Die OCR-Engine muss beim ersten Gebrauch Sprachdaten herunterladen. Danach können nachfolgende Nutzungen vom Browser zwischengespeichert werden, um die Leistung zu verbessern.',
    'faq.q6': 'Welche Sprachen kann es erkennen?',
    'faq.a6':
      'Derzeit Englisch, Spanisch, Portugiesisch, Deutsch, Französisch und Japanisch. Wählen Sie die OCR-Sprache vor der Extraktion für beste Ergebnisse.',

    'footer.privacy':
      'Ihre Bilder werden niemals hochgeladen. Die gesamte Verarbeitung ist 100% lokal.',
    'footer.copyright': '© {year} ExtractText. Mit ❤️ für Privatsphäre entwickelt.',
    'footer.developer': 'Erstellt von Kishara Dilshan',
    'footer.support': 'Unterstütze den Entwickler',

    '404.title': 'Seite nicht gefunden',
    '404.description':
      'Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.',
    '404.button': 'Zur Startseite',
  },

  // ─── FRENCH ─────────────────────────────────────────────────
  fr: {
    'seo.title':
      'ExtractText | Convertisseur Gratuit d\'Image en Texte (OCR) en Ligne',
    'seo.description':
      'Extrayez du texte à partir d\'images, de captures d\'écran et de photos instantanément dans votre navigateur. 100% gratuit, sans inscription et totalement privé — aucun envoi au serveur.',
    'seo.keywords':
      'OCR, image en texte, extraire texte, capture en texte, OCR gratuit, OCR en ligne, OCR navigateur, OCR privé',

    // Hero Header
    'hero.h1': 'Convertisseur Image en Texte Gratuit en Ligne (OCR)',
    'hero.subtitle':
      'Extrayez du texte d\'images, de photos et de captures d\'écran instantanément dans votre navigateur. 100% gratuit, privé et sans téléversement.',

    'nav.brand': 'ExtractText',
    'nav.theme.light': 'Mode clair',
    'nav.theme.dark': 'Mode sombre',
    'nav.theme.toggle': 'Changer de thème',
    'nav.language': 'Langue',
    'nav.support': '☕ Soutenir le développeur',

    'ocr.dropzone.title': 'Déposez une image ici',
    'ocr.dropzone.subtitle':
      'ou cliquez pour parcourir — vous pouvez aussi coller avec Ctrl+V',
    'ocr.dropzone.subtitle.mac':
      'ou cliquez pour parcourir — vous pouvez aussi coller avec ⌘V',
    'ocr.dropzone.formats': 'Prend en charge PNG, JPG, JPEG, GIF, BMP, WEBP',
    'ocr.language.label': 'Langue OCR',
    'ocr.language.eng': 'Anglais',
    'ocr.language.spa': 'Espagnol',
    'ocr.language.por': 'Portugais',
    'ocr.language.deu': 'Allemand',
    'ocr.language.fra': 'Français',
    'ocr.language.jpn': 'Japonais',
    'ocr.button.extract': 'Extraire le texte',
    'ocr.button.clear': 'Effacer',
    'ocr.button.copy': 'Copier dans le presse-papiers',
    'ocr.button.copied': 'Copié !',
    'ocr.button.download': 'Télécharger en .txt',
    'ocr.progress.loading': 'Chargement du moteur OCR…',
    'ocr.progress.recognizing': 'Reconnaissance du texte…',
    'ocr.progress.complete': 'Terminé !',
    'ocr.result.title': 'Texte extrait',
    'ocr.result.placeholder': 'Le texte extrait apparaîtra ici…',
    'ocr.result.edit.hint': 'Vous pouvez modifier le texte avant de le copier.',
    'ocr.privacy.badge': '🔒 100% Privé — Fonctionne localement',
    'ocr.error.invalid': 'Veuillez télécharger un fichier image valide.',
    'ocr.error.failed':
      'L\'extraction du texte a échoué. Veuillez réessayer avec une autre image.',
    'ocr.preview.title': 'Aperçu de l\'image',

    'features.heading': 'Pourquoi ExtractText ?',
    'features.private.title': '100% Privé',
    'features.private.desc':
      'Vos images ne quittent jamais votre appareil. Tout le traitement se fait directement dans votre navigateur avec WebAssembly.',
    'features.multilang.title': 'OCR multilingue',
    'features.multilang.desc':
      'Extrayez du texte en anglais, espagnol, portugais, allemand, français et japonais avec une haute précision.',
    'features.instant.title': 'Résultats instantanés',
    'features.instant.desc':
      'Pas d\'inscription, pas d\'attente. Déposez une image et obtenez votre texte en quelques secondes — entièrement gratuit.',

    'howto.heading': 'Comment ça marche',
    'howto.step1.title': 'Téléchargez votre image',
    'howto.step1.desc':
      'Glissez-déposez, parcourez vos fichiers ou collez depuis le presse-papiers.',
    'howto.step2.title': 'Extraire le texte',
    'howto.step2.desc':
      'Notre moteur OCR traite votre image localement et extrait tout le texte lisible.',
    'howto.step3.title': 'Copiez et utilisez',
    'howto.step3.desc':
      'Modifiez le texte extrait si nécessaire, puis copiez-le dans le presse-papiers ou téléchargez-le en fichier texte.',

    'faq.heading': 'Questions fréquemment posées',
    'faq.q1': 'Mes données sont-elles en sécurité ?',
    'faq.a1':
      'Absolument. ExtractText traite les images entièrement dans votre navigateur. Aucune donnée n\'est jamais envoyée à un serveur. Vos images et textes restent 100% privés sur votre appareil.',
    'faq.q2': 'Quels formats d\'image sont pris en charge ?',
    'faq.a2':
      'Nous prenons en charge PNG, JPG, JPEG, GIF, BMP et WEBP. Pour de meilleurs résultats, utilisez des images claires et à fort contraste.',
    'faq.q3': 'Quelle est la précision de l\'extraction de texte ?',
    'faq.a3':
      'La précision dépend de la qualité de l\'image. Le texte imprimé dans des images haute résolution donne généralement d\'excellents résultats. Le texte manuscrit et les images à très basse résolution peuvent donner des résultats moins précis.',
    'faq.q4': 'Dois-je créer un compte ?',
    'faq.a4':
      'Non. ExtractText est entièrement gratuit — sans inscription, sans connexion et sans limites d\'utilisation.',
    'faq.q5': 'Fonctionne-t-il hors ligne ?',
    'faq.a5':
      'Le moteur OCR doit télécharger les données linguistiques lors de la première utilisation. Ensuite, les utilisations suivantes peuvent être mises en cache par votre navigateur pour de meilleures performances.',
    'faq.q6': 'Quelles langues peut-il reconnaître ?',
    'faq.a6':
      'Actuellement l\'anglais, l\'espagnol, le portugais, l\'allemand, le français et le japonais. Sélectionnez la langue OCR avant l\'extraction pour de meilleurs résultats.',

    'footer.privacy':
      'Vos images ne sont jamais envoyées. Tout le traitement est 100% local.',
    'footer.copyright': '© {year} ExtractText. Fait avec ❤️ pour la confidentialité.',
    'footer.developer': 'Créé par Kishara Dilshan',
    'footer.support': 'Soutenir le développeur',

    '404.title': 'Page non trouvée',
    '404.description':
      'La page que vous recherchez n\'existe pas ou a été déplacée.',
    '404.button': 'Aller à la page d\'accueil',
  },

  // ─── JAPANESE ───────────────────────────────────────────────
  ja: {
    'seo.title': 'ExtractText | 無料オンライン画像テキスト変換（OCR）ツール',
    'seo.description':
      'ブラウザで画像、スクリーンショット、写真からテキストを瞬時に抽出。100%無料、登録不要、完全プライベート — サーバーへのアップロードなし。',
    'seo.keywords':
      'OCR, 画像からテキスト, テキスト抽出, スクリーンショットからテキスト, 無料OCR, オンラインOCR, ブラウザOCR, プライベートOCR',

    // Hero Header
    'hero.h1': '無料オンライン画像テキスト変換ツール (OCR)',
    'hero.subtitle':
      '画像、写真、スクリーンショットから瞬時にテキストを抽出。100%無料、完全プライベートでサーバー保存なし。',

    'nav.brand': 'ExtractText',
    'nav.theme.light': 'ライトモード',
    'nav.theme.dark': 'ダークモード',
    'nav.theme.toggle': 'テーマ切替',
    'nav.language': '言語',
    'nav.support': '☕ 開発者を支援する',

    'ocr.dropzone.title': 'ここに画像をドロップ',
    'ocr.dropzone.subtitle':
      'またはクリックして参照 — Ctrl+Vで貼り付けもできます',
    'ocr.dropzone.subtitle.mac':
      'またはクリックして参照 — ⌘Vで貼り付けもできます',
    'ocr.dropzone.formats': 'PNG、JPG、JPEG、GIF、BMP、WEBPに対応',
    'ocr.language.label': 'OCR言語',
    'ocr.language.eng': '英語',
    'ocr.language.spa': 'スペイン語',
    'ocr.language.por': 'ポルトガル語',
    'ocr.language.deu': 'ドイツ語',
    'ocr.language.fra': 'フランス語',
    'ocr.language.jpn': '日本語',
    'ocr.button.extract': 'テキストを抽出',
    'ocr.button.clear': 'クリア',
    'ocr.button.copy': 'クリップボードにコピー',
    'ocr.button.copied': 'コピーしました！',
    'ocr.button.download': '.txtでダウンロード',
    'ocr.progress.loading': 'OCRエンジンを読み込み中…',
    'ocr.progress.recognizing': 'テキストを認識中…',
    'ocr.progress.complete': '完了！',
    'ocr.result.title': '抽出されたテキスト',
    'ocr.result.placeholder': '抽出されたテキストがここに表示されます…',
    'ocr.result.edit.hint': 'コピーする前にテキストを編集できます。',
    'ocr.privacy.badge': '🔒 100%プライベート — ローカルで実行',
    'ocr.error.invalid': '有効な画像ファイルをアップロードしてください。',
    'ocr.error.failed':
      'テキスト抽出に失敗しました。別の画像でもう一度お試しください。',
    'ocr.preview.title': '画像プレビュー',

    'features.heading': 'ExtractTextを選ぶ理由',
    'features.private.title': '100%プライベート',
    'features.private.desc':
      '画像がデバイスから出ることはありません。すべての処理はWebAssemblyを使ってブラウザ内で直接行われます。',
    'features.multilang.title': '多言語OCR',
    'features.multilang.desc':
      '英語、スペイン語、ポルトガル語、ドイツ語、フランス語、日本語のテキストを高精度で抽出。',
    'features.instant.title': '即時結果',
    'features.instant.desc':
      '登録不要、待ち時間なし。画像をドロップするだけで数秒でテキストを取得 — 完全無料。',

    'howto.heading': '使い方',
    'howto.step1.title': '画像をアップロード',
    'howto.step1.desc':
      'ドラッグ＆ドロップ、ファイルを参照、またはクリップボードから貼り付け。',
    'howto.step2.title': 'テキストを抽出',
    'howto.step2.desc':
      'OCRエンジンが画像をローカルで処理し、すべての読み取り可能なテキストを抽出します。',
    'howto.step3.title': 'コピーして使用',
    'howto.step3.desc':
      '必要に応じて抽出されたテキストを編集し、クリップボードにコピーまたはテキストファイルとしてダウンロード。',

    'faq.heading': 'よくある質問',
    'faq.q1': 'データは安全ですか？',
    'faq.a1':
      'はい、完全に安全です。ExtractTextは画像をすべてブラウザ内で処理します。データがサーバーに送信されることはありません。画像とテキストはデバイス上で100%プライベートに保たれます。',
    'faq.q2': 'どの画像形式に対応していますか？',
    'faq.a2':
      'PNG、JPG、JPEG、GIF、BMP、WEBPに対応しています。最良の結果を得るには、鮮明でコントラストの高い画像をご使用ください。',
    'faq.q3': 'テキスト抽出の精度はどの程度ですか？',
    'faq.a3':
      '精度は画像の品質に依存します。高解像度画像の印刷テキストは通常、優れた結果を生み出します。手書きテキストや非常に低解像度の画像は、精度が低くなる場合があります。',
    'faq.q4': 'アカウントを作成する必要がありますか？',
    'faq.a4':
      'いいえ。ExtractTextは完全無料で、登録不要、ログイン不要、使用制限なしです。',
    'faq.q5': 'オフラインで動作しますか？',
    'faq.a5':
      'OCRエンジンは初回使用時に言語データをダウンロードする必要があります。その後、ブラウザにキャッシュされ、より高速に動作する場合があります。',
    'faq.q6': 'どの言語を認識できますか？',
    'faq.a6':
      '現在、英語、スペイン語、ポルトガル語、ドイツ語、フランス語、日本語に対応しています。最良の結果を得るには、抽出前にOCR言語を選択してください。',

    'footer.privacy':
      '画像がアップロードされることはありません。すべての処理は100%ローカルで行われます。',
    'footer.copyright': '© {year} ExtractText. プライバシーのために❤️を込めて作成。',
    'footer.developer': 'Kishara Dilshan 制作',
    'footer.support': '開発者を支援する',

    '404.title': 'ページが見つかりません',
    '404.description':
      'お探しのページは存在しないか、移動されました。',
    '404.button': 'ホームページへ戻る',
  },
} as const;

/** Union type of all translation keys */
export type TranslationKey = keyof typeof ui.en;
