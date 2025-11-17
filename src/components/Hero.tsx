import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const handleLinktreeClick = () => {
    window.open('https://linktr.ee/unycaclinicaestetica', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/45"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="Clínica Unyca Estética" 
              className="h-32 md:h-48 w-auto drop-shadow-2xl"
              fetchPriority="high"
            />
          </div>
          
          {/* Main Tagline */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight tracking-tight">
            Sua melhor versão<br />no espelho
          </h1>
          
          {/* Services */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-6 mb-8 text-primary-foreground/90 px-4">
            <span className="text-base md:text-xl font-medium">Cirurgias Premium</span>
            <span className="hidden md:inline text-luxury-gold text-2xl">•</span>
            <span className="text-base md:text-xl font-medium">Fotona</span>
            <span className="hidden md:inline text-luxury-gold text-2xl">•</span>
            <span className="text-base md:text-xl font-medium">Cuidados Multidisciplinares</span>
          </div>
          
          {/* Specialties */}
          <p className="text-lg md:text-2xl text-primary-foreground/80 mb-10 font-light px-4">
            Dermatologia | Nutrologia | Ginecologia
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={handleLinktreeClick}
            className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-blue-dark font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 shine-effect w-auto mx-4"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Agende sua avaliação
          </Button>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-primary-foreground/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
