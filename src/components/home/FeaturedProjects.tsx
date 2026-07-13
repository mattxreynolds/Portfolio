import { Link } from 'react-router';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '../../data/projects';

function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className='space-y-6 py-10'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-sm font-medium text-accent'>Featured projects</p>

          <h2 className='mt-2 text-3xl font-bold tracking-tight text-text-primary'>
            Selected work
          </h2>
        </div>

        <Link to='/projects' className='text-sm font-semibold text-accent hover:text-accent-hover'>
          View all projects →
        </Link>
      </div>

      <div className='grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
