# 💜 SheHub Teaser Page 🧡

Project for SheHub built with React + Vite.

## 📁 Table of Contents

- [💜 SheHub Teaser Page 🧡](#-shehub-teaser-page-)
  - [📁 Table of Contents](#-table-of-contents)
  - [💼 Tech Stack](#-tech-stack)
  - [🛠️ Getting Started / Prerequisites](#️-getting-started--prerequisites)
  - [⚙️ Installation](#️-installation)
  - [🔐 Environment Variables](#-environment-variables)
  - [🌐 Language Selector](#-language-selector)
  - [💻 Run the Development Server](#-run-the-development-server)
  - [🏗️ Build for Production](#️-build-for-production)
  - [📂 Project Structure](#-project-structure)
  - [📊 Google Analytics 4 (GA4) Tracking](#-google-analytics-4-ga4-tracking)
    - [📌 Events Tracked](#-events-tracked)
    - [✅ Setup Instructions](#-setup-instructions)

---

## 💼 Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- React Router
- Jotai
- i18next + react-i18next
- Firebase
- GA4 Tracking
- Lucide-react

---

## 🛠️ Getting Started / Prerequisites

Make sure you have the following installed:

- Node.js ≥ 16.8.0
- npm ≥ 9.x

---

## ⚙️ Installation

```bash
git clone https://github.com/Tinunsky/shehub-teaser-v1.git
cd shehub-teaser-v1
npm install
```

---

## 🔐 Environment Variables

Environment configuration is managed through `.env` files.

1. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

2. Fill in your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
VITE_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
```

These are loaded in the `firebase.js` file using `import.meta.env`.

---

## 🌐 Language Selector

The project supports `es`, `en` and `ca` using `i18next`.

Language settings are:

- Automatically detected via `localStorage` and browser language
- Saved persistently using `localStorage.setItem('shehub-lang', lang)`
- Managed in `i18n.js`

Language selector is a floating button in the header (`LanguageSelector.jsx`) with Tailwind responsive styles and a dropdown.

---

## 💻 Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

To preview production build:

```bash
npm run preview
```

---

## 📂 Project Structure

```bash
shehub-teaser-v1/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── locales/
│   ├── pages/
│   ├── styles/
│   └── main.jsx
├── .env
├── .env.example
├── index.html
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📊 Google Analytics 4 (GA4) Tracking

This project includes integrated tracking for user interaction using **Google Analytics 4**.

### 📌 Events Tracked

| Event Name            | Category     | Label                  | Description                                                   |
|-----------------------|--------------|------------------------|---------------------------------------------------------------|
| `join_waitlist_click` | `Button`     | `button-form` / `button-banner` | Triggered when a user clicks on a CTA to join the waitlist.  |
| `form_submitted`      | `Form`       | `waitlist-form`        | Triggered after a successful form submission.                |
| `click_footer_link`   | `Footer`     | `Instagram` / `LinkedIn` | Triggered when social links in the footer are clicked.       |

### ✅ Setup Instructions

To ensure GA4 works correctly:

1. Add your GA4 Measurement ID in `index.html` or a script loader.
2. Make sure the global `gtag` function is available before events are triggered.
3. Events are sent manually using:

```js
gtag("event", "event_name", {
  event_category: "Category",
  event_label: "Label",
  value: 1
});
```

You can find these event calls in:

- `Button.jsx` → CTA tracking
- `FormInputs.jsx` → Form submission
- `Footer.jsx` → Social media links

---

Made with 💜 by the SheHub team.
