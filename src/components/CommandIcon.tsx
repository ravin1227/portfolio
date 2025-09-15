import { memo } from 'react';

interface CommandIconProps {
  readonly className?: string;
  readonly size?: number;
  readonly 'aria-label'?: string;
}

const CommandIcon = memo(function CommandIcon({
  className = '',
  size = 24,
  'aria-label': ariaLabel = 'Command icon'
}: CommandIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  );
});

export default CommandIcon;
