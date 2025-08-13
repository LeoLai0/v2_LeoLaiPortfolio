import { useState } from "react";
import { Projects } from "../../utils/Constants";

export const ProjectsDiv = () => {
  const [showProfessional, setShowProfessional] = useState(true);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Find the correct category based on toggle
  const currentCategory = Projects.find(
    (cat) => cat.category === (showProfessional ? "Professional" : "Personal")
  );

  const projectItems = currentCategory?.items || [];

  return (
    <div>
      <div className="flex gap-17 right-0 mt-5 mb-4 px-6">
        <span
          className={`mr-2 text-xs font-semibold cursor-pointer transition duration-150 hover:underline ${showProfessional ? "text-zinc-200" : "text-zinc-500"}`}
          onClick={() => setShowProfessional(true)}
        >
          PROFESSIONAL
        </span>
        <span
          className={`ml-2 text-xs font-semibold cursor-pointer transition duration-150 hover:underline ${!showProfessional ? "text-zinc-200" : "text-zinc-500"}`}
          onClick={() => setShowProfessional(false)}
        >
          PERSONAL
        </span>
      </div>
      <div>
        {projectItems.map((proj, idx) => {
          const isHovered = hoveredIdx === idx;
          const isOther = hoveredIdx !== null && hoveredIdx !== idx;

          return (
            <div
              key={idx}
              className={
                `group mb-1 border-transparent flex flex-row justify-between gap-4 transition duration-200 cursor-pointer rounded-md p-6 mb-1
                ${isHovered
                  ? "hover:bg-white/5 hover:border-t-1 hover:border-t-white/10 hover:inset-shadow-[0_10px_40px_rgba(0,0,0,0)] hover:backdrop-blur-[1px] hover:inset-shadow-white/8"
                  : isOther
                    ? "text-zinc-500"
                    : "hover:bg-white/5 hover:border-t-1 hover:border-t-white/20"}`
              }
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => window.open(proj.link, "_blank")}
            >
              <div className={`w-[25%] flex items-start mt-2 justify-center transition duration-150 ${isOther ? "brightness-50" : ""}`}>
                {proj.image.endsWith(".mp4") ? (
                  <video
                    src={proj.image}
                    controls={false}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={!showProfessional ? "border-3 border-white/50 rounded-sm" : ""}
                  />
                ) : (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className={!showProfessional ? "border-3 border-white/50 rounded-sm" : ""}
                  />
                )}
              </div>
              <div className="flex flex-col w-[70%]">
                <div className="font-light mb-1 flex items-center text-md gap-2 flex justify-between items-center md:justify-normal">
                  <div>{proj.title}</div>
                  {(showProfessional) ? (
                    <div className="text-zinc-400 text-[0.6rem] transition duration-200 pl-2 group-hover:scale-115 text-zinc-40 underline-offset-2 group-hover:underline group-hover:text-white/80 font-thin">{proj.location}</div>
                  ) : (
                    <div
                      className="text-zinc-400 text-[0.6rem] transition duration-200 pl-2 group-hover:scale-115 text-zinc-40 underline-offset-2 group-hover:underline group-hover:text-white/80 font-thin"
                    >
                      View<span className="invisible md:visible"> Project</span>
                    </div>
                  )
                  }
                </div>
                <div className="text-xs tracking-[0.7px] text-zinc-400 mb-4">{proj.description}</div>
                <div className="text-xs text-zinc-500 mb-1">
                  {proj.skills?.map((skill, i) => (
                    <span key={i} className="inline-block mr-2 mb-2 px-2 py-1 bg-white/5 rounded text-xs border-1 border-x-white/20 border-y-white/5 text-zinc-300 tracking-wide backdrop-blur-[.8px] inset-shadow-sm inset-shadow-white/3">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
      })}
      </div>
    </div>
  );
};