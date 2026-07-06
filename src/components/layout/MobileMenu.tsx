import { NavLink } from 'react-router';
import { navLinks } from '../../data/navLinks';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden'>
      <div className='flex flex-col gap-4'>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
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
    </div>
  );
}

export default MobileMenu;
