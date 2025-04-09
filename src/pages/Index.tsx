
import StarBackground from "@/components/StarBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
