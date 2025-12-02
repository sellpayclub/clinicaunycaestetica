import { MapPin, Phone, Instagram } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-luxury-blue-dark via-primary to-luxury-blue text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Logo and Description */}
            <div className="space-y-6">
              <img 
                src={logoWhite} 
                alt="Clínica Unyca" 
                className="h-24 w-auto"
                loading="lazy"
              />
              <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
                Clínica de Estética avançada, Dermatologia, Cirurgia plástica, Nutrologia, Ginecologia e tudo mais voltado para saúde, estética e bem-estar.
              </p>
            </div>
            
            {/* Unidade Alphaville */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold mb-4 text-luxury-gold">Unidade Alphaville</h3>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-4 w-4 text-luxury-gold" />
                </div>
                <div className="text-sm">
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Al. Rio Negro, 967 - Sala 721 (7º Andar)<br />
                    Alphaville Comercial, Barueri - SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-luxury-gold" />
                </div>
                <div className="text-sm">
                  <a 
                    href="tel:+5511993932696" 
                    className="text-primary-foreground/80 hover:text-luxury-gold transition-colors"
                  >
                    (11) 99393-2696
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                  <Instagram className="h-4 w-4 text-luxury-gold" />
                </div>
                <div className="text-sm">
                  <a 
                    href="https://www.instagram.com/clinicaunyca/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-luxury-gold transition-colors"
                  >
                    @clinicaunyca
                  </a>
                </div>
              </div>
            </div>
            
            {/* Unidade Osasco */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold mb-4 text-luxury-gold">Unidade Osasco</h3>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-4 w-4 text-luxury-gold" />
                </div>
                <div className="text-sm">
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Entrada pela Rua Ana Pereira de Melo<br />
                    R. Dep. Emílio Carlos, 253 - Sala 1010<br />
                    Vila Campesina, Osasco - SP, 06023-080
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-luxury-gold" />
                </div>
                <div className="text-sm">
                  <a 
                    href="tel:+5511930637398" 
                    className="text-primary-foreground/80 hover:text-luxury-gold transition-colors"
                  >
                    (11) 93063-7398
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                  <Instagram className="h-4 w-4 text-luxury-gold" />
                </div>
                <div className="text-sm">
                  <a 
                    href="https://www.instagram.com/clinicaunyca/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-luxury-gold transition-colors"
                  >
                    @clinicaunyca
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Clínica Unyca Estética. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;