import { ExternalLink, Layers3, Monitor, Server } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ProjectTags from './ProjectTags';
import type { Project, ProjectCategory } from '../../data/projects';

type ProjectCardProps = {
  project: Project;
};

function getSafeExternalUrl(url: string) {
  return url === 'TBD' ? '#' : url;
}

function getCategoryIcon(category: ProjectCategory) {
  if (category === 'Frontend') {
    return <Monitor size={20} />;
  }

  if (category === 'Backend') {
    return <Server size={20} />;
  }

  return <Layers3 size={20} />;
}

function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveDemo = project.liveUrl && project.liveUrl !== 'TBD';

  return (
    <article className='flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-md'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <h2 className='mt-2 text-xl font-bold text-text-primary'>{project.title}</h2>

          <p className='mt-2 text-sm font-medium text-accent'>{project.status}</p>
        </div>

        <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent'>
          {getCategoryIcon(project.category)}
        </div>
      </div>

      <p className='mt-4 flex-1 leading-7 text-text-secondary'>{project.description}</p>

      <ProjectTags tags={project.tags} />

      <div className='mt-6 flex flex-wrap justify-between gap-3'>
        <a
          href={getSafeExternalUrl(project.githubUrl)}
          target={project.githubUrl === 'TBD' ? undefined : '_blank'}
          rel={project.githubUrl === 'TBD' ? undefined : 'noreferrer'}
          className='inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-surface-muted'
        >
          <FaGithub size={16} />
          Code
        </a>

        {hasLiveDemo && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover'
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
