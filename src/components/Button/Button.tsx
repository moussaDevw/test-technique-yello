import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) => {
  const variantClass = variant === "primary" ? styles.primary : styles.ghost;

  return (
    <button
      onClick={onClick}
      className={`${styles.base} ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
