const ClinicShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="order-2 md:order-1 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-luxury-gold to-luxury-gold-light rounded-3xl opacity-20 blur-2xl"></div>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Ambiente Premium para Você
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa clínica foi projetada para oferecer o máximo conforto e segurança. 
                Com estrutura hospitalar premium e equipamentos de última geração, garantimos 
                excelência em cada etapa do seu tratamento.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                    <span className="text-luxury-gold text-xl">✓</span>
                  </div>
                  <span className="text-foreground font-medium">Ambiente climatizado e confortável</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                    <span className="text-luxury-gold text-xl">✓</span>
                  </div>
                  <span className="text-foreground font-medium">Tecnologia de ponta</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                    <span className="text-luxury-gold text-xl">✓</span>
                  </div>
                  <span className="text-foreground font-medium">Equipe altamente qualificada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicShowcase;
