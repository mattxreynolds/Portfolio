import { useState } from 'react';
import { NavLink } from 'react-router';
import { navLinks } from '../../data/navLinks';
import MobileMenu from './MobileMenu';
import { X, Menu } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <div className='flex items-center gap-4'>
          <NavLink to='/' className='text-lg font-bold dark:text-white' onClick={closeMenu}>
            Matt Reynolds
          </NavLink>
        </div>

        <div className='hidden items-center gap-6 sm:flex'>
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

        <div className='flex items-center gap-4'>
          <ThemeToggle />
          <button
            type='button'
            onClick={toggleMenu}
            className='rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900 sm:hidden'
            aria-label='Toggle navigation menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}

export default Navbar;
