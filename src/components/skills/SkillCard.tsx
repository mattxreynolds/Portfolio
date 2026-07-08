import type { Skill } from '../../data/skills';

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <article className='flex min-h-37 flex-col items-center justify-center rounded-2xl border border-border bg-surface p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-md'>
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${skill.iconClassName}`}
      >
        <Icon size={28} />
      </div>

      <h2 className='mt-4 text-base font-bold text-text-primary'>{skill.name}</h2>

      <p className='mt-1 text-xs font-semibold uppercase tracking-wider text-text-muted'>
        {skill.category}
      </p>
    </article>
  );
}

export default SkillCard;
