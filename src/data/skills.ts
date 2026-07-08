import type { ComponentType } from 'react';
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import { Coffee } from 'lucide-react';
import { FaCss3Alt, FaPython } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandCSharp } from 'react-icons/tb';

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'Tools';

export type Skill = {
  name: string;
  category: SkillCategory;
  icon: ComponentType<{ size?: number; className?: string }>;
  iconClassName: string;
  isMainStack?: boolean;
};

export const skills: Skill[] = [
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: SiJavascript,
    iconClassName: 'bg-yellow-400 text-white',
    isMainStack: true
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: SiTypescript,
    iconClassName: 'bg-blue-600 text-white',
    isMainStack: true
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: SiReact,
    iconClassName: 'bg-sky-500 text-white',
    isMainStack: true
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: SiTailwindcss,
    iconClassName: 'bg-cyan-500 text-white',
    isMainStack: true
  },
  {
    name: 'HTML',
    category: 'Frontend',
    icon: SiHtml5,
    iconClassName: 'bg-orange-500 text-white'
  },
  {
    name: 'CSS',
    category: 'Frontend',
    icon: FaCss3Alt,
    iconClassName: 'bg-blue-500 text-white'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: SiNodedotjs,
    iconClassName: 'bg-green-600 text-white',
    isMainStack: true
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: SiExpress,
    iconClassName: 'bg-slate-800 text-white',
    isMainStack: true
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: SiPostgresql,
    iconClassName: 'bg-blue-700 text-white',
    isMainStack: true
  },
  {
    name: 'Prisma',
    category: 'Backend',
    icon: SiPrisma,
    iconClassName: 'bg-blue-900 text-white',
    isMainStack: true
  },
  {
    name: 'Python',
    category: 'Programming',
    icon: FaPython,
    iconClassName: 'bg-blue-600 text-white'
  },
  {
    name: 'Java',
    category: 'Programming',
    icon: Coffee,
    iconClassName: 'bg-red-600 text-white'
  },
  {
    name: 'C#',
    category: 'Programming',
    icon: TbBrandCSharp,
    iconClassName: 'bg-purple-600 text-white'
  },
  {
    name: 'Git',
    category: 'Tools',
    icon: SiGit,
    iconClassName: 'bg-orange-600 text-white'
  },
  {
    name: 'GitHub',
    category: 'Tools',
    icon: SiGithub,
    iconClassName: 'bg-slate-700 text-white'
  },
  {
    name: 'VS Code',
    category: 'Tools',
    icon: VscVscode,
    iconClassName: 'bg-blue-500 text-white'
  }
];

export const skillCategories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Programming',
  'Tools'
] as const;

export type SkillFilter = (typeof skillCategories)[number];

export const mainStackSkills = skills.filter((skill) => skill.isMainStack);
