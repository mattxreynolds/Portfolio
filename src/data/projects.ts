export type ProjectStatus = 'Complete' | 'Live' | 'Code Only' | 'In Progress';

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio',
    description:
      'A personal portfolio website built to present projects, skills, and contact information for software development opportunities.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    categories: ['Frontend', 'React', 'TypeScript'],
    githubUrl: 'TBD',
    liveUrl: 'TBD',
    featured: true,
    status: 'In Progress'
  }
];
