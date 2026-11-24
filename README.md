# ExtractText

> High-performance, zero-upload, browser-native Optical Character Recognition (OCR) application built with Astro 5, React 19, and WebAssembly.

ExtractText allows users to extract editable text from screenshots, scanned documents, and image files directly inside their browser. All image processing and optical character recognition happen client-side using WebAssembly, ensuring zero data transmission to external servers.

- **Production URL:** [https://extracttext.github.io/](https://extracttext.github.io/)
- **Guide:** [https://extracttext.github.io/how-to-convert-image-to-text/](https://extracttext.github.io/how-to-convert-image-to-text/)

---

## Key Highlights

- **100% Private (Zero-Upload Architecture):** Image parsing and neural character recognition are executed strictly within the client browser via WebAssembly web workers. No images or text snippets ever leave the user device.
- **Multiple Input Methods:** Supports interactive drag-and-drop, traditional file selection, and direct OS clipboard pasting (`Ctrl+V` on Windows/Linux or `⌘V` on macOS).
- **Multi-Language OCR Engine:** Accurately extracts text in English, Spanish, Portuguese, German, French, and Japanese.
- **Immediate Text Utility:** Extracted text is instantly editable in an interactive workspace with one-click clipboard copying and `.txt` file export.
- **6-Language Static Routing:** Fully localized static subpaths (`/`, `/es/`, `/pt/`, `/de/`, `/fr/`, `/ja/`) built with Astro 5 static site generation.
- **Technical SEO & Structured Data:** Bidirectional hreflang tags, canonical URLs, high-resolution Open Graph / Twitter cards, and multi-entity JSON-LD schemas (`WebApplication`, `HowTo`, `FAQPage`, `TechArticle`, `BreadcrumbList`, `Organization`).
- **Zero-FOUC Theme System:** Seamless light and high-contrast dark themes synced with `localStorage`, featuring an inline anti-FOUC initialization script.

---

## Technical Stack

| Layer | Solution | Description |
|---|---|---|
| **Framework** | [Astro 5](https://astro.build/) | Static Site Generation (SSG) with file-based subpath routing |
| **Interactive UI** | [React 19](https://react.dev/) | Isolated client-side island (`OcrWorkspace.tsx`) with `client:load` |
| **OCR Runtime** | [Tesseract.js v6](https://tesseract.projectnaptha.com/) | Pure WebAssembly neural network OCR runtime with web workers |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Class-based dark mode (`darkMode: 'class'`) with custom color tokens |
| **Icons** | [Lucide React](https://lucide.dev/) + Inline SVGs | Lightweight, accessible vector iconography |
| **CI / CD** | [GitHub Actions](https://github.com/features/actions) | Automated build and deployment to GitHub Pages via `withastro/action` |

---

## Supported Formats & OCR Languages

### Image Formats
- **Raster Formats:** PNG, JPG, JPEG, WEBP, BMP, GIF
- **Live Input:** OS Screen clips and clipboard memory via paste events

### Recognition Languages
- English (`eng`)
- Spanish (`spa`)
- Portuguese (`por`)
- German (`deu`)
- French (`fra`)
- Japanese (`jpn`)

---

## Project Structure

```
extracttext.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg                 # Brand vector icon
│   ├── robots.txt                  # Search crawler directives
│   └── sitemap.xml                 # Multilingual XML sitemap with hreflang alternates
├── src/
│   ├── components/
│   │   ├── Faq.astro               # Accessible native <details>/<summary> accordion
│   │   ├── Features.astro          # Architecture highlight cards
│   │   ├── Footer.astro            # Multi-language directory & resources
│   │   ├── Header.astro            # Sticky header with locale and theme selectors
│   │   ├── HowItWorks.astro        # Visual 3-step workflow diagram
│   │   ├── LanguagePicker.astro    # Accessible route-preserving locale switcher
│   │   ├── OcrWorkspace.tsx        # Core React island: dropzone, worker, progress, editor
│   │   └── ThemeToggle.astro       # Pure-CSS animated theme switcher
│   ├── i18n/
│   │   ├── ui.ts                   # Complete 6-locale translation dictionary
│   │   └── utils.ts                # Locale routing and translation helpers
│   ├── layouts/
│   │   └── Layout.astro            # Root layout: SEO metadata, anti-FOUC, JSON-LD
│   └── pages/
│       ├── [lang]/
│       │   └── index.astro         # Localized static subpaths (es, pt, de, fr, ja)
│       ├── 404.astro               # Themed 404 error page
│       ├── how-to-convert-image-to-text.astro # Educational SEO pillar guide
│       └── index.astro             # Root English home page
├── astro.config.mjs                # Astro configuration (SSG, React, Tailwind, i18n)
├── tailwind.config.mjs             # Tailwind theme extensions and color tokens
└── tsconfig.json                   # Strict TypeScript configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.17 or higher)
- [npm](https://www.npmjs.com/) (version 9 or higher)

### Installation

```bash
# Clone repository
git clone https://github.com/extracttext/extracttext.github.io.git
cd extracttext.github.io

# Install dependencies
npm install
```

### Development Server

Start a local development server with hot-module reloading:

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Production Build

Run static type checking and build the production-ready static bundle:

```bash
npm run build
```

The compiled static site will be written to the `dist/` directory.

### Preview Production Build

Preview the generated static output locally:

```bash
npm run preview
```

---

## Design System

The visual design follows a clean, minimalist aesthetic optimized for low eye strain and maximum contrast:

| Token Name | Hex Code | Light Mode Usage | Dark Mode Usage |
|---|---|---|---|
| **Soft Cream** | `#FDF4D2` | Main page background | Accent highlights |
| **Sky Blue** | `#B0CDE6` | Primary action buttons | Focus rings & borders |
| **Muted Purple** | `#A290B7` | Borders & dropzone edges | Primary action buttons |
| **Dusty Rose** | `#946D6D` | Primary text and headings | Subtle border accents |

---

## Privacy & Security

ExtractText operates on a strict **Zero-Data-Retention** model:
- **No Remote Processing:** Files are never transferred across any network boundary.
- **No Cookies or Local Tracking:** No analytics cookies, persistent identifiers, or cross-site tracking scripts.
- **Isolated Memory:** Processed image data URLs are revoked immediately upon clear or document reset.

---

## Contributing

Contributions, bug reports, and suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'feat: improve OCR progress reporting'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## Support the Developer

If ExtractText saves you time, consider supporting ongoing development:

👉 **[Support the Developer](https://kisharadilshan.gumroad.com/coffee)**

---

## License

This project is open source and available under the [MIT License](LICENSE).
