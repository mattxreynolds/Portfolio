import { Download } from 'lucide-react';
import { profile } from '../../data/profile';

type ResumeButtonProps = {
  variant?: 'primary' | 'secondary';
};

function ResumeButton({ variant = 'secondary' }: ResumeButtonProps) {
  const availableClassName =
    variant === 'primary'
      ? 'inline-flex items-center gap-2 rounded-lg bg-accent px-4 pl-3 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover'
      : 'inline-flex items-center gap-2 rounded-lg border border-border px-4 pl-3 py-2 text-sm font-semibold text-text-primary transition hover:bg-surface-muted';

  if (!profile.isResumeAvailable) {
    return (
      <button
        type='button'
        disabled
        className='inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text-muted opacity-70'
      >
        <Download size={16} />
        Resume Soon
      </button>
    );
  }

  return (
    <a href={profile.resumeUrl} download className={availableClassName}>
      <Download size={16} />
      Resume
    </a>
  );
}

export default ResumeButton;
