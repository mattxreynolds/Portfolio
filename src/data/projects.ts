export type ProjectCategory = 'Frontend' | 'Backend' | 'Full Stack' | 'Coursework';

export type ProjectStatus = 'Complete' | 'In Progress';

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  status: ProjectStatus;
};

export const projectCategories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Coursework'] as const;

export type ProjectFilter = (typeof projectCategories)[number];

export const projects: Project[] = [
  {
    id: 'the-odin-project',
    title: 'The Odin Project',
    description:
      'A collection of my projects, exercises, and notes as I work through The Odin Project’s Foundations & JavaScript path, building my skills in HTML, CSS, JavaScript, Git, React, Node.js, and full-stack web development.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML', 'Express.js', 'PostgreSQL', 'Node.js', 'GitHub'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/mattxreynolds/my-odin-project',
    featured: true,
    status: 'In Progress'
  },
  {
    id: 'comp4020-showcase',
    title: 'COMP4020 Coursework',
    description:
      "Weekly crits and assignments from ANU's Agentic Coding Studio course — AI-agent-built web prototypes, shipped and marked live each week.",
    tags: ['Claude Code', 'Vite', 'TypeScript', 'Astro', 'GitHub Actions', 'GitHub Pages', 'pnpm'],
    category: 'Coursework',
    githubUrl: 'https://github.com/mattxreynolds/comp4020-showcase',
    liveUrl: 'https://mattxreynolds.github.io/comp4020-showcase/',
    featured: true,
    status: 'In Progress'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'Responsive weather dashboard with city search, current-location forecasts, hourly charts, 7-day outlooks, dark mode, and custom units.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Recharts', 'OpenStreetMap', 'GitHub'],
    category: 'Frontend',
    githubUrl: 'https://github.com/mattxreynolds/Weather-Dashboard',
    liveUrl: 'https://weather-dashboard-mu-khaki.vercel.app/',
    featured: true,
    status: 'Complete'
  },
  {
    id: 'j-force',
    title: 'J Force',
    description:
      'A team-built top-down pixel shooter set in a dystopian future, featuring branching dialogue, non-linear missions, dynamic cutscenes, enemy AI, save/load systems, and original art and music.',
    tags: ['Unity', 'C#', 'ShaderLab', 'HLSL', 'Game Development', 'GitHub'],
    category: 'Coursework',
    githubUrl: 'https://github.com/1911-revo/Video-Game-Team-Project',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio',
    description:
      'A personal portfolio website built to present projects, skills, and contact information for software development opportunities.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router', 'GitHub'],
    category: 'Frontend',
    githubUrl: 'https://github.com/mattxreynolds/Portfolio',
    liveUrl: 'https://portfolio-self-beta-u1z50hbaai.vercel.app',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'swift-cart',
    title: 'SwiftCart',
    description:
      'Full-stack grocery delivery app with product browsing, cart checkout, Stripe payments, admin tools, delivery partner workflow, and live order tracking.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'JWT',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Neon',
      'Stripe',
      'Cloudinary',
      'Inngest',
      'Vercel',
      'GitHub'
    ],
    category: 'Full Stack',
    githubUrl: 'https://github.com/mattxreynolds/SwiftCart',
    liveUrl: 'https://swift-cart-tau-woad.vercel.app/',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'grocify',
    title: 'Grocify',
    description:
      'Grocify is an Expo React Native grocery planner with smart list insights for planning, tracking, and completing shopping trips.',
    tags: [
      'React Native',
      'Nativewind',
      'Expo',
      'CSS',
      'TypeScript',
      'Zustand',
      'Clerk',
      'Drizzle',
      'Neon',
      'Expo Router',
      'Vercel',
      'GitHub'
    ],
    category: 'Full Stack',
    githubUrl: 'https://github.com/mattxreynolds/Grocify',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'task-manager',
    title: 'Developer Task Manager',
    description:
      'Full-stack task management app with JWT authentication, project-based task organization, and a React/TypeScript frontend backed by Express, Prisma, and PostgreSQL. Developed as an end-to-end Codex experiment.',
    tags: [
      'React',
      'Express.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'Tailwind CSS',
      'Render',
      'Vercel'
    ],
    category: 'Full Stack',
    githubUrl: 'https://github.com/mattxreynolds/Task-Manager',
    liveUrl: 'https://task-manager-omega-teal.vercel.app/',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'to-do-dashboard',
    title: 'To-Do Dashboard',
    description:
      'A Dockerized full-stack todo dashboard with Express, PostgreSQL, Prisma, and JWT authentication.',
    tags: ['Node.js', 'Express.js', 'Docker', 'Prisma', 'PostgreSQL', 'JWT', 'bcryptjs'],
    category: 'Backend',
    githubUrl: 'https://github.com/mattxreynolds/To-Do-Dashboard',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'javascript-course',
    title: 'JavaScript Course',
    description:
      'A collection of my practice code, exercises, and mini-projects completed while working through a JavaScript crash course. Documenting my progress and understanding of core concepts.',
    tags: ['JavaScript', 'CSS', 'HTML', 'VS Code', 'Chrome DevTools', 'GitHub'],
    category: 'Frontend',
    githubUrl: 'https://github.com/mattxreynolds/JavaScript-Course',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'html-css-course',
    title: 'HTML & CSS Course',
    description:
      'A collection of my practice code, exercises, and mini-projects completed while working through an HTML & CSS crash course. Documenting my progress and understanding of core concepts.',
    tags: ['CSS', 'HTML', 'VS Code', 'Chrome DevTools', 'GitHub'],
    category: 'Frontend',
    githubUrl: 'https://github.com/mattxreynolds/HTML-CSS-Course',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'react-course',
    title: 'React Course',
    description:
      'A collection of my practice code, exercises, and mini-projects completed while working through a React crash course. Documenting my progress and understanding of core concepts.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML', 'React Router', 'Vite', 'Node.js', 'Vitest'],
    category: 'Frontend',
    githubUrl: 'https://github.com/mattxreynolds/React-Course',
    featured: false,
    status: 'Complete'
  }
];
