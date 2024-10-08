import { testimonials } from "../../data/data";
import styles from "./Testimonial.module.css";
import { Star } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ce que disent nos apprenants</h2>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{testimonial.name}</h3>
                <p className={styles.cardDescription}>{testimonial.role}</p>
              </div>
              <div className={styles.cardContent}>
                <p>"{testimonial.comment}"</p>
              </div>
              <div className={styles.cardFooter}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={styles.starIcon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
