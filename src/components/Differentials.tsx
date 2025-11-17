import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const differentials = [
  "Consultas ilimitadas pré e pós",
  "Cirurgiões reconhecidos pela SBCP",
  "Estrutura hospitalar premium",
  "Planejamento corporal personalizado",
];

const Differentials = () => {
  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-primary mb-16">
            Por que escolher a Clínica Unyca?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <Card 
                key={index}
                className="premium-card p-6 bg-card border-luxury-gold/20 hover:border-luxury-gold transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-luxury-gold via-luxury-gold-light to-luxury-gold flex items-center justify-center shadow-lg group-hover:shadow-[0_0_25px_hsl(42_100%_65%/0.5)] transition-all duration-300">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground pt-1.5">
                    {item}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
