import { Card, CardContent } from "@/components/ui/card";
import teamAngelaImg from "@/assets/team-angela.jpg";
import teamHelenImg from "@/assets/team-helen.jpg";
import teamGabrielImg from "@/assets/team-gabriel.jpg";
import teamVivianeImg from "@/assets/team-viviane.jpg";
import teamBraulioImg from "@/assets/team-braulio.jpg";

const teamMembers = [
  {
    name: "Viviane",
    role: "Enfermeira e Instrumentadora Responsável",
    location: "",
    image: teamVivianeImg,
    imagePosition: "center 20%",
  },
  {
    name: "Mayara",
    role: "Recepção",
    location: "Alphaville",
    image: teamMayaraImg,
    imagePosition: "center 0%",
  },
  {
    name: "Laura",
    role: "Recepção",
    location: "Osasco",
    image: teamLauraImg,
    imagePosition: "center 20%",
  },
  {
    name: "Angela",
    role: "Agente de Higienização",
    location: "Alphaville",
    image: teamAngelaImg,
    imagePosition: "center 20%",
  },
  {
    name: "Helen",
    role: "Gerente Administrativo e Financeiro",
    location: "",
    image: teamHelenImg,
    imagePosition: "center 20%",
  },
  {
    name: "Mari",
    role: "Concierge",
    location: "Osasco e Alphaville",
    image: teamMariImg,
    imagePosition: "center 20%",
  },
  {
    name: "Gabriel Tosetti",
    role: "Jurídico",
    location: "Tosetti e Zardi Advogados Associados",
    image: teamGabrielImg,
    imagePosition: "center 20%",
  },
  {
    name: "Braulio",
    role: "Film Maker",
    location: "",
    image: teamBraulioImg,
    imagePosition: "center 20%",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Quem Faz a Clínica Acontecer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Por trás de cada sorriso e de cada resultado, existe uma equipe dedicada 
              que trabalha com paixão para oferecer a melhor experiência
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card border-luxury-gold/20 hover:border-luxury-gold transition-all duration-500 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    style={{ objectPosition: member.imagePosition }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardContent className="p-4 text-center">
                  <h3 className="text-lg font-serif font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-luxury-gold">
                    {member.role}
                  </p>
                  {member.location && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {member.location}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
