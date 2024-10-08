import { Book, CheckCircle, Users } from "lucide-react";
import styles from "./WhyChooseUs.module.css";

export const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Pourquoi choisir TerminalePro ?</h3>
        <div className={styles.grid}>
          <div className={styles.item}>
            <Book className={styles.icon} />
            <h4 className={styles.title}>Cours complets</h4>
            <p className={styles.description}>
              Des leçons détaillées couvrant tout le programme de terminale
            </p>
          </div>
          <div className={styles.item}>
            <Users className={styles.icon} />
            <h4 className={styles.title}>Soutien personnalisé</h4>
            <p className={styles.description}>
              Des enseignants qualifiés disponibles pour répondre à vos
              questions
            </p>
          </div>
          <div className={styles.item}>
            <CheckCircle className={styles.icon} />
            <h4 className={styles.title}>Suivi des progrès</h4>
            <p className={styles.description}>
              Des outils pour suivre votre évolution et identifier vos points
              forts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
