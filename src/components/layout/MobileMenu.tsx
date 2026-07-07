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
    <div className='border-t border-border bg-surface px-6 py-4 md:hidden'>
      <div className='flex flex-col gap-4'>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
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
    </div>
  );
}

export default MobileMenu;
