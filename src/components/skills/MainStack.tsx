import { mainStackSkills } from '../../data/skills';

function MainStack() {
  return (
    <section className='rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <p className='text-sm font-medium text-accent'>Main stack</p>

          <h2 className='mt-2 text-2xl font-bold text-text-primary'>Full stack web development</h2>
        </div>

        <p className='max-w-2xl leading-7 text-text-secondary'>
          These are the technologies I am currently prioritising as I develop as an aspiring full
          stack software developer.
        </p>
      </div>

      <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {mainStackSkills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className='flex items-center gap-3 rounded-2xl border border-border bg-background p-4'
            >
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
        })}
      </div>
    </section>
  );
}

export default MainStack;
