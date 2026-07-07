function Footer() {
  return (
    <footer className='border-t border-border bg-surface'>
      <div className='mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between'>
        <p>© 2026 Matt Reynolds. All rights reserved.</p>

        <div className='flex gap-2'>
          <a href='#' className='hover:text-text-primary'>
            GitHub
          </a>
          <span>&#183;</span>
          <a href='#' className='hover:text-text-primary'>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
