![Developer Portfolio banner](https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,100:2563EB&height=220&section=header&text=Developer%20Portfolio&fontSize=48&fontColor=FFFFFF&animation=fadeIn&fontAlignY=38&desc=Matt%20Reynolds&descAlignY=58&descSize=20)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=0F172A" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript_6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/React_Router_8-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router 8" />
  <img src="https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
  <img src="https://img.shields.io/badge/ESLint_10-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint 10" />
  <img src="https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide React" />
  <img src="https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge" alt="React Icons" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<h1 align="center"><a href="https://portfolio-self-beta-u1z50hbaai.vercel.app">Matt Reynolds — Developer Portfolio</a></h1>

<p align="center">A responsive portfolio showcasing my projects, technical skills, background, and contact information.</p>

<a id="overview"></a>

## 👋 Overview

This project is my personal developer portfolio: a focused place to introduce who I am, present the software I have built, and share the technologies I am learning and using. Its five routes cover the home page, background and education, project catalogue, technical skills, and contact details.

The site is built as a responsive React single-page application with reusable components and content kept in a small set of typed data files. It includes category-based project and skill filtering, featured work, persistent light and dark themes, mobile navigation, and direct links to project demos, source code, social profiles, and—when available—a downloadable resume.

## 📚 Table of contents

