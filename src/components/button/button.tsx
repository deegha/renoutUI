import React from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'info';
  title: string;
  icon?: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.SyntheticEvent) => void;
  loading?: boolean;
  testId?: string;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  title,
  icon,
  onClick,
  loading,
  testId,
  disabled,
}) => {
  let className = 'primary';

  if (variant === 'primary') {
    className = 'primary';
  } else if (variant === 'secondary') {
    className = 'secondary';
  } else if (variant === 'info') {
    className = 'info';
  }

  return (
    <button
      data-testid={testId}
      className={styles[className]}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {icon && <span className="icon">{icon}</span>}
      {title}
    </button>
  );
};
