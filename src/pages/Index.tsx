import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "./Hero";
import About from "./About";
import Collection from "./Collection";
import Commission from "./Commission";
import Footer from "@/components/Footer";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const collectionRef = useRef<HTMLDivElement>(null);
  const commissionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSectionAnimation = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const targets = entry.target.querySelectorAll(".section-enter");
        targets.forEach((el, i) => {
          const elem = el as HTMLElement;
          elem.style.transitionDelay = `${i * 80}ms`;
          elem.classList.add("section-visible");
          elem.classList.remove("section-enter");
        });

        // Once revealed, stop observing — prevents re-hiding on scroll
        observer.unobserve(entry.target);
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(handleSectionAnimation, observerOptions);

    const sections = [aboutRef.current, collectionRef.current, commissionRef.current];
    sections.forEach((section) => {
      if (section) {
        // Ensure section-enter children are visible without JS on mobile
        const targets = section.querySelectorAll(".section-enter");
        targets.forEach((el) => {
          (el as HTMLElement).style.opacity = "0";
        });
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="collection" ref={collectionRef}>
        <Collection />
      </div>
      <div id="commission" ref={commissionRef}>
        <Commission />
      </div>
      <Footer />
    </main>
  );
};

export default Index;