import { useState } from 'react';
import { skillCategories, skills, type SkillFilter } from '../../data/skills';
import SkillCard from './SkillCard';

function SkillsGrid() {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('All');

  const filteredSkills =
    activeFilter === 'All' ? skills : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section>
      <div className='flex flex-wrap gap-3'>
        {skillCategories.map((category) => {
          const isActive = activeFilter === category;

          return (
            <button
              key={category}
              type='button'
              onClick={() => setActiveFilter(category)}
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

      <div className='mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillsGrid;
