import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Procedures from "@/components/Procedures";
import ClinicShowcase from "@/components/ClinicShowcase";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Differentials />
      <Procedures />
      <ClinicShowcase />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
