import { projectCategories, type ProjectFilter as ProjectFilterType } from '../../data/projects';

type ProjectFilterProps = {
  activeFilter: ProjectFilterType;
  onFilterChange: (filter: ProjectFilterType) => void;
};

function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className='flex flex-wrap gap-3'>
      {projectCategories.map((category) => {
        const isActive = activeFilter === category;

        return (
          <button
            key={category}
            type='button'
            onClick={() => onFilterChange(category)}
            className={
              isActive
                ? 'rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white'
                : 'rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-surface-muted hover:text-text-primary'
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilter;
