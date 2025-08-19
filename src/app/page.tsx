"use client";
import Projects from "./components/Projects";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showProjects && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (!showProjects) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showProjects]);

  return (
    <div className="flex flex-col pt-[125px] max-w-screen-xl mx-auto">
      <section className="flex flex-col justify-between flex-grow px-0 sm:px-16">
        <Hero />
        <div className="relative overflow-hidden pb-8">
          <div className="relative z-10 flex flex-row justify-end items-center gap-4 sm:gap-12">
            <button className="text-2xl md:text-4xl font-semibold text-primary px-3 sm:px-6 py-2 sm:py-3 border-b-2 border-transparent hover:border-primary transition-transform duration-300 hover:scale-105">
              Blog
            </button>

            <AnimatedDivider />
            <button
              className={`text-2xl md:text-4xl font-semibold px-3 sm:px-6 py-2 sm:py-3 transition flex items-center justify-center gap-2 ${
                showProjects
                  ? "border-b-4 border-accent text-secondary text-opacity-85 font-bold"
                  : "border-b-2 border-transparent hover:border-secondary border-opacity-65 text-secondary text-opacity-80"
              } hover:scale-105 duration-300`}
              onClick={() => setShowProjects(!showProjects)}
              aria-expanded={showProjects}
              aria-controls="projects-section"
            >
              {showProjects ? "Hide Projects" : "Projects"}
            </button>
          </div>
        </div>
      </section>

      {showProjects && (
        <section
          id="projects-section"
          ref={projectsRef}
          className="pt-[125px] px-0 mb-5 sm:px-16 max-w-screen-xl mx-auto animate-fadeIn"
        >
          <Projects />
        </section>
      )}
    </div>
  );
}

const Hero = () => (
  <div className="max-w-xl mb-20">
    <h2 className=" text-2xl sm:text-3xl md:text-4xl leading-relaxed tracking-wide">
      Fullstack Web Developer
    </h2>
    <p className=" text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-wide">
      ~ who likes to bring ideas to life! ~{" "}
    </p>
  </div>
);

const AnimatedDivider = () => (
  <div className="flex flex-col justify-center items-center gap-1 h-16 sm:h-20">
    <span className="w-1 h-6 sm:h-8 rounded bg-primary animate-pulse-delay-0"></span>
    <span className="w-1 h-6 sm:h-8 rounded bg-secondary animate-pulse-delay-200"></span>
    <span className="w-1 h-6 sm:h-8 rounded bg-accent animate-pulse-delay-400"></span>
  </div>
);
