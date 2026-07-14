import { useState } from 'react';
import { NavLink } from 'react-router';
import { navLinks } from '../../data/navLinks';
import MobileMenu from './MobileMenu';
import { X, Menu } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { profile } from '../../data/profile';
import ResumeButton from '../ui/ResumeButton';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const displayName = profile.name;

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className='sticky top-0 z-50 border-b border-border bg-surface'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <div className='flex items-center gap-4'>
          <NavLink to='/' className='text-lg font-bold text-text-primary' onClick={closeMenu}>
            {displayName}
          </NavLink>
        </div>

        <div className='hidden items-center gap-6 sm:flex'>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm font-medium text-accent'
                  : 'text-sm font-medium text-text-secondary hover:text-text-primary'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className='flex items-center gap-4'>
          <div className='hidden md:block'>
            <ResumeButton />
          </div>
          <ThemeToggle />
          <button
            type='button'
            onClick={toggleMenu}
            className='rounded-md border border-border px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-muted hover:text-text-primary sm:hidden'
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
