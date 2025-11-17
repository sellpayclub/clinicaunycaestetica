import { MapPin, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-luxury-blue-dark via-primary to-luxury-blue text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Logo and Description */}
            <div className="space-y-6">
              <img 
                src={logoWhite} 
                alt="Clínica Unyca" 
                className="h-24 w-auto"
              />
              <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
                Clínica especializada em estética e cirurgias plásticas premium. 
                Sua melhor versão no espelho com o melhor atendimento e estrutura.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold mb-6">Contato</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-luxury-gold" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold mb-1">Endereço:</p>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Entrada alternativa pela Rua Ana Pereira de Melo<br />
                    R. Dep. Emílio Carlos, 253 - Sala 1010<br />
                    Vila Campesina, Osasco - SP, 06023-080
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-luxury-gold" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold mb-1">Telefone:</p>
                  <a 
                    href="tel:+5511930637398" 
                    className="text-primary-foreground/80 hover:text-luxury-gold transition-colors"
                  >
                    (11) 93063-7398
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
