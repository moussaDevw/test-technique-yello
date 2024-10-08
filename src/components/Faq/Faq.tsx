// FAQSection.js
import { useState } from "react";
import styles from "./Faq.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Quelles matières sont couvertes par TerminalePro ?",
    answer:
      "TerminalePro propose des cours en mathématiques, physique-chimie, français, histoire-géographie, et bien d'autres, pour une couverture complète du programme de terminale.",
  },
  {
    question: "Comment le suivi des progrès est-il assuré ?",
    answer:
      "Nous offrons des outils interactifs qui suivent vos progrès et vous aident à identifier vos points forts et les domaines à améliorer.",
  },
  {
    question: "Puis-je obtenir un soutien personnalisé ?",
    answer:
      "Oui, nos enseignants qualifiés sont disponibles pour répondre à vos questions et vous fournir un soutien individualisé.",
  },
  {
    question: "Y a-t-il une période d'essai gratuite ?",
    answer:
      "Nous proposons une période d'essai gratuite pour que vous puissiez explorer notre contenu et nos fonctionnalités avant de vous engager.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Questions fréquentes</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className={styles.icon} />
                ) : (
                  <ChevronDown className={styles.icon} />
                )}
              </div>
              {openIndex === index && (
                <p className={styles.faqAnswer}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
