import type { FC, SVGProps } from 'react';

type ButtonIconPropsType = {
  icon?: string;
  svg?: FC<SVGProps<SVGSVGElement>>;
  autoColor?: boolean;
};

const ButtonIcon = ({ icon, svg: SvgIcon, autoColor = false }: ButtonIconPropsType) => {
  const classNames = ['button__icon', autoColor && 'button__icon--auto-color'].filter(Boolean).join(' ');

  if (SvgIcon) {
    return (
      <span className={classNames}>
        <SvgIcon width={16} height={16} />
      </span>
    );
  }

  if (icon) {
    return <span className={classNames}>{icon}</span>;
  }

  return null;
};

export default ButtonIcon;
