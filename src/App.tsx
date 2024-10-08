import React from "react";
import {
  Book,
  CheckCircle,
  GraduationCap,
  Menu,
  Search,
  Star,
  Users,
} from "lucide-react";
import { Header } from "./components/Header/Header";
import { SearchSection } from "./components/SearchSection/SearchSection";
import { CourseList } from "./components/CourseList/CourseList";
import { WhyChooseUs } from "./components/WhyChooseUsSection/WhyChooseUs";
import { Footer } from "./components/Footer/Footer";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { FAQ } from "./components/Faq/Faq";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      backgroundColor: "#E5E7EB",
      color: "#4B5563",
      padding: "0.25rem 0.5rem",
      borderRadius: "9999px",
      fontSize: "0.75rem",
    }}
  >
    {children}
  </span>
);

export default function App() {
  const popularCourses = [
    {
      id: 1,
      title: "Mathématiques - Spécialité",
      description: "Préparation intensive au bac",
      level: "Avancé",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Philosophie - Méthodologie",
      description: "Maîtrisez l'art de la dissertation",
      level: "Intermédiaire",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Physique-Chimie - TP virtuels",
      description: "Expériences interactives",
      level: "Tous niveaux",
      rating: 4.9,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Emma D.",
      text: "Grâce à TerminalePro, j'ai réussi mon bac avec mention. Les cours sont clairs et les exercices très utiles !",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Lucas M.",
      text: "J'ai beaucoup progressé en maths. Les profs en ligne sont géniaux et toujours disponibles pour répondre à mes questions.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB" }}>
      <Header />
      <SearchSection />
      <CourseList />
      <WhyChooseUs />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}
