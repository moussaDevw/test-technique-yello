import { Play } from "lucide-react";
import styles from "./Lesson.module.css";
import { lessonData } from "../../data/data";
import Button from "../Button/Button";

export const LessonCard = () => {
  return (
    <>
      <h2 className={styles.title}>Nos cours</h2>
      <div className={styles.lessonCardList}>
        {lessonData.map((lesson) => (
          <div
            key={lesson.id}
            className={`${styles.card} ${styles.borderTransition}`}
          >
            <div className={styles.header}>
              <div className={styles.iconContainer}>
                <Play />
              </div>
              <span className={styles.lessonTag}>{lesson.lessonTag}</span>
            </div>
            <div className={styles.author}>
              <span className={styles.authorName}>{lesson.level}</span>
            </div>
            <h2 className={styles.title}>{lesson.title}</h2>
            <p className={`${styles.description} ${styles.hiddenGroup}`}>
              {lesson.description}
            </p>
            <div className={`${styles.tagContainer} ${styles.hiddenGroup}`}>
              <span className={styles.tag}>{lesson.tag}</span>
            </div>
            <div className={`${styles.lectureInfo} ${styles.hiddenGroup}`}>
              <Play className={styles.playIcon} />
              <span>{lesson.lectureCount} Lectures</span>
            </div>
            <div className={styles.footer}>
              <span>
                {lesson.level} | {lesson.duration}
              </span>
              <div className={`${styles.ratingInfo} ${styles.hiddenGroup}`}>
                <span className={styles.viewCount}>
                  {lesson.viewCount.toLocaleString()}
                </span>
                <span className={styles.rating}>{lesson.rating}</span>
              </div>
            </div>

            <Button variant="primary" className={styles.learnMoreButton}>
              En savoir plus
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};
