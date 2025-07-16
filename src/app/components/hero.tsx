import Image from "next/image";
import { Linkedin, Disc, Twitter, Github, Mail } from "lucide-react";

const socials = [
  {
    name: "Discord",
    url: "https://discord.com/users/maxxfuu",
    icon: <Disc />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gavinabrigo/",
    icon: <Linkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/gav-ip",
    icon: <Github />,
  },
  {
    name: "Email",
    url: "mailto:abrigogavin05@gmail.com",
    icon: <Mail />,
  },
]

export default function Hero() {
  return(
    <div className="flex flex-col md:flex-row justify-between items-center py-8 sm:py-12 md:py-16 gap-6 sm:gap-8">
      {/* left side */}
      <div className="flex flex-col px-4 max-w-full sm:max-w-md">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">Gavin Abrigo</h1>
        <h2 className="text-sm sm:text-base md:text-lg flex flex-col sm:inline-flex sm:flex-row sm:items-center mb-3 sm:mb-4">
          <span>CSE Student @ UC Merced</span>
          <span className="bg-[#101827] text-white-500 mt-2 sm:mt-0 sm:ml-4 rounded-md px-2 py-0.5 text-xs sm:text-sm self-start sm:self-auto">Junior</span>
        </h2>
        <p className="text-[#9CA3AF] mb-3 text-sm sm:text-base leading-relaxed">I&apos;m a full time student and an aspiring AI / machine learning engineer. I&apos; interested in AI research in regards to nureal networks, LLMs, and MCP.</p>
        <p className="text-[#9CA3AF] mb-4 sm:mb-6 text-sm sm:text-base">If you&apos;d like to chat, feel free to reach out!</p>
        <div className="flex flex-row gap-4 sm:gap-6 justify-start">
          {socials.map((social) => (
             <a href={social.url} key={social.name} className="text-gray-400 hover:text-white transition-colors p-1">
               <div className="w-5 h-5 sm:w-6 sm:h-6">
                 {social.icon}
               </div>
             </a>
           ))}
        </div>
      </div>

      <div>
        <Image 
          src="/profilepic.webp" 
          alt="Gavin Abrigo" 
          width={400} 
          height={400}
          priority={true}
          draggable={false}
          className="w-[300px] h-[300px] object-cover rounded-md border-2 sm:border-4 border-[#151315] mt-4"/>
      </div>
    </div>
  );
}