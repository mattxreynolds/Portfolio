import { NavLink } from 'react-router';

import { navLinks } from '../../data/navLinks';

function Navbar() {
  return (
    <header className='fixed left-0 top-0 right-0 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <NavLink to='/' className='text-lg font-bold dark:text-white'>
          Matt Reynolds
        </NavLink>

        <div className='hidden items-center gap-6 md:flex'>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm font-medium text-blue-600 dark:text-blue-400'
                  : 'text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
