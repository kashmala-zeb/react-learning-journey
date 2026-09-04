# Prospective Customer Segmentation UI 🎯

A modern, high-performance UI interface built with **React 19**, **Tailwind CSS v4**, and **Vite**, showcasing prospective customer segmentation for a digital banking platform.

![Customer Segmentation UI Preview](https://github.com/user-attachments/assets/placeholder)

---

## ✨ Features

- **Component-Driven Architecture**: Modular layout composed of Navbar, Left Content (hero overview & typography), and Right Content (segmented card grid).
- **Dynamic Props**: Passes data dynamically from `App.jsx` to render individual audience segments with distinct numbers, images, and status tags (`Satisfied`, `Underserved`, `Underbanked`).
- **Tailwind CSS v4 Styling**: Built using the modern Tailwind CSS v4 engine for clean, maintainable utilities and responsive styling.
- **Fast Build & HMR**: Powered by Vite and React 19 for instantaneous hot module replacement.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Language**: JavaScript (ESM)

---

## 📂 Project Structure

```text
customer-segmentation-ui/
├── public/                 # Static imagery for audience cards (men, mus, boy, girl)
├── src/
│   ├── Components/
│   │   └── section1/
│   │       ├── Page1Content/
│   │       │   ├── LeftContent/       # Headline and description section
│   │       │   ├── Navbar/            # Top navigation badges (Target Audience & Digital Banking)
│   │       │   ├── RightContent/      # Audience card gallery
│   │       │   └── Page1Content.jsx   # Layout wrapper
│   │       └── Section1.jsx           # Section container
│   ├── App.jsx                        # Main state and audience data array
│   ├── index.css                      # Tailwind imports & base styles
│   └── main.jsx                       # Application entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kashmala-zeb/customer-segmentation-ui.git
   ```

2. **Navigate into the project:**
   ```bash
   cd customer-segmentation-ui
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Visit `http://localhost:5173` in your browser.

---

## 👩‍💻 Author

- **Kashmala Zeb** - [@kashmala-zeb](https://github.com/kashmala-zeb)
