import type { ReactNode } from 'react';

type AboutCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function AboutCard({ icon, title, children }: AboutCardProps) {
  return (
    <article className='flex h-full min-h-65 flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm'>
      <div className='mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent'>
        {icon}
      </div>

      <h2 className='text-xl font-semibold text-text-primary'>{title}</h2>

      <div className='mt-4 leading-7 text-text-secondary'>{children}</div>
    </article>
  );
}

export default AboutCard;
