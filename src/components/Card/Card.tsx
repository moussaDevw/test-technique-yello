import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`${styles.card} ${className}`}>{children}</div>
);

export const CardHeader: React.FC<CardProps> = ({ children, className }) => (
  <div className={`${styles.cardHeader} ${className}`}>{children}</div>
);

export const CardTitle: React.FC<CardProps> = ({ children, className }) => (
  <h4 className={`${styles.cardTitle} ${className}`}>{children}</h4>
);

export const CardContent: React.FC<CardProps> = ({ children, className }) => (
  <div className={`${styles.cardContent} ${className}`}>{children}</div>
);

export const CardFooter: React.FC<CardProps> = ({ children, className }) => (
  <div className={`${styles.cardFooter} ${className}`}>{children}</div>
);
