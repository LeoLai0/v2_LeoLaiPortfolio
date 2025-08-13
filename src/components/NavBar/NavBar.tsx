export const NavBar = ( NavBarProps: {
  section: string;
}) => {
  const { section } = NavBarProps;

  const navElements = [
    {
      label: "ABOUT",
      id: "about",
    },
    {
      label: "EXPERIENCES",
      id: "experiences",
    },
    {
      label: "PROJECTS",
      id: "projects",
    },
    
  ]
  return (
    <div className="absolute top-0 px-5 lg:px-7 flex flex-row items-end lg:h-7 h-5 w-full text-[0.65rem] select-none">
      <div className="flex flex-row gap-4">
        {navElements.map((element, index) => (
          <div
            key={index}
            className={`group ${section === element.id ? "text-white cursor-not-allowed" : "hover:text-zinc-500 cursor-pointer"} transition duration-150 flex flex-row items-center gap-1`}
            onClick={() => {
              document.getElementById(element.id)?.scrollIntoView({ behavior: "smooth"});
            }}
          >
            <div className={`h-2 w-2 border border-white transition duration-150 ${section === element.id ? "bg-white" : "bg-black group-hover:border-zinc-500"}`} />
            <div>
              {element.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}