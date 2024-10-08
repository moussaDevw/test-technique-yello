import styles from "./Badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => (
  <span className={styles.badge}>{children}</span>
);

export default Badge;
