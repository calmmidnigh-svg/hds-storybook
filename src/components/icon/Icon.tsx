import type { CSSProperties } from 'react';
import { iconMap } from './icons';
import type { IconNameType } from './icons';

type IconPropsType = {
  name: IconNameType;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
};

const Icon = ({
  name,
  size = 24,
  color = 'currentColor',
  className,
  style,
}: IconPropsType) => {
  const icon = iconMap[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill={icon.fill ? color : 'none'}
      stroke={icon.fill ? 'none' : color}
      strokeWidth={icon.fill ? undefined : 1.5}
      strokeLinecap={icon.fill ? undefined : 'round'}
      strokeLinejoin={icon.fill ? undefined : 'round'}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d={icon.path} />
    </svg>
  );
};

export default Icon;
