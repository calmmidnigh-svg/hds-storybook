import type { ReactNode } from 'react';
import type { ButtonGroupDirectionType, ButtonGroupGapType, ButtonGroupPlacementType } from './types';

type ButtonGroupPropsType = {
  children: ReactNode;
  direction?: ButtonGroupDirectionType;
  gap?: ButtonGroupGapType;
  placement?: ButtonGroupPlacementType;
  ariaLabel?: string;
};

const ButtonGroup = ({
  children,
  direction = 'row',
  gap = 'sm',
  placement = 'start',
  ariaLabel = 'Button group',
}: ButtonGroupPropsType) => {
  const classNames = [
    'button-group',
    `button-group--${direction}`,
    `button-group--gap-${gap}`,
    `button-group--${placement}`,
  ].join(' ');

  return (
    <div className={classNames} role="group" aria-label={ariaLabel}>
      {children}
    </div>
  );
};

export default ButtonGroup;
