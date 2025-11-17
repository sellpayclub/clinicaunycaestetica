import { Card } from "@/components/ui/card";

const procedures = [
  "Abdominoplastia",
  "Blefaroplastia",
  "Correção de Ginecomastia",
  "FaceLift",
  "Lipo HD",
  "Mamoplastia Redutora",
  "Mastopexia",
  "Mommy Makeover",
  "Ninfoplastia",
  "Otoplastia",
  "Prótese de Recuperação Rápida (R24R)",
  "Prótese De Silicone",
  "Pós Bariátrica",
];

const Procedures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Nossos Procedimentos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((procedure, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift bg-card border-border hover:border-luxury-gold/40 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light group-hover:scale-150 transition-transform duration-300"></div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {procedure}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
