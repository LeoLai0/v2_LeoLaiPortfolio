import { useEffect, useRef } from "react";
import { ExperiencesDiv } from "../ExperiencesDiv/ExperiencesDiv";
import { ProjectsDiv } from "../ProjectsDiv/ProjectsDiv";
import { AboutDiv } from "../AboutDiv/AboutDiv";

export const ContentDiv = (props: {
  setSection: (section: string) => void
}) => {
  const { setSection } = props;

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experiencesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "about") setSection("about");
            if (id === "experiences") setSection("experiences");
            if (id === "projects") setSection("projects");
          }
        }
      },
      {
        root: null, // viewport
        threshold: 0.5,
        rootMargin: "-80px 0px 0px 0px", 
      }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experiencesRef.current) observer.observe(experiencesRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (experiencesRef.current) observer.unobserve(experiencesRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, [setSection]);
  return (
    <div className="mt-5 col-span-1 lg:pr-10 lg:pl-0 pl-1 pr-1 font-thin text-sm tracking-[0.5px] flex flex-col gap-16">
      <div id="about" ref={aboutRef} className="scroll-mt-10">
        <AboutDiv />
      </div>
      <div id="experiences" ref={experiencesRef} className="scroll-mt-12">
        <ExperiencesDiv />
      </div>
      <div id="projects" ref={projectsRef} className="scroll-mt-7">
        <ProjectsDiv />
      </div>
      <div className="text-xs pl-6 w-100 mb-10 text-zinc-400">
        Reference was designed on <span className="text-white">Figma</span>, and made using <span className="text-white">TypeScript</span>, <span className="text-white">React</span>, <span className="text-white">TailwindCSS</span>, and deployed on <span className="text-white">Vercel</span>.
      </div>
    </div>
  );
}