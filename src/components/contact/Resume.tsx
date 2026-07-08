import { FileText } from 'lucide-react';
import { profile } from '../../data/profile';

function Resume() {
  return (
    <section className='rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8'>
      <div className='flex items-center gap-4'>
        <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent'>
          <FileText size={24} />
        </div>

        <h2 className='text-2xl font-bold text-text-primary'>Resume</h2>
      </div>

      <p className='mt-4 leading-7 text-text-secondary'>
        Download my resume for a concise overview of my education, technical skills, projects, and
        software development experience.
      </p>

      <div className='mt-6'>
        {profile.isResumeAvailable ? (
          <a
            href={profile.resumeUrl}
            download
            className='inline-flex rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover'
          >
            Download Resume
          </a>
        ) : (
          <button
            type='button'
            disabled
            className='cursor-not-allowed rounded-lg border border-border px-5 py-3 text-sm font-semibold text-text-muted opacity-70'
          >
            Resume Coming Soon
          </button>
        )}
      </div>
    </section>
  );
}

export default Resume;
