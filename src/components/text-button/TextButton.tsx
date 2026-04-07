import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { TextButtonColorType, TextButtonHoverStyleType, TextButtonSizeType } from './types';

type TextButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: TextButtonSizeType;
  color?: TextButtonColorType;
  hoverStyle?: TextButtonHoverStyleType;
  children: ReactNode;
  className?: string;
};

const TextButton = ({
  size = 'medium',
  color = 'default',
  hoverStyle = 'background',
  disabled = false,
  children,
  className,
  onClick,
  type = 'button',
  ...rest
}: TextButtonPropsType) => {
  const classNames = [
    'text-button',
    `text-button--${size}`,
    `text-button--${color}`,
    `text-button--hover-${hoverStyle}`,
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

export default TextButton;
