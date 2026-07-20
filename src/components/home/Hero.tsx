import { Link } from 'react-router';
import { profile } from '../../data/profile';
import { FaLocationDot } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import { FileText, LoaderCircle, Mail } from 'lucide-react';

function HeroActions() {
  return (
    <div className='mt-8 flex flex-wrap gap-3'>
      <Link
        to='/projects'
        className='rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover'
      >
        <div className='flex items-center align-middle gap-2'>
          View Projects
          <FaArrowRight />
        </div>
      </Link>

      {profile.isResumeAvailable ? (
        <a
          href={profile.resumeUrl}
          className='rounded-lg border border-border px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-surface-muted'
          download
        >
          <div className='flex items-center gap-3'>
            <FileText size={18} />
            Resume
          </div>
        </a>
      ) : (
        <button
          type='button'
          disabled
          className='cursor-not-allowed rounded-lg border border-border px-4 py-3 text-sm font-semibold text-text-muted opacity-70'
        >
          <div className='flex items-center gap-2'>
            <FileText size={18} />
            Resume Coming Soon
          </div>
        </button>
      )}

      <Link
        to='/contact'
        className='rounded-lg border border-border px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-surface-muted'
      >
        <div className='flex items-center align-middle gap-2'>
          <Mail size={18} />
          Contact Me
        </div>
      </Link>
    </div>
  );
}

function Hero() {
  return (
    <section className='grid gap-10 py-0 min-[915px]:grid-cols-[1.1fr_0.9fr] md:items-center'>
      <div>
        <p className='text-sm font-medium text-accent'>{profile.openToWork}</p>

        <h1 className='mt-4 text-3xl md:text-4xl font-bold tracking-tight text-text-primary lg:text-5xl'>
          Hi, I’m {profile.name}
        </h1>

        <p className='mt-4 text-xl font-medium text-text-secondary'>{profile.role}</p>

        <div className='mt-3 flex items-center gap-2 text-base text-text-muted'>
          <FaLocationDot /> {profile.location}
        </div>

        <div className='mt-4 flex items-center gap-3'>
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href} target='_blank' aria-label={social.label}>
              <social.icon size={30} />
            </a>
          ))}
        </div>

        <p className='mt-4 max-w-2xl text-lg leading-8 text-text-secondary'>{profile.shortIntro}</p>

        <div className='mt-8'>
          <HeroActions />
        </div>
      </div>

      <div className='max-w-125 w-full mx-auto rounded-3xl border border-border bg-surface p-4 shadow-sm'>
        <div className='flex aspect-square items-center justify-center rounded-2xl bg-surface-muted text-center text-sm text-text-muted'>
          <LoaderCircle className='animate-spin size-10 text-accent' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
