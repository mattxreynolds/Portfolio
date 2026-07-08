import { useState } from 'react';

import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import { projects, type ProjectFilter as ProjectFilterType } from '../data/projects';

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterType>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className='space-y-12'>
      <section>
        <p className='text-sm font-medium text-accent'>Projects</p>

        <h1 className='mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl'>
          Projects I’ve built
        </h1>

        <p className='mt-6 max-w-3xl text-lg leading-8 text-text-secondary'>
          A collection of software projects that show my experience building practical applications
          with modern web technologies.
        </p>
      </section>

      <section className='space-y-8'>
        <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className='grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
