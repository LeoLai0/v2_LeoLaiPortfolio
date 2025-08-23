import { useEffect, useRef } from "react";
import { ExperiencesDiv } from "../ExperiencesDiv/ExperiencesDiv";
import { ProjectsDiv } from "../ProjectsDiv/ProjectsDiv";
import { AboutDiv } from "../AboutDiv/AboutDiv";

export const ContentDiv = (props: {
  section: string,
  setSection: (section: string) => void
}) => {
  const { section, setSection } = props;

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experiencesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const makeObserver = (id: string, threshold: number) =>
      new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setSection(id);
            }
          }
        },
        {
          root: null,
          threshold,
          rootMargin: "-80px 0px 0px 0px",
        }
      );

    const aboutObs = makeObserver("about", 0.5);
    const expObs = makeObserver("experiences", 0.5);
    const projObs = makeObserver("projects", 0.3);

    if (aboutRef.current) aboutObs.observe(aboutRef.current);
    if (experiencesRef.current) expObs.observe(experiencesRef.current);
    if (projectsRef.current) projObs.observe(projectsRef.current);

    return () => {
      if (aboutRef.current) aboutObs.unobserve(aboutRef.current);
      if (experiencesRef.current) expObs.unobserve(experiencesRef.current);
      if (projectsRef.current) projObs.unobserve(projectsRef.current);
    };
  }, [setSection]);
  
  return (
    <div className="mt-5 col-span-1 lg:pr-10 lg:pl-0 pl-1 pr-1 font-thin text-sm tracking-[0.5px] flex flex-col gap-16">
      <div id="about" ref={aboutRef} className="scroll-mt-10">
        <div
          className={`flex lg:hidden pl-6 items-center gap-2 group transition-colors duration-500 ${
            section === "about" ? 'text-white font-medium block' : 'text-black'
          }`}
        >
          <span
            className={`h-[1px] transition-all duration-500 ${
              section === "about" ? 'w-12 bg-white' : 'w-4 black'
            }`}
          />
          <div
            className="cursor-default"
          >
            ABOUT
          </div>
        </div>
        <AboutDiv />
      </div>
      <div id="experiences" ref={experiencesRef} className="scroll-mt-12">
        <div
          className={`flex lg:hidden pl-6 items-center gap-2 group transition-colors duration-500 ${
            section === "experiences" ? 'text-white font-medium block' : 'text-black'
          }`}
        >
          <span
            className={`h-[1px] transition-all duration-500 ${
              section === "experiences" ? 'w-12 bg-white' : 'w-4 black'
            }`}
          />
          <div
            className="cursor-default"
          >
            EXPERIENCES
          </div>
        </div>
        <ExperiencesDiv />
      </div>
      <div id="projects" ref={projectsRef} className="scroll-mt-7">
        <div
          className={`flex lg:hidden pl-6 items-center gap-2 group transition-colors duration-500 ${
            section === "projects" ? 'text-white font-medium block' : 'text-black'
          }`}
        >
          <span
            className={`h-[1px] transition-all duration-500 ${
              section === "projects" ? 'w-12 bg-white' : 'w-4 black'
            }`}
          />
          <div
            className="cursor-default"
          >
            PROJECTS
          </div>
        </div>
        <ProjectsDiv />
      </div>
      <div className="text-xs pl-6 md:w-100 w-75 mb-10 text-zinc-400">
        Reference was designed on <span className="text-white">Figma</span>, and made using <span className="text-white">TypeScript</span>, <span className="text-white">React</span>, <span className="text-white">TailwindCSS</span>, and deployed on <span className="text-white">Vercel</span>.
      </div>
    </div>
  );
}