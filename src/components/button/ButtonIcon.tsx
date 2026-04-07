import type { FC, SVGProps } from 'react';

type ButtonIconPropsType = {
  icon?: string;
  svg?: FC<SVGProps<SVGSVGElement>>;
  autoColor?: boolean;
};

const ButtonIcon = ({ icon, svg: SvgIcon, autoColor = false }: ButtonIconPropsType) => {
  const classNames = ['button__icon', autoColor && 'button__icon--auto-color'].filter(Boolean).join(' ');
  const content = SvgIcon ? <SvgIcon width={16} height={16} /> : (icon ?? null);

  return content ? <span className={classNames}>{content}</span> : null;
};

export default ButtonIcon;
