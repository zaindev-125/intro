
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-6 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-6">
          <SocialLink icon={<Github />} href="#" />
          <SocialLink icon={<Linkedin />} href="#" />
          <SocialLink icon={<Twitter />} href="#" />
          <SocialLink icon={<Mail />} href="#" />
        </div>
        <div className="w-24 h-[1px] bg-gradient-to-r from-astro-primary to-astro-sky mx-auto mb-6"></div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Zain Ul Abideen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const SocialLink = ({ 
  icon, 
  href 
}: { 
  icon: React.ReactNode; 
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cosmic-card p-3 hover:border-astro-primary transition-all duration-300 group"
    >
      {React.cloneElement(icon as React.ReactElement, { 
        className: "w-5 h-5 text-astro-light group-hover:text-astro-primary transition-colors duration-300" 
      })}
    </a>
  );
};

export default Footer;
