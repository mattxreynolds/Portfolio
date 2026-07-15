import { Link } from 'react-router';
import { profile } from '../../data/profile';
import { ArrowRight, Code2 } from 'lucide-react';

function MyStory() {
  return (
    <section className='grid gap-8 rounded-3xl border border-border bg-surface p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:p-8'>
      <div className='overflow-hidden rounded-2xl bg-surface-muted'>
        {profile.photoUrl ? (
          <img
            src={profile.photoUrl}
            alt={`${profile.name} profile`}
            className='h-full min-h-80 w-full object-cover'
          />
        ) : (
          <div className='flex min-h-80 h-full items-center justify-center text-center text-sm text-text-muted'>
            Profile photo TBD
          </div>
        )}
      </div>

      <div className='flex flex-col justify-center'>
        <h2 className='text-2xl font-bold tracking-tight text-text-primary'>My Story</h2>

        <div className='mt-5 space-y-5 text-base leading-8 text-text-secondary'>
          <p>
            I got into software development after taking a computer science course during my
            engineering degree. I quickly fell in love with solving problems through code and
            building applications, especially web apps where I can work across the frontend, backend
            and deployment process.
          </p>

          <p>
            I enjoy software development because it combines problem solving, creativity and
            continuous learning. Right now, I am focused on improving as a full stack developer with
            React, TypeScript, Node.js, Express, PostgreSQL and Tailwind CSS, while also
            understanding how AI can be used to improve my ability to build and produce things.
          </p>
        </div>

        <div className='mt-5 flex flex-wrap gap-3'>
          <Link
            to='/projects'
            className='inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover'
          >
            View Projects
            <ArrowRight size={16} />
          </Link>

          <Link
            to='/skills'
            className='inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-surface-muted'
          >
            View Skills
            <Code2 size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MyStory;
