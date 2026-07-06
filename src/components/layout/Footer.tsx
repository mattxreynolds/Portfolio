function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'>
      <div className='mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 dark:text-slate-400 md:flex-row md:items-center md:justify-between'>
        <p>© 2026 Matt Reynolds. All rights reserved.</p>

        <div className='flex gap-2'>
          <a href='#' className='hover:text-slate-950 dark:hover:text-white'>
            GitHub
          </a>
          <span>&#183;</span>
          <a href='#' className='hover:text-slate-950 dark:hover:text-white'>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
