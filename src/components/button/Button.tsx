import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonColorType, ButtonSizeType, ButtonVariantType } from './types';

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  fullWidth?: boolean;
  children: ReactNode;
};

const Button = ({
  size = 'small',
  color = 'primary',
  variant = 'solid',
  fullWidth = false,
  disabled = false,
  children,
  className,
  onClick,
  type = 'button',
  ...rest
}: ButtonPropsType) => {
  const classNames = [
    'button',
    `button--${size}`,
    `button--${color}`,
    `button--${variant}`,
    fullWidth && 'button--full-width',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
