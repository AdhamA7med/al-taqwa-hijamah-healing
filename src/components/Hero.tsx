import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Home, Clock } from "lucide-react";
import hijamaHero from "@/assets/hijama-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="py-20 gradient-healing">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 medical-icon" />
              <span className="font-semibold">خدمة طبية متخصصة</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold font-amiri text-foreground mb-6 leading-tight">
              <span className="text-primary">الحجامة</span> الطبية
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">في منزلك</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              احصل على أفضل خدمة حجامة طبية متخصصة في راحة منزلك. 
              فريق من المتخصصين المعتمدين يقدم لك العلاج الطبيعي الأمثل بأعلى معايير النظافة والسلامة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="gradient-primary text-white font-bold px-8 py-4 text-lg shadow-healing transition-smooth hover:scale-105 animate-pulse-soft"
              >
                احجز جلستك الآن
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg transition-smooth"
              >
                تعرف على الخدمة
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-4 text-center shadow-soft transition-smooth hover:shadow-healing">
                <Home className="w-8 h-8 text-primary mx-auto mb-2 medical-icon" />
                <p className="text-sm font-semibold">خدمة منزلية</p>
              </Card>
              <Card className="p-4 text-center shadow-soft transition-smooth hover:shadow-healing">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2 medical-icon" />
                <p className="text-sm font-semibold">معايير السلامة</p>
              </Card>
              <Card className="p-4 text-center shadow-soft transition-smooth hover:shadow-healing">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2 medical-icon" />
                <p className="text-sm font-semibold">متخصصون معتمدون</p>
              </Card>
              <Card className="p-4 text-center shadow-soft transition-smooth hover:shadow-healing">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2 medical-icon" />
                <p className="text-sm font-semibold">متاح 24/7</p>
              </Card>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] rounded-3xl shadow-healing relative overflow-hidden">
              <img 
                src={hijamaHero} 
                alt="الحجامة الطبية - التقوى للحجامة" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Heart className="w-24 h-24 mx-auto mb-4 animate-float medical-icon drop-shadow-lg" />
                  <h3 className="text-2xl font-bold font-amiri mb-2 drop-shadow-lg">الشفاء بالطب الطبيعي</h3>
                  <p className="text-lg opacity-90 drop-shadow-lg">وإذا مرضت فهو يشفين</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-soft backdrop-blur-sm"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse-soft backdrop-blur-sm" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;