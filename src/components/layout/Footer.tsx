import { profile } from '../../data/profile';

function Footer() {
  const displayName = profile.name;
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-border bg-surface'>
      <div className='mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between'>
        <p>
          © {currentYear} {displayName}. All rights reserved.
        </p>

        <div className='flex gap-2'>
          <a
            href={profile.socials[0].href}
            target='_blank'
            rel='noreferrer'
            className='hover:text-text-primary'
          >
            GitHub
          </a>
          <span>&#183;</span>
          <a
            href={profile.socials[1].href}
            target='_blank'
            rel='noreferrer'
            className='hover:text-text-primary'
          >
            LinkedIn
          </a>
          <span>&#183;</span>
          <a
            href={profile.socials[2].href}
            target='_blank'
            rel='noreferrer'
            className='hover:text-text-primary'
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
