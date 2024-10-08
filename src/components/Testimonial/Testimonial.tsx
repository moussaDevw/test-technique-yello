// TestimonialsSection.js
import styles from "./Testimonial.module.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie D.",
    role: "Développeuse Full Stack",
    comment:
      "EduQuest m'a permis de passer de débutante à développeuse professionnelle en seulement 6 mois. Le contenu est incroyablement bien structuré et pertinent.",
  },
  {
    name: "Thomas L.",
    role: "Data Scientist",
    comment:
      "Les cours de data science sont à la pointe de la technologie. J'ai pu appliquer immédiatement ce que j'ai appris dans mon travail quotidien.",
  },
  {
    name: "Emma R.",
    role: "Ingénieure DevOps",
    comment:
      "La qualité des cours et des projets pratiques m'a vraiment impressionnée. EduQuest m'a donné les compétences dont j'avais besoin pour faire évoluer ma carrière.",
  },
];

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
