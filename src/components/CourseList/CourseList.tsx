import { Star } from "lucide-react";
import Badge from "../Badge/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Card/Card";
import styles from "./CourseList.module.css";
import Button from "../Button/Button";

const popularCourses = [
  {
    id: "1",
    title: "Mathématiques",
    description: "Cours avancé sur l'algèbre et la géométrie.",
    level: "Avancé",
    rating: 4.5,
  },
  {
    id: "2",
    title: "Physique-Chimie",
    description: "Découverte des principes fondamentaux.",
    level: "Intermédiaire",
    rating: 4.7,
  },
  {
    id: "3",
    title: "Français",
    description: "Analyse littéraire et compréhension de textes.",
    level: "Débutant",
    rating: 4.3,
  },
  {
    id: "4",
    title: "Histoire",
    description: "Cours avancé sur l'algèbre et la géométrie.",
    level: "Avancé",
    rating: 4.5,
  },
  {
    id: "5",
    title: "Anglais",
    description: "Découverte des principes fondamentaux.",
    level: "Intermédiaire",
    rating: 4.7,
  },
  {
    id: "6",
    title: "Espagnol",
    description: "Analyse littéraire et compréhension de textes.",
    level: "Débutant",
    rating: 4.3,
  },
];

export const CourseList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Cours populaires</h3>
        <div className={styles.grid}>
          {popularCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <Badge>{course.level}</Badge>
              </CardHeader>
              <CardContent>
                <p className={styles.description}>{course.description}</p>
              </CardContent>
              <CardFooter className={styles.footer}>
                <div className={styles.rating}>
                  <Star className={styles.starIcon} />
                  <span>{course.rating}</span>
                </div>
                <Button variant="primary">Commencer</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
