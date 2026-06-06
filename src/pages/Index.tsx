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
    const handleSectionAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const isDesktop = window.innerWidth >= 768;
        if (!isDesktop) return;

        const targets = entry.target.querySelectorAll(".section-enter");
        if (entry.isIntersecting) {
          targets.forEach((el, i) => {
            const elem = el as HTMLElement;
            elem.style.transitionDelay = `${i * 80}ms`;
            elem.classList.add("section-visible");
            elem.classList.remove("section-enter");
          });
        } else {
          targets.forEach((el) => {
            const elem = el as HTMLElement;
            elem.style.transitionDelay = "0ms";
            elem.classList.remove("section-visible");
            elem.classList.add("section-enter");
          });
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-5% 0px -10% 0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(handleSectionAnimation, observerOptions);

    const sections = [aboutRef.current, collectionRef.current, commissionRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {/* pt-[60px] = ticker (28px) + nav (48px) approx, handled in hero via pt */}
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