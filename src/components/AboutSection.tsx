
import React from 'react';
import { Code, Server, Layout, Star, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-astro-primary to-astro-sky mx-auto"></div>
        </div>
        
        <div className="cosmic-card p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-lg leading-relaxed mb-8">
              A passionate Full Stack Developer with 5+ years of experience crafting scalable web applications 
              using the MERN stack. I specialize in building responsive interfaces with React.js, architecting 
              robust backend systems with Node.js/Express.js, and bridging complex technical requirements with 
              intuitive user experiences.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              My expertise spans RESTful API design, state management, and performance optimization—always with 
              a focus on aligning technical excellence with business goals. Currently leading development teams 
              at CoreStack Solutions, I thrive on solving challenging problems while mentoring colleagues and 
              implementing cutting-edge solutions.
            </p>
            <p className="text-xl font-bold text-astro-light">
              Let's build something remarkable together.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            icon={<Layout />}
            title="Frontend Development" 
            description="Building responsive and intuitive user interfaces with React.js" 
          />
          <SkillCard 
            icon={<Server />}
            title="Backend Systems" 
            description="Crafting robust APIs and server architecture with Node.js & Express" 
          />
          <SkillCard 
            icon={<Code />}
            title="Full Stack Expertise" 
            description="End-to-end application development with the MERN stack" 
          />
          <SkillCard 
            icon={<Zap />}
            title="Performance Optimization" 
            description="Creating efficient applications with optimal load times" 
          />
          <SkillCard 
            icon={<Users />}
            title="Team Leadership" 
            description="Guiding development teams while fostering growth and innovation" 
          />
          <SkillCard 
            icon={<Star />}
            title="Problem Solving" 
            description="Transforming complex requirements into elegant solutions" 
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="cosmic-card p-6 hover:border-astro-primary transition-all duration-300 group">
      <div className="bg-astro-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-astro-primary/20 transition-all duration-300">
        {React.cloneElement(icon as React.ReactElement, { 
          className: "w-6 h-6 text-astro-primary" 
        })}
      </div>
      <h3 className="text-xl font-bold mb-2 text-astro-light">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default AboutSection;
