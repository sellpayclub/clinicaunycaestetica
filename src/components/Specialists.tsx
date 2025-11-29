import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import draLuisaImg from "@/assets/dra-luisa.jpg";
import draLayanneImg from "@/assets/dra-layanne.jpg";
import draRebecaImg from "@/assets/dra-rebeca.jpg";
import draThaysImg from "@/assets/dra-thays.jpg";
import drCarlosImg from "@/assets/dr-carlos.jpg";
import drAlexandreImg from "@/assets/dr-alexandre.jpg";
import draStellaImg from "@/assets/dra-stella.jpg";
import draDeniseImg from "@/assets/dra-denise.jpg";
import draCarinaImg from "@/assets/dra-carina.jpg";
import draCrisImg from "@/assets/dra-cris.jpg";
import drLuisImg from "@/assets/dr-luis.jpg";
import draJulianaImg from "@/assets/dra-juliana.jpg";
import drGustavoImg from "@/assets/dr-gustavo.jpg";
import draThalitaImg from "@/assets/dra-thalita.jpg";

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
    role: "Nutrologia",
    specialty: "Especialista em Performance Corporal, Reposição Hormonal e Tratamentos de Emagrecimento com Mounjaro. Especialista em Tratamento de Lipedema.",
    instagram: "https://www.instagram.com/dralaizerebeca/",
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
    role: "Tricologista Capilar",
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
  {
    name: "Dr. Carlos J. Gaspar Jr",
    role: "Cirurgião Plástico",
    specialty: "Membro da Sociedade Brasileira de Cirurgia Plástica. Especialista em Laser FOTONA e Cirurgias Plásticas Corporais, Lipoescultura, Abdominoplastia, Cirurgias das Mamas e Blefaroplastias.",
    instagram: "https://www.instagram.com/drgasparjr",
    image: drCarlosImg,
    bio: [
      "Cristão e pai dos gêmeos Lucas & Laura",
      "Especialista em Laser FOTONA",
      "Adora esportes, especialmente academia e musculação",
      "Comprometido com estilo de vida saudável de suas pacientes",
    ]
  },
  {
    name: "Dr. Alexandre Palaro Braga",
    role: "Otorrinolaringologista",
    specialty: "Especialista em Rinologia e Cirurgias da Face com Ênfase em Rinoplastia. Chefe do Ambulatório de Rinologia e Plástica Facial do HCFMB Unesp.",
    instagram: "https://www.instagram.com/dralexandrebraga",
    image: drAlexandreImg,
    bio: [
      "Esposo da Talita e pai orgulhoso da Antonella",
      "Médico pela Famerp, Otorrinolaringologista pela Unesp",
      "Rinologista e Mestre pela Unesp",
      "Revela sua beleza - sua melhor versão",
    ]
  },
  {
    name: "Dra. Stella Catunda",
    role: "Ginecologista",
    specialty: "Ginecologista pelo Hospital da Mulher - Pérola Byington. Pós-graduação em Ginecologia Endócrina e Mestrado em Climatério pela Unifesp.",
    instagram: "https://www.instagram.com/stellacatunda",
    image: draStellaImg,
    bio: [
      "Formação pelo Hospital da Mulher - Pérola Byington",
      "Pós-graduação em Ginecologia Endócrina pela Unifesp",
      "Mestrado em Climatério pela Unifesp",
      "Especialista em saúde feminina integral",
    ]
  },
  {
    name: "Dra. Denise Medrado",
    role: "Esteticista e Nutricionista",
    specialty: "Mais de 20 anos de experiência em Rejuvenescimento Facial com Tecnologias a Laser e Protocolos Estéticos Avançados. Acompanhamento Nutricional Clínico e Estético.",
    instagram: "https://www.instagram.com/denisemedrado_/",
    image: draDeniseImg,
    bio: [
      "Esteticista, Cosmetóloga e Nutricionista",
      "Pós-graduação em Nutrição Clínica pela USP",
      "Especialista em rejuvenescimento facial com laser",
      "Cuidado global alinhando saúde, beleza e estilo de vida",
    ]
  },
  {
    name: "Dra. Carina Guidi",
    role: "Fisioterapeuta Dermatofuncional",
    specialty: "Especialista em Pré e Pós-operatório de Cirurgias Plásticas e Reparadoras. Protocolos Personalizados com Taping, Laser, Exercícios e Drenagem Linfática.",
    instagram: "https://www.instagram.com/dracarinaguidi.fisioterapia",
    image: draCarinaImg,
    bio: [
      "Pós-graduada em Fisioterapia Dermatofuncional",
      "Especialista em pré e pós-operatório",
      "Praticante de atividades físicas e apaixonada por natação",
      "Foco em recuperação segura, acolhedora e funcional",
    ]
  },
  {
    name: "Dra. Cris Silveira",
    role: "Nutrologia",
    specialty: "Especialista em Emagrecimento, Performance e Reposição Hormonal. Ex-atleta de Fisiculturismo, competiu no Mr Olympia.",
    instagram: "https://www.instagram.com/dracrissilveira",
    image: draCrisImg,
    bio: [
      "11 anos de formação em Medicina",
      "Ex-atleta de fisiculturismo, competiu no Mr Olympia",
      "Academia como terapia e estilo de vida",
      "Leonina com muito Shine e Glow, sempre otimista",
    ]
  },
  {
    name: "Dr. Luis Pascoal",
    role: "Dermatologista",
    specialty: "Especialista em Dermatologia pela AMB e SBD. Professor de Pós-Graduação e Convidado em Congressos Nacionais e Internacionais.",
    instagram: "https://www.instagram.com/drluispascoal",
    image: drLuisImg,
    bio: [
      "Graduado em Medicina em 2006 pela Faculdade de Teresópolis",
      "Especialista pela AMB e Sociedade Brasileira de Dermatologia",
      "Professor no Instituto BWS e Instituto Evolution",
      "Membro da Sociedade Brasileira de Dermatologia",
    ]
  },
  {
    name: "Dra. Juliana Rodante",
    role: "Dermatologia",
    specialty: "Especialista em Cuidados da Pele e Cabelos, com Especialização em Cosmiatria (Medicina Estética).",
    instagram: "https://www.instagram.com/dra.jurodante",
    image: draJulianaImg,
    bio: [
      "Médica pela UFMG",
      "Pós-graduada (3 anos) em Dermatologia pela Faculdade BWS",
      "Fellow em Cosmiatria pelo Instituto Boggio",
      "Medicina que cuida da beleza com saúde e naturalidade",
    ]
  },
  {
    name: "Dr. Gustavo & Dr. Rafael Rojo",
    role: "Instituto Odontológico GR",
    specialty: "Especialistas em Transformar Vidas através do Sorriso com Lentes de Contato Dental de Porcelana Ultra Finas. Técnica Minimamente Invasiva sem Desgaste.",
    instagram: "https://www.instagram.com/drgustavorojo",
    image: drGustavoImg,
    bio: [
      "Irmãos especialistas em Odontologia Estética",
      "Dr. Rafael: 7 anos de experiência em Milão, Itália",
      "Técnica minimamente invasiva para lentes sem desgaste",
      "Transformação do sorriso em apenas 2 sessões - Lente com Cara de Dente",
    ]
  },
  {
    name: "Dra. Thalita",
    role: "Biomédica Esteta",
    specialty: "Especialista em Harmonização Facial (Perfiloplastia), Laser Fotona, Laser de CO₂, Bioestimulador de Colágeno, Ultrassom Micro e Macro Focado e Protocolos de Rejuvenescimento com Peeling Químico.",
    instagram: "#",
    image: draThalitaImg,
    bio: [
      "Biomédica com Pós-graduação em Biomedicina Estética Avançada",
      "Formada também em Administração e Gestão da Qualidade",
      "Mais de 8 anos de experiência em saúde, estética e bem-estar",
      "Resultados naturais, seguros e que elevam a autoconfiança",
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
                className="overflow-hidden premium-card bg-card border-luxury-gold/20 hover:border-luxury-gold transition-all duration-500 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                      className="p-2 rounded-full bg-gradient-to-br from-luxury-gold via-luxury-gold-light to-luxury-gold hover:shadow-[0_0_20px_hsl(38_70%_55%/0.4)] transition-all duration-300 hover:scale-110"
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
