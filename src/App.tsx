import { Header } from "./components/Header/Header";
import { SearchSection } from "./components/SearchSection/SearchSection";
import { WhyChooseUs } from "./components/WhyChooseUsSection/WhyChooseUs";
import { Footer } from "./components/Footer/Footer";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { FAQ } from "./components/Faq/Faq";
import "./App.css";
import { LessonCard } from "./components/Lesson/Lesson";

export default function App() {
  return (
    <div className="container">
      <Header />
      <SearchSection />
      <LessonCard />
      <WhyChooseUs />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}
