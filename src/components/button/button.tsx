import React from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  variant: "primary" | "secondary" | "info";
  title: string;
  icon?: React.ReactNode;
  onClick: (e: React.SyntheticEvent) => void;
  loading?: boolean;
  testId?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  title,
  icon,
  onClick,
  loading,
  testId,
}) => {
  let className = "primary";

  if (variant === "primary") {
    className = "primary";
  } else if (variant === "secondary") {
    className = "secondary";
  } else if (variant === "info") {
    className = "info";
  }

  return (
    <button
      data-testid={testId}
      className={styles[className]}
      onClick={onClick}
      disabled={loading}
    >
      {icon && <span className="icon">{icon}</span>}
      {title}
    </button>
  );
};
