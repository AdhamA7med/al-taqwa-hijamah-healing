import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActions = () => {
  const phoneNumber = "01154280889";
  const whatsappNumber = "01154280889";

  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <Button
        asChild
        className="floating-action w-14 h-14 bg-green-500 hover:bg-green-600 text-white animate-float shadow-healing transition-smooth"
        style={{ animationDelay: "0s" }}
      >
        <a
          href={`https://wa.me/2${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر الواتساب"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>

      {/* Phone Button */}
      <Button
        asChild
        className="floating-action w-14 h-14 gradient-primary text-white animate-float shadow-healing transition-smooth"
        style={{ animationDelay: "0.5s" }}
      >
        <a
          href={`tel:+2${phoneNumber}`}
          aria-label="اتصل بنا"
        >
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingActions;