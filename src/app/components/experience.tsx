"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion/accordion";
import Image from "next/legacy/image";

const experiences = [
  {
    id: "item-1",
    image: "/oculus.png",
    company: "Oculus",
    position: "Software Engineering Intern",
    description: "- Assisted in the early development of Bash tools and TypeScript modules for command-line interfaces while collaborating closely with developers debugging errors and defining architecture and feature sets.",
    date: "Jan 2025 - Jun 2025"
  },
  {
    id: "item-2",
    image: "/techknowhow.png",
    company: "TechKnowHow",
    position: "Teaching Assistant",
    description: "Developing kids understanding of coding and design with Scratch, Minecraft, and LEGOs.",
    date: "Jun 2022 - Jun 2024"
  }
];

export default function Experience() {
  return (
    <div className="py-4 px-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">experience</h2>
      
      <Accordion type="multiple" className="w-full">
        {experiences.map((exp) => (
          <AccordionItem key={exp.id} value={exp.id}>
            <AccordionTrigger className="text-left w-full">
              <div className="flex items-center justify-between w-full pr-2 sm:pr-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <Image src={exp.image} alt={exp.company} width={35} height={35} className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                  <div className="flex flex-col items-start min-w-0 flex-1">
                    <h3 className="font-medium text-sm sm:text-base truncate w-full">{exp.company}</h3>
                    <div className="flex items-center text-xs sm:text-sm text-[#9CA3AF]">
                      <span className="truncate">{exp.position}</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-[#9CA3AF] flex-shrink-0 ml-2">
                  <span className="hidden sm:inline">{exp.date}</span>
                  <span className="sm:hidden">{exp.date.split(' ')[1] || exp.date}</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4 px-2 sm:px-0">
                <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}