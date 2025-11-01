import { memo } from 'react';
import Image from 'next/image';

interface ABLogoProps {
  readonly className?: string;
  readonly size?: number;
  readonly 'aria-label'?: string;
}

const ABLogo = memo(function ABLogo({
  className = '',
  size = 35,
  'aria-label': ariaLabel = 'RV Logo'
}: ABLogoProps) {
  return (
    <Image
      src="/assets/logos/ChatGPT Image Nov 1, 2025, 03_11_05 PM-Photoroom.png"
      alt={ariaLabel}
      width={size}
      height={size}
      className={`${className} object-contain`}
      style={{ width: size, height: size }}
    />
  );
});

export default ABLogo;
