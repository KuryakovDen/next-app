import styles from './Button.module.css';
import classNames from 'classnames';
import { MouseEvent, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'text' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        styles[variant],
        styles[size],
        {
          [styles.disabled]: disabled,
        },
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
