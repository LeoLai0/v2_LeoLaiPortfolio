import { contactElements } from "../../utils/Constants";


export const BlurbDiv = ( BlurbDivProps: {
  section: string;
}) => {
  const { section } = BlurbDivProps;
  
  return (
    <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 col-span-1 lg:sticky md:relative top-0 lg:h-[calc(100vh-8vh)] flex flex-col lg:justify-between select-none">
      <div>
        <h1 className="lg:text-[8rem] md:text-[7rem] text-[6rem] font-normal tracking-[-0.06em]">Leo Lai</h1>
        <div className="pl-2 pr-4 pointer-events-auto">
          <div className="text-2xl mb-1">Full Stack Engineer</div>
          <div className="text-md mb-10 text-zinc-400">
            I'm passionate about building scalable, efficient applications with intuitive design, and real world impact
          </div>
          <div className="flex flex-col gap-4 text-sm tracking-[1.5px] lg:flex hidden">
            {[
              { label: 'ABOUT', key: 'about' },
              { label: 'EXPERIENCES', key: 'experiences' },
              { label: 'PROJECTS', key: 'projects' },

            ].map(({ label, key }) => (
              <div
                key={key}
                className={`flex items-center gap-2 group transition-colors duration-500 ${
                  section === key ? 'text-white font-medium block' : 'text-black'
                }`}
              >
                <span
                  className={`h-[1px] transition-all duration-500 ${
                    section === key ? 'w-12 bg-white' : 'w-4 black'
                  }`}
                />
                <div
                  className="cursor-default"
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pl-2 lg:h-10 md:h-7 h-5 lg:mb-10 md:mb-7 mb-5 flex flex-row items-end lg:gap-5 md:gap-4 gap-3">
          {contactElements.map((element, index) => (
            <div
              key={index}
              className="lg:w-7 md:w-6 w-5 hover:invert transition duration-200 cursor-pointer"
              onClick={(e) => {
                if (element.name === "mail") {
                  window.location.href = `mailto: ${element.link}`;
                  e.preventDefault();
                } else {
                  window.open(element.link, "_blank")}
                }
              }
            >
              <img 
                src={element.image}
                alt={element.name}
              />
            </div>
          ))}
      </div>
    </div>
  )
}