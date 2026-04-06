import type { ElementType, ReactNode } from 'react';
import './index.scss';

type TypographyVariantType =
  | 'd1' | 'd2' | 'd3'
  | 'h1' | 'h2' | 'h3' | 'h4'
  | 'b1' | 'b2'
  | 'detail1' | 'detail2' | 'detail3';

type TypographyPropsType = {
  variant: TypographyVariantType;
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

const DEFAULT_TAG_MAP: Record<TypographyVariantType, ElementType> = {
  d1: 'h1',
  d2: 'h2',
  d3: 'h3',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  b1: 'p',
  b2: 'p',
  detail1: 'span',
  detail2: 'span',
  detail3: 'span',
};

const Typography = ({ variant, as, children, className }: TypographyPropsType) => {
  const Tag = as ?? DEFAULT_TAG_MAP[variant];
  const classNames = ['typography', `typography--${variant}`, className].filter(Boolean).join(' ');

  return <Tag className={classNames}>{children}</Tag>;
};

export default Typography;
