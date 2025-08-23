import { useState } from "react";
import { Experiences } from "../../utils/Constants"
import resume from "../../assets/Leo Lai's Resume (2025).pdf"

export const ExperiencesDiv = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleResumeDownload = () => {
    const url = resume;
    const link = document.createElement('a');
    link.href = url;
    link.download = "Leo Lai Resume.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      {Experiences.map((exp, idx) => {
        const isHovered = hoveredIdx === idx;
        const isOther = hoveredIdx !== null && hoveredIdx !== idx;

        return (
          <div
            key={idx}
            className={
              `mb-1 flex border-transparent flex-row justify-between transition duration-200 cursor-pointer rounded-md p-6 ` +
              (isHovered
                ? "lg:hover:bg-white/5 lg:hover:border-t-1 lg:hover:border-t-white/10 lg:hover:inset-shadow-[0_10px_30px_rgba(0,0,0,0)] lg:hover:backdrop-blur-[1px] lg:hover:inset-shadow-white/8"
                : isOther
                  ? "text-zinc-500"
                  : "hover:bg-white/5 hover:border-t-1 hover:border-t-white/20")
            }
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          > 
            <div className="hidden lg:flex w-[20%] whitespace-nowrap text-xs tracking-wider text-zinc-400 font-light pt-1">
              {exp.date}
            </div>
            <div className="lg:w-[70%] w-[100%]">
              <div className="text-md font-light mb-1 gap-2 flex justify-between items-center md:justify-normal">
                <div>{exp.title}</div>
                <div className="lg:hidden whitespace-nowrap text-[0.6rem] pl-2 tracking-wider text-zinc-400 font-light">({exp.date})</div>
              </div>
              <div>
                {exp.description.split("\n\n").map((line, i) => (
                  <p key={i} className="text-xs tracking-[0.7px] text-zinc-400 mb-4">{line}</p>
                ))}
              </div>
              <div>
                {exp.skills?.map((skill, i) => (
                  <span key={i} className="inline-block mr-2 mb-2 px-2 py-1 bg-white/5 rounded text-xs border-1 border-x-white/10 border-y-white/5 text-zinc-300 tracking-wider backdrop-blur-[.8px] inset-shadow-sm inset-shadow-white/3">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      <div
        className="text-xs font-medium tracking-wider mt-5 mx-6 hover:underline cursor-pointer select-none"
        onClick={() => handleResumeDownload()}  
      >
        VIEW FULL RESUMÉ &rarr;
      </div>
    </>
  )
}