- [👋 Overview](#overview)
- [🧰 Tech stack](#tech-stack)
- [🗂️ Project structure](#project-structure)
- [✨ Key features](#key-features)
- [🚀 Getting started](#getting-started)
- [✍️ Adding information](#adding-information)

<a id="tech-stack"></a>

## 🧰 Tech stack

| Area                 | Technology                   | Purpose                                                                                |
| -------------------- | ---------------------------- | -------------------------------------------------------------------------------------- |
| Markup and styling   | HTML5, CSS3                  | Document shell, global styles, custom properties, animations, and accessibility states |
| UI                   | React 19                     | Component-based user interface                                                         |
| Language             | TypeScript 6                 | Typed components and data models                                                       |
| Styling              | Tailwind CSS 4               | Responsive layouts, colour tokens, and component styling                               |
| Routing              | React Router 8               | Client-side routes, links, and active navigation states                                |
| Icons                | Lucide React, React Icons    | Interface, social, category, and technology icons                                      |
| Build tooling        | Vite 8                       | Local development server and production bundling                                       |
| Code quality         | ESLint 10, TypeScript ESLint | Static analysis and React-specific linting                                             |
| Runtime and packages | Node.js, npm                 | Local tooling and dependency management                                                |
| Version control      | Git, GitHub                  | Source control and repository hosting                                                  |
| Deployment           | Vercel                       | Production hosting with an SPA fallback rewrite                                        |

<a id="project-structure"></a>

## 🗂️ Project structure

```text
Portfolio/
├── public/                       # Favicons, app icons, and web manifest
├── src/
│   ├── components/
│   │   ├── about/                # Story, education, interests, and career cards
│   │   ├── contact/              # Contact details, availability, and resume panel
│   │   ├── home/                 # Hero, featured projects, and skill ticker
│   │   ├── layout/               # Navbar, mobile menu, page container, and footer
│   │   ├── projects/             # Project cards, filters, and responsive tags
│   │   ├── skills/               # Main stack, skill cards, and skill filters
│   │   └── ui/                   # Theme toggle and reusable resume button
│   ├── data/
│   │   ├── navLinks.ts           # Primary navigation configuration
│   │   ├── profile.ts            # Personal, social, education, and resume details
│   │   ├── projects.ts           # Project types, filters, and portfolio entries
│   │   └── skills.ts             # Skill types, categories, icons, and entries
│   ├── pages/                    # Home, About, Projects, Skills, and Contact pages
│   ├── routes/
│   │   └── AppRouter.tsx         # Application route definitions
│   ├── utils/
│   │   └── ScrollToTop.tsx       # Resets scroll position after route changes
│   ├── App.tsx                   # Shared application layout
│   ├── index.css                 # Theme tokens, global styles, and ticker animation
│   └── main.tsx                  # React and BrowserRouter entry point
├── eslint.config.js              # ESLint flat configuration
├── index.html                    # HTML shell and pre-render theme setup
├── package.json                  # Dependencies and npm scripts
├── tsconfig*.json                # TypeScript project configurations
├── vercel.json                   # SPA route rewrite for Vercel
└── vite.config.ts                # Vite, React, and Tailwind plugins
```

<a id="key-features"></a>

## ✨ Key features

### 🧭 Responsive multi-page experience

- Five client-side routes for Home, About, Projects, Skills, and Contact.
- Sticky desktop navigation with active-link states and a compact mobile menu.
- Automatic scroll restoration when visitors move between routes.
- Vercel rewrite configuration keeps direct links and browser refreshes working.

### 🗃️ Data-driven project showcase

- Typed project records keep titles, descriptions, categories, status, links, and technology tags consistent.
- Visitors can filter the complete catalogue by Frontend, Backend, or Full Stack work.
- Featured projects are selected from the same dataset for the home page.
- Project cards expose source and live-demo links while collapsing long tag lists cleanly across screen sizes.

### 🧑‍💻 Filterable skills presentation

- A dedicated main-stack section highlights the technologies currently being prioritised.
- The home page presents the main stack in a continuously scrolling, reduced-motion-aware ticker.
- The complete skills grid can be filtered by Frontend, Backend, Database, Programming, or Tools.
- Each skill is paired with a recognisable icon and category-specific presentation.

### 🌗 Personalised, accessible interface

- Light and dark themes use shared CSS colour tokens for consistent styling.
- The chosen theme persists in `localStorage`, with the visitor's system preference used initially.
- Responsive layouts support mobile through desktop screen sizes.
- Visible focus styles, semantic controls, descriptive labels, and reduced-motion handling improve keyboard and motion accessibility.

<a id="getting-started"></a>

## 🚀 Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) — use a current LTS release.
- npm, which is included with Node.js.
- Git for cloning the repository.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mattxreynolds/Portfolio.git
   ```

2. Move into the project directory:

   ```bash
   cd Portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite, normally `http://localhost:5173`.

No environment variables are required for the current version of the project.

### Available scripts

| Command           | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| `npm run dev`     | Start the Vite development server with hot module replacement              |
| `npm run lint`    | Check the codebase with ESLint                                             |
| `npm run build`   | Type-check the project and create an optimised production build in `dist/` |
| `npm run preview` | Serve the production build locally for a final check                       |

<a id="adding-information"></a>

## ✍️ Adding information

Portfolio content is intentionally separated from the page components. Most updates can be made in `src/data/` without changing the UI structure.

### Add a project

Open `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  id: 'unique-project-id',
  title: 'Project name',
  description: 'A short explanation of the problem, solution, and main functionality.',
  tags: ['React', 'TypeScript', 'Tailwind CSS'],
  category: 'Frontend',
  githubUrl: 'https://github.com/username/repository',
  liveUrl: 'https://example.com',
  featured: false,
  status: 'Complete'
}
```

- `id` must be unique.
- `category` must be `Frontend`, `Backend`, or `Full Stack` so the project filters continue to work.
- `status` must be `Complete` or `In Progress`.
- Set `featured` to `true` to make the project eligible for the home page. The first three featured entries are displayed.
- `liveUrl` is optional and can be omitted until a deployment is available.

### Add a skill

Open `src/data/skills.ts`, import a suitable icon component, and add a new object to the `skills` array:

```ts
{
  name: 'Technology name',
  category: 'Tools',
  icon: ImportedIcon,
  iconClassName: 'bg-slate-700 text-white',
  isMainStack: false
}
```

- `category` must be `Frontend`, `Backend`, `Database`, `Programming`, or `Tools`.
- `icon` must be a compatible React icon component imported at the top of the file.
- `iconClassName` controls the icon tile's background and foreground colours.
- Set `isMainStack` to `true` to include the skill in the main-stack sections and the home-page ticker.

Personal details, education, social links, availability, profile photo, and resume settings can be updated in `src/data/profile.ts`. Navigation labels and paths live in `src/data/navLinks.ts`.
