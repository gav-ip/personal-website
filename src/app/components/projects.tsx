import { ChevronRight, Component } from "lucide-react";
import Image from "next/image";

const PythonIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Python</title>
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
    </svg>
);

const StreamLitIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Streamlit</title>
        <path d="M16.673 11.32l6.862-3.618c.233-.136.554.12.442.387L20.463 17.1zm-8.556-.229l3.473-5.187c.203-.328.578-.316.793-.028l7.886 11.75zm-3.375 7.25c-.28 0-.835-.284-.993-.716l-3.72-9.46c-.118-.331.139-.614.48-.464l19.474 10.306c-.149.147-.453.337-.72.334z"/>
    </svg>
);

const NvidiaIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>NVIDIA</title>
        <path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"/>
    </svg>
);

export default function Projects() {
  const projects = [
    {
      id: "project-1",
      name: "Fleet-AI", 
      type: "Local Run Website (In Progress)",
      description: "NEMO Agent Virtual Fleet Vehicle Health and Maintinence Advisor.",
      image: "/fleet-ai.webp",
      link: "https://github.com/gav-ip/fleet-ai",
      technologies: [
        { name: "Python", component: PythonIcon },
        { name: "StreamLit", component: StreamLitIcon},
        { name: "Nvidia", component: NvidiaIcon}
      ]
    }
    // {
    //   id: "project-4",
    //   name: "Project 4", 
    //   description: "Description of project 4",
    //   image: "/project-4.png",
    //   link: "https://project-4.com",
    //   technologies: [
    //     { name: "Next.js", component: NextIcon },
    //     { name: "Rust", component: RustIcon },
    //   ]
    // }
  ]

  return (
    <div className="pt-4 pb-8 px-4">
      {/* Header section with responsive design */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
        <h2 className="text-lg sm:text-xl font-semibold">projects</h2>
        <a 
          href="https://github.com/gav-ip" 
          className="inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
        >
          <span className="hidden sm:inline">View more on</span>
          <span className="sm:hidden">More on</span>
          GitHub <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      {/* Responsive grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project) => (
            <a key={project.id}
              href={project.link}
              className="bg-[#131313] p-3 sm:p-4 rounded-lg hover:bg-[#232323] transition-colors group block cursor-pointer"
            >
              <div className="flex flex-col space-y-2 sm:space-y-3">
                <Image
                  priority={true}
                  draggable={false}
                  src={project.image} 
                  alt={project.name} 
                  width={344} 
                  height={200} 
                  className="w-full h-50 object-cover rounded-md"
                />
                <div className="flex flex-row justify-between items-start">
                  <div className="flex-1">
                    <h3 className="mb-2 text-sm font-semibold group-hover:text-white transition-colors items-center">
                      {project.name}
                      <span className="ml-3 text-xs font-normal tracking-tighter px-2 py-0.5 bg-[#535353] rounded-md">{project.type}</span>
                    </h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {/* Technology logos */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1 ml-2">
                      {project.technologies.map((tech, index) => {
                        const IconComponent = tech.component;
                        return (
                          <div 
                            key={index}
                            className="text-gray-400 group-hover:text-gray-300 transition-colors"
                            title={tech.name}
                          >
                            <IconComponent />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </a>
        ))}
      </div>
    </div>
  );
}