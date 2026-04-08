import type { CSSProperties } from 'react';
import { HDS_COLORS } from '@/tokens/colors';
import { iconMap } from './icons';
import type { IconNameType } from './icons';

type IconLayerType = { readonly path: string; readonly fill: string };
type LayeredIconType = { readonly viewBox: string; readonly layers: readonly IconLayerType[] };
type FlatIconType = { readonly viewBox: string; readonly path: string; readonly fill: boolean; readonly bgPath?: string; readonly dimPath?: string };

type IconPropsType = {
  name: IconNameType;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
};

const isLayeredIcon = (icon: LayeredIconType | FlatIconType): icon is LayeredIconType =>
  'layers' in icon && Array.isArray((icon as LayeredIconType).layers);

const Icon = ({
  name,
  size = 24,
  color = 'currentColor',
  className,
  style,
}: IconPropsType) => {
  const icon = iconMap[name] as LayeredIconType | FlatIconType;

  if (!icon) return null;

  if (isLayeredIcon(icon)) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={icon.viewBox}
        fill="none"
        aria-hidden="true"
        className={className}
        style={style}
      >
        {icon.layers.map((layer, i) => (
          <path key={i} d={layer.path} fill={layer.fill} fillRule="evenodd" />
        ))}
      </svg>
    );
  }

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
        <path d={icon.bgPath} fill={HDS_COLORS.gray200} />
      )}
      <path d={icon.path} fillRule="evenodd" fill={hasBgPath ? HDS_COLORS.gray500 : undefined} />
      {hasDimPath && (
        <path d={icon.dimPath} fillRule="evenodd" fillOpacity={0.35} />
      )}
    </svg>
  );
};

export default Icon;
