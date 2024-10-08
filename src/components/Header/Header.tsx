// Exemple d'import d'icônes
import { GraduationCap, Menu } from "lucide-react";
import Button from "../Button/Button";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <GraduationCap className={styles.icon} />
          <h1 className={styles.logoText}>YelloApp</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            Cours
          </a>
          <a href="#" className={styles.navLink}>
            Ressources
          </a>
          <a href="#" className={styles.navLink}>
            Forum
          </a>
          <a href="#" className={styles.navLink}>
            Tarifs
          </a>
        </nav>
        <div className={styles.buttonGroup}>
          <Button variant="ghost" className={styles.button}>
            Connexion
          </Button>
          <Button className={styles.button}>Inscription</Button>
        </div>
        <Button variant="ghost" className={styles.mobileMenuButton}>
          <Menu className={styles.menuIcon} />
        </Button>
      </div>
    </header>
  );
};
