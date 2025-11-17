import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import draLuisaImg from "@/assets/dra-luisa.jpg";
import draLayanneImg from "@/assets/dra-layanne.jpg";
import draRebecaImg from "@/assets/dra-rebeca.jpg";
import draThaysImg from "@/assets/dra-thays.jpg";

const specialists = [
  {
    name: "Dra. Luísa",
    role: "Ginecologista",
    specialty: "Especialista em Menopausa e Climatério. Estética e Laser da Região Íntima. Cirurgias de Ninfoplastia e Rejuvenescimento Íntimo.",
    instagram: "https://www.instagram.com/luisagineco",
    image: draLuisaImg,
    bio: [
      "Ginecologista pela UFPI",
      "Ginecologia Endócrina pela USP-SP",
      "Medicina com ética e respeito",
      "Defensora de um estilo de vida saudável",
    ]
  },
  {
    name: "Dra. Layanne",
    role: "Cirurgiã Plástica",
    specialty: "Especialista em Tratamento Avançado dos Glúteos. Estética Feminina em Geral, Harmonização Facial e Procedimentos Invasivos como Lipoaspirações.",
    instagram: "https://www.instagram.com/dralayannepaixao",
    image: draLayanneImg,
    bio: [
      "Formada no Rio de Janeiro",
      "Pós-graduação em Hormonologia",
      "Pós-graduanda em Cirurgia Plástica",
      "Extremamente detalhista - os detalhes fazem a diferença",
    ]
  },
  {
    name: "Dra. Rebeca",
    role: "Médica Nutróloga",
    specialty: "Especialista em Performance Corporal, Reposição Hormonal e Tratamentos de Emagrecimento com Mounjaro. Especialista em Tratamento de Lipedema.",
    instagram: "https://www.instagram.com/drarebeca",
    image: draRebecaImg,
    bio: [
      "Pós-graduação em Nutrologia",
      "Extensão em hormônios e implantes hormonais",
      "Especialização em Lipedema",
      "Transformando, fortalecendo e empoderando vidas",
    ]
  },
  {
    name: "Dra. Thays",
    role: "Dermatologista",
    specialty: "Especialista em Transplante Capilar e Tratamentos Capilares. Expertise em Tricologia e Procedimentos Avançados para Saúde dos Cabelos.",
    instagram: "https://www.instagram.com/dra.thaystamaributi",
    image: draThaysImg,
    bio: [
      "Formação em Nutrição e Medicina",
      "Ex-atleta da Seleção Brasileira de Natação",
      "Pós-graduação em Dermatologia, Tricologia e Transplante Capilar",
      "Guerreira, detalhista e comprometida com resultados",
    ]
  },
];

const Specialists = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Nossos Especialistas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">
              Equipe altamente qualificada e comprometida com sua saúde
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((specialist, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover-lift bg-card border-luxury-gold/20 hover:border-luxury-gold transition-all duration-300 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-1">
                        {specialist.name}
                      </h3>
                      <p className="text-sm font-semibold text-luxury-gold uppercase tracking-wide">
                        {specialist.role}
                      </p>
                    </div>
                    <a 
                      href={specialist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-light hover:shadow-lg transition-all duration-300 hover:scale-110"
                      aria-label={`Instagram de ${specialist.name}`}
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                  
                  <p className="text-foreground/90 text-sm mb-4 leading-relaxed">
                    {specialist.specialty}
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <ul className="space-y-2">
                      {specialist.bio.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
