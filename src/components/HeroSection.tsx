
import { CornerRightDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6">
      <div className="animate-floating z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
          Zain Ul Abideen
        </h1>
        <div className="w-48 h-1 bg-gradient-to-r from-astro-primary to-astro-sky mx-auto mb-6"></div>
        <h2 className="text-xl md:text-2xl text-astro-light mb-8">Full Stack Developer</h2>
        
        <div className="max-w-xl text-center mx-auto mt-8">
          <p className="text-lg text-gray-300">
            Crafting digital experiences that bridge innovation and functionality
          </p>
        </div>
      </div>
      
      <Button
        onClick={scrollToAbout}
        className="mt-12 bg-astro-primary hover:bg-astro-primary/80 text-white animate-pulse-slow"
      >
        Discover More <CornerRightDown className="ml-2 h-4 w-4" />
      </Button>
      
      <div className="absolute w-full h-full top-0 left-0 z-[-1]">
        <div className="absolute top-1/4 right-1/4 w-5 h-5 rounded-full bg-white opacity-50 animate-star-glow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-astro-sky opacity-50 animate-star-glow delay-100"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-astro-primary opacity-30 animate-star-glow delay-300"></div>
      </div>
    </div>
  );
};

export default HeroSection;
