'use client';

import Image from "next/image";
import { siDiscord, siGithub, siGmail, siLibreoffice } from "simple-icons";
import { FileText } from "lucide-react";
import { useState, useCallback } from 'react';


export default function Hero() {
  const [showCopied, setShowCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("abrigogavin05@gmail.com").then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
  }, []);

  const socials = [
    {
      name: "Discord",
      url: "https://discord.com/users/maxxfuu",
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>{siDiscord.title}</title><path d={siDiscord.path}/></svg>,  
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gavinabrigo/",
      icon:  <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>,  
    },
    {
      name: "GitHub",
      url: "https://github.com/gav-ip",
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>{siGithub.title}</title><path d={siGithub.path}/></svg>,  
    },
    {
      name: "Email",
      onClick: copyEmail,
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>{siGmail.title}</title><path d={siGmail.path}/></svg>,  
    },
    {
      name: "Resume",
      url: "/Gavin Abrigo - resume.pdf",
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>{siLibreoffice.title}</title><path d={siLibreoffice.path}/></svg>,  
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-8 sm:py-12 md:py-16 gap-6 sm:gap-8">
      {/* left side */}
      <div className="flex flex-col px-4 max-w-full sm:max-w-md">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">Gavin Abrigo</h1>
        <h2 className="text-sm sm:text-base md:text-lg flex flex-col sm:inline-flex sm:flex-row sm:items-center mb-3 sm:mb-4">
          <span>CSE Student @ UC Merced</span>
          <span className="bg-[#101827] text-white-500 mt-2 sm:mt-0 sm:ml-4 rounded-md px-2 py-0.5 text-xs sm:text-sm self-start sm:self-auto">Junior</span>
        </h2>
        <p className="text-[#9CA3AF] mb-3 text-sm sm:text-base leading-relaxed">I&apos;m a full time student and an aspiring AI / machine learning engineer. I&apos;m interested in AI research in regards to nureal networks, LLMs, and MCP.</p>
        <p className="text-[#9CA3AF] mb-4 sm:mb-6 text-sm sm:text-base">If you&apos;d like to chat, feel free to reach out!</p>
        <div className="flex flex-row gap-4 sm:gap-6 justify-start">
          {socials.map((social) => (
            <div key={social.name} className="relative">
              <a href={social.url} onClick={social.onClick} className="text-gray-400 hover:text-white transition-colors p-1" target="_blank" rel="noopener noreferrer">
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  {social.icon}
                </div>
              </a>
              {social.name === 'Email' && showCopied && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded-md px-2 py-1">
                  Copied to Clipboard!
                </div>
              )}
            </div>
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
          className="w-[300px] h-[300px] object-cover rounded-md border-2 sm:border-4 border-[#151315] mt-4" />
      </div>
    </div>
  );
}
