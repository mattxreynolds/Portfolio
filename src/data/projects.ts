export type ProjectCategory = 'Frontend' | 'Backend' | 'Full Stack';

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

export const projectCategories = ['All', 'Frontend', 'Backend', 'Full Stack'] as const;

export type ProjectFilter = (typeof projectCategories)[number];

export const projects: Project[] = [
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
    featured: true,
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
    liveUrl: 'TBD',
    featured: true,
    status: 'Complete'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'Responsive weather dashboard with city search, current-location forecasts, hourly charts, 7-day outlooks, dark mode, and custom units.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'ReCharts', 'OpenStreetMap', 'GitHub'],
    category: 'Frontend',
    githubUrl: 'https://github.com/mattxreynolds/Weather-Dashboard',
    liveUrl: 'https://weather-dashboard-mu-khaki.vercel.app/',
    featured: true,
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
    liveUrl: 'TBD',
    featured: true,
    status: 'Complete'
  },
  {
    id: 'task-manager',
    title: 'Devloper Task Manager',
    description:
      'A full-stack task manager app where authenticated users can create projects and manage tasks inside each project. Built entirely by Codex.',
    tags: [
      'React',
      'Express.js',
      'TypeScript',
      'Prisma',
      'PostreSQL',
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
    tags: ['Node.js', 'Express.js', 'Docker', 'Prisma', 'PostreSQL', 'JWT', 'BCrypt'],
    category: 'Backend',
    githubUrl: 'https://github.com/mattxreynolds/To-Do-Dashboard',
    liveUrl: 'TBD',
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
    liveUrl: 'TBD',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'html-css-course',
    title: 'HTML & CSS Course',
    description:
      'A collection of my practice code, exercises, and mini-project completed while working through a HTML & CSS crash course. Documenting my progress and understanding of core concepts.',
    tags: ['CSS', 'HTML', 'VS Code', 'Chrome DevTools', 'GitHub'],
    category: 'Frontend',
    githubUrl: 'https://github.com/mattxreynolds/HTML-CSS-Course',
    liveUrl: 'TBD',
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
    liveUrl: 'TBD',
    featured: false,
    status: 'Complete'
  },
  {
    id: 'the-odin-project',
    title: 'The Odin Project',
    description:
      'A collection of my projects, exercises, and notes as I work through The Odin Project’s Foundations & JavaScript path, building my skills in HTML, CSS, JavaScript, Git, React, Node.js, and full-stack web development.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML', 'Express.js', 'PostreSQL', 'Node.js', 'Github'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/mattxreynolds/my-odin-project',
    liveUrl: 'TBD',
    featured: false,
    status: 'In Progress'
  }
];
