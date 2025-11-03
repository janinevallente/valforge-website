import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "./Hero";
import About from "./About";
import Collection from "./Collection";
import Commission from "./Commission";
import Footer from "@/components/ui/Footer";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const collectionRef = useRef<HTMLDivElement>(null);
  const commissionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSectionAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'home') {
            // For home section, animate the hero content only
            const heroContent = entry.target.querySelector('.hero-content');
            if (heroContent) {
              heroContent.classList.remove('animate-fade-in-up');
              heroContent.classList.add('animate-fade-in-up');
            }
          } else {
            // For other sections, animate the entire section
            entry.target.classList.add('animate-fade-in-up');
          }
        } else {
          // Remove animation class when section leaves view
          if (entry.target.id !== 'home') {
            entry.target.classList.remove('animate-fade-in-up');
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(handleSectionAnimation, observerOptions);

    const sections = [aboutRef.current, collectionRef.current, commissionRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="collection" ref={collectionRef}>
        <Collection />
      </section>
      <section id="commission" ref={commissionRef}>
        <Commission />
      </section>
      <Footer />
    </main>
  );
};

export default Index;