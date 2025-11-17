import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://linktr.ee/unycaclinicaestetica', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:scale-110 transition-all duration-300 p-0"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
