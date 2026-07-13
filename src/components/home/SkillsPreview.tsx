import { Link } from 'react-router';
import { mainStackSkills, type Skill } from '../../data/skills';

function SkillTickerItem({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <div className='mx-2 flex min-w-max items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3 shadow-sm'>
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${skill.iconClassName}`}
      >
        <Icon size={22} />
      </div>

      <div>
        <p className='font-semibold text-text-primary'>{skill.name}</p>
        <p className='text-xs font-medium uppercase tracking-wider text-text-muted'>
          {skill.category}
        </p>
      </div>
    </div>
  );
}

function SkillsPreview() {
  const tickerSkills = [...mainStackSkills, ...mainStackSkills];

  return (
    <section className='mt-10 overflow-hidden rounded-3xl border border-border bg-surface py-8 shadow-sm'>
      <div className='flex flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-sm font-medium text-accent'>Main stack</p>

          <h2 className='mt-2 text-3xl font-bold tracking-tight text-text-primary'>
            Technologies I’m focused on
          </h2>
        </div>

        <Link to='/skills' className='text-sm font-semibold text-accent hover:text-accent-hover'>
          View all skills →
        </Link>
      </div>

      <div className='mt-8 overflow-hidden'>
        <div className='ticker-track flex'>
          {tickerSkills.map((skill, index) => (
            <SkillTickerItem key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPreview;
