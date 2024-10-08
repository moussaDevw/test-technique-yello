import styles from "./Footer.module.css";
interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div>
          <h4 className={styles.h4}>TerminalePro</h4>
          <p>La plateforme de révision en ligne pour réussir votre bac</p>
        </div>
        <div>
          <h5 className={styles.h5}>Liens rapides</h5>
          <ul className={styles.ul}>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Cours</a>
            </li>
            <li>
              <a href="#">Tarifs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.h5}>Ressources</h5>
          <ul className={styles.ul}>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Forum</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Aide</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.h5}>Légal</h5>
          <ul className={styles.ul}>
            <li>
              <a href="#">Conditions d'utilisation</a>
            </li>
            <li>
              <a href="#">Politique de confidentialité</a>
            </li>
            <li>
              <a href="#">Mentions légales</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2024 TerminalePro. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);
