# Abhishek Pawar — Personal Portfolio Website

A clean, modern, and minimal personal portfolio built strictly using data from Abhishek Pawar's resume.

## 🚀 Tech Stack
- **React 18 + TypeScript + Vite**
- **Tailwind CSS** (Custom emerald accent palette, dark-mode-first system, WCAG AA compliant)
- **Framer Motion** (Smooth micro-animations, respecting `prefers-reduced-motion`)
- **Lucide React** (Clean icons)

---

## 📁 Folder Structure
```text
portfolio/
├── public/
│   ├── Abhishek_Pawar_Resume.pdf  # Downloadable PDF resume
│   └── favicon.svg                # Minimalist AP monogram icon
├── src/
│   ├── components/                # Modular, reusable UI components
│   │   ├── About.tsx              # About section & core highlights
│   │   ├── Contact.tsx            # Contact details, copy email & message form
│   │   ├── Education.tsx          # Formal degrees, certificates & languages
│   │   ├── Experience.tsx         # Timeline of work experience
│   │   ├── Footer.tsx             # Copyright & back-to-top button
│   │   ├── Hero.tsx               # Hero header, intro, CTAs & social links
│   │   ├── Icons.tsx              # Accessible SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx             # Sticky navbar with mobile menu & theme toggle
│   │   ├── Projects.tsx           # Featured project cards with tech tags & links
│   │   ├── Skills.tsx             # Categorized technical skills
│   │   └── ThemeToggle.tsx        # Dark/Light mode toggle button
│   ├── context/
│   │   └── ThemeContext.tsx       # Dark mode state provider with localStorage sync
│   ├── data/
│   │   └── portfolio.ts           # ⭐ SINGLE SOURCE OF TRUTH (Edit all content here)
│   ├── types/
│   │   └── portfolio.ts           # Strict TypeScript interfaces
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Global styles, focus states & scrollbar
│   └── main.tsx                   # React app entry point
├── index.html                     # SEO metadata, Inter font & no-flash theme script
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🛠️ How to Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
This produces an optimized static build in the `dist/` directory.

---

## ✏️ How to Edit Content
All resume data is centralized inside a single file:
👉 **`src/data/portfolio.ts`**

Whenever you want to update your summary, skills, experience, projects, or links, simply open `src/data/portfolio.ts` and modify the values. All components automatically read from this single file.

---

## 🌐 How to Deploy

### Option 1: Deploy to Vercel (Recommended)
1. Push your portfolio repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New"** > **"Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**.

### Option 2: Deploy to Netlify
1. Push your portfolio repository to GitHub.
2. Sign in to [Netlify](https://www.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub repository.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.
