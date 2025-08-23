import { useEffect, useRef, useState } from "react";
import { ExperiencesDiv } from "../ExperiencesDiv/ExperiencesDiv";
import { ProjectsDiv } from "../ProjectsDiv/ProjectsDiv";
import { AboutDiv } from "../AboutDiv/AboutDiv";

export const ContentDiv = (props: {
  setSection: (section: string) => void;
}) => {
  const { setSection } = props;

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experiencesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  // track blur states
  const [aboutBlur, setAboutBlur] = useState(false);
  const [expBlur, setExpBlur] = useState(false);
  const [projBlur, setProjBlur] = useState(false);

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

  // special observers to toggle blur when sticky
  useEffect(() => {
    const toggleBlur = (
      el: HTMLElement | null,
      setBlur: (val: boolean) => void
    ) => {
      if (!el) return;
      const sentinel = document.createElement("div");
      sentinel.style.height = "1px";
      sentinel.style.visibility = "hidden"; // invisible but in flow
      el.insertBefore(sentinel, el.firstChild); // still inside section

      const obs = new IntersectionObserver(
        ([entry]) => {
          // if sentinel is NOT visible -> header is stuck
          setBlur(!entry.isIntersecting);
        },
        { root: null, threshold: 0 }
      );
      obs.observe(sentinel);

      return () => {
        obs.disconnect();
        sentinel.remove();
      };
    };
  
    const cleanups = [
      toggleBlur(aboutRef.current, setAboutBlur),
      toggleBlur(experiencesRef.current, setExpBlur),
      toggleBlur(projectsRef.current, setProjBlur),
    ];

    return () => {
      cleanups.forEach((c) => c && c());
    };
  }, []);

  return (
    <div className="mt-5 col-span-1 lg:pr-10 lg:pl-0 font-thin text-sm tracking-[0.5px] flex flex-col gap-16">
      {/* ABOUT */}
      <div id="about" ref={aboutRef} className="lg:scroll-mt-10 scroll-mt-6">
        <div
          className={`flex sticky top-0 py-2 lg:hidden pl-6 items-center group text-white font-medium z-100
          ${aboutBlur ? "backdrop-blur-md bg-black/30 border-b-1 border-white/50" : ""}
        `}
        >
          <div className="cursor-default">ABOUT</div>
        </div>

        <AboutDiv />
      </div>

      {/* EXPERIENCES */}
      <div id="experiences" ref={experiencesRef} className="lg:scroll-mt-12 scroll-mt-6">
        <div
          className={`flex sticky top-0 py-2 lg:hidden pl-6 items-center group text-white font-medium z-100
          ${expBlur ? "backdrop-blur-md bg-black/40 border-b-1 border-white/50" : ""}`}
        >
          <div className="cursor-default">EXPERIENCES</div>
        </div>
        <ExperiencesDiv />
      </div>

      {/* PROJECTS */}
      <div id="projects" ref={projectsRef} className="lg:scroll-mt-7 scroll-mt-6">
        <div
          className={`flex sticky top-0 py-2 lg:hidden pl-6 items-center group text-white font-medium z-100
          ${projBlur ? "backdrop-blur-md bg-black/40 border-b-1 border-white/50" : ""}`}
        >
          <div className="cursor-default">PROJECTS</div>
        </div>
        <ProjectsDiv />
      </div>
      <div className="text-xs pl-6 md:w-100 w-75 mb-10 text-zinc-400">
        Reference was designed on <span className="text-white">Figma</span>, and made using <span className="text-white">TypeScript</span>, <span className="text-white">React</span>, <span className="text-white">TailwindCSS</span>, and deployed on <span className="text-white">Vercel</span>.
      </div>
    </div>
  );
};
