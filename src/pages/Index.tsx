import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Procedures from "@/components/Procedures";
import Specialists from "@/components/Specialists";
import ClinicShowcase from "@/components/ClinicShowcase";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Differentials />
      <Procedures />
      <Specialists />
      <ClinicShowcase />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
