import { Mail, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function getSafeExternalUrl(url: string) {
  return url === 'TBD' ? '#' : url;
}

function ContactDetails() {
  return (
    <div className='rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8'>
      <h2 className='text-2xl font-bold text-text-primary'>Contact details</h2>

      <p className='mt-3 max-w-xl leading-7 text-text-secondary'>
        The best way to contact me is by email or LinkedIn. I am open to discussing graduate,
        internship, and junior developer opportunities.
      </p>

      <div className='mt-4 space-y-4'>
        <a
          href={profile.email === 'TBD' ? '#' : `mailto:${profile.email}`}
          className='flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition hover:bg-surface-muted'
        >
          <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent'>
            <Mail size={22} />
          </span>

          <span>
            <span className='block text-sm font-medium text-text-muted'>Email</span>
            <span className='block font-semibold text-text-primary'>{profile.email}</span>
          </span>
        </a>

        <div className='flex items-center gap-4 rounded-2xl border border-border bg-background p-4'>
          <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent'>
            <MapPin size={22} />
          </span>

          <span>
            <span className='block text-sm font-medium text-text-muted'>Location</span>
            <span className='block font-semibold text-text-primary'>{profile.location}</span>
          </span>
        </div>

        <a
          href={getSafeExternalUrl(profile.socials[0].href)}
          target={profile.socials[0].href === 'TBD' ? undefined : '_blank'}
          rel={profile.socials[0].href === 'TBD' ? undefined : 'noreferrer'}
          className='flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition hover:bg-surface-muted'
        >
          <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent'>
            <FaGithub size={22} />
          </span>

          <span>
            <span className='block text-sm font-medium text-text-muted'>GitHub</span>
            <span className='block font-semibold text-text-primary'>View GitHub profile</span>
          </span>
        </a>

        <a
          href={getSafeExternalUrl(profile.socials[1].href)}
          target={profile.socials[1].href === 'TBD' ? undefined : '_blank'}
          rel={profile.socials[1].href === 'TBD' ? undefined : 'noreferrer'}
          className='flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition hover:bg-surface-muted'
        >
          <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent'>
            <FaLinkedin size={22} />
          </span>

          <span>
            <span className='block text-sm font-medium text-text-muted'>LinkedIn</span>
            <span className='block font-semibold text-text-primary'>Connect on LinkedIn</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactDetails;
