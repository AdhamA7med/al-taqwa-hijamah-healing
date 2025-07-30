import { Button } from "@/components/ui/button";
import { Heart, Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="gradient-healing shadow-soft">
      {/* Top Bar */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 medical-icon" />
                <span>متاح 24/7 للحجز</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 medical-icon" />
                <span>المنيب - القاهرة</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary medical-icon" />
              <span className="font-semibold text-primary">01154280889</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-healing">
              <Heart className="w-6 h-6 text-white medical-icon" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-amiri text-primary">التقوى للحجامة</h1>
              <p className="text-sm text-muted-foreground">خدمة منزلية متخصصة</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">الرئيسية</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">عن الحجامة</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-smooth font-medium">الفوائد</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth font-medium">آراء العملاء</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">التواصل</a>
          </nav>

          <Button className="gradient-primary text-white font-semibold px-6 shadow-healing transition-smooth hover:scale-105">
            احجز الآن
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;