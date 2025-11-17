import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const whatsappNumber = "5511930637398";
  const whatsappMessage = "Olá! Gostaria de agendar uma avaliação na Clínica Unyca.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-navy/85 via-luxury-blue-dark/80 to-luxury-blue-dark/75"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="Clínica Unyca Estética" 
              className="h-32 md:h-48 w-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Main Tagline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            🪞 Sua melhor versão<br />no espelho
          </h1>
          
          {/* Services */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 text-primary-foreground/90">
            <span className="text-lg md:text-xl font-medium">🔬 Cirurgias Premium</span>
            <span className="hidden md:inline text-luxury-gold text-2xl">•</span>
            <span className="text-lg md:text-xl font-medium">Fotona</span>
            <span className="hidden md:inline text-luxury-gold text-2xl">•</span>
            <span className="text-lg md:text-xl font-medium">Cuidados Multidisciplinares</span>
          </div>
          
          {/* Specialties */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 font-light">
            🩺 Dermato | Nutrologia | Ginecologia
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-blue-dark font-semibold text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 shine-effect"
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
