import { Search } from "lucide-react";
import Input from "../Input/Input";
import styles from "./SearchSection.module.css";
import Button from "../Button/Button";

export const SearchSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Réussissez votre bac avec YelloApp</h2>
        <p className={styles.subheading}>
          Des cours en ligne, des exercices interactifs et un soutien
          personnalisé pour exceller en terminale
        </p>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <Input
              type="text"
              placeholder="Rechercher un cours ou une matière"
              className={styles.input}
            />
          </div>
          <Button variant="primary" className={styles.button}>
            Rechercher
          </Button>
        </div>
      </div>
    </section>
  );
};
