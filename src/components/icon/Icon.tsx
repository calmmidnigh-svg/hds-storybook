import type { CSSProperties } from 'react';
import { HDS_COLORS } from '@/tokens/colors';
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

  if (!icon) return null;

  const hasBgPath = 'bgPath' in icon && Boolean(icon.bgPath);
  const hasDimPath = 'dimPath' in icon && Boolean(icon.dimPath);

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
      {hasBgPath && (
        <path d={(icon as { bgPath: string }).bgPath} fill={HDS_COLORS.gray200} />
      )}
      <path d={icon.path} fillRule="evenodd" />
      {hasDimPath && (
        <path d={(icon as { dimPath: string }).dimPath} fillRule="evenodd" fillOpacity={0.35} />
      )}
    </svg>
  );
};

export default Icon;
