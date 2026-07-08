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
    id: 'developer-portfolio',
    title: 'Developer Portfolio',
    description:
      'A personal portfolio website built to present projects, skills, and contact information for software development opportunities.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'Frontend',
    githubUrl: 'TBD',
    liveUrl: 'TBD',
    featured: true,
    status: 'In Progress'
  }
];
