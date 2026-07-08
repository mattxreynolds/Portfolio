import { Briefcase } from 'lucide-react';
import { profile } from '../../data/profile';

function OpenToWork() {
  return (
    <section className='rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8'>
      <div className='flex items-center gap-4'>
        <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent'>
          <Briefcase size={24} />
        </div>

        <h2 className='text-2xl font-bold text-text-primary'>Open to work</h2>
      </div>

      <p className='mt-4 leading-7 text-text-secondary'>
        {profile.openToWork} I am interested in opportunities where I can keep improving as a
        software developer and contribute to practical, well-built web applications.
      </p>
    </section>
  );
}

export default OpenToWork;
