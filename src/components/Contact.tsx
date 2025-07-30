import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Home,
  Calendar,
  Shield,
  Heart
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "اتصل بنا",
      description: "متاح 24 ساعة للحجز والاستفسار",
      value: "01154280889",
      action: "tel:+201154280889",
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      description: "تواصل سريع ومباشر",
      value: "01154280889",
      action: "https://wa.me/201154280889",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "العنوان",
      description: "منطقة الخدمة الرئيسية",
      value: "١ شارع سماح - متفرع من شارع المدرسة - المنيب",
      action: "#",
      color: "bg-red-500"
    }
  ];

  const serviceAreas = [
    "المنيب", "الهرم", "فيصل", "العجوزة", "الدقي", "المهندسين",
    "الزمالك", "جاردن سيتي", "المعادي", "مدينة نصر", "مصر الجديدة",
    "النزهة", "مدينة السلام", "العباسية", "شبرا", "روض الفرج"
  ];

  const workingHours = [
    { day: "السبت - الخميس", hours: "9:00 ص - 11:00 م" },
    { day: "الجمعة", hours: "2:00 م - 11:00 م" },
    { day: "حالات الطوارئ", hours: "24 ساعة" }
  ];

  return (
    <section id="contact" className="py-20 gradient-healing">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Phone className="w-5 h-5 medical-icon" />
            <span className="font-semibold">تواصل معنا</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-amiri text-foreground mb-6">
            <span className="text-primary">احجز جلستك</span> الآن
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            إحجز جلستك لحد باب بيتك دلوقتي - خدمة منزلية متخصصة في جميع أنحاء القاهرة والجيزة
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="p-6 text-center shadow-soft hover:shadow-healing transition-smooth hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-healing group-hover:scale-110 transition-smooth`}>
                <method.icon className="w-8 h-8 text-white medical-icon" />
              </div>
              <h3 className="text-xl font-bold font-amiri text-foreground mb-2">{method.title}</h3>
              <p className="text-muted-foreground mb-4">{method.description}</p>
              <div className="text-lg font-bold text-primary mb-4">{method.value}</div>
              <Button 
                asChild
                className="w-full gradient-primary text-white shadow-healing transition-smooth hover:scale-105"
              >
                <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined}>
                  {method.title === "اتصل بنا" ? "اتصل الآن" : method.title === "واتساب" ? "راسلنا" : "عرض الموقع"}
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Service Info Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Working Hours */}
          <Card className="p-6 shadow-soft hover:shadow-healing transition-smooth">
            <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mb-4 shadow-healing">
              <Clock className="w-8 h-8 text-white medical-icon" />
            </div>
            <h3 className="text-xl font-bold font-amiri text-foreground mb-4">مواعيد العمل</h3>
            <div className="space-y-3">
              {workingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="font-medium text-foreground">{schedule.day}</span>
                  <span className="text-primary font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Service Features */}
          <Card className="p-6 shadow-soft hover:shadow-healing transition-smooth">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-4 shadow-healing">
              <Shield className="w-8 h-8 text-white medical-icon" />
            </div>
            <h3 className="text-xl font-bold font-amiri text-foreground mb-4">مميزات الخدمة</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-primary medical-icon" />
                <span>خدمة منزلية 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary medical-icon" />
                <span>حجز مرن حسب وقتك</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary medical-icon" />
                <span>أدوات معقمة ومتخصصة</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary medical-icon" />
                <span>استشارة مجانية</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary medical-icon" />
                <span>متابعة ما بعد الجلسة</span>
              </div>
            </div>
          </Card>

          {/* Service Areas */}
          <Card className="p-6 shadow-soft hover:shadow-healing transition-smooth">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 shadow-healing">
              <MapPin className="w-8 h-8 text-white medical-icon" />
            </div>
            <h3 className="text-xl font-bold font-amiri text-foreground mb-4">مناطق الخدمة</h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area, index) => (
                <span 
                  key={index} 
                  className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-md text-center font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              * نصل لمناطق أخرى حسب الطلب
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center shadow-healing gradient-primary text-white">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 animate-float medical-icon" />
            
            <h3 className="text-3xl font-bold font-amiri mb-4">
              ابدأ رحلة الشفاء اليوم
            </h3>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              لا تتردد في التواصل معنا للحجز أو الاستفسار. نحن هنا لخدمتك في أي وقت
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-healing transition-smooth hover:scale-105"
              >
                <a href="tel:+201154280889">
                  <Phone className="w-5 h-5 ml-2" />
                  احجز الآن: 01154280889
                </a>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg transition-smooth"
              >
                <a href="https://wa.me/201154280889" target="_blank">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب
                </a>
              </Button>
            </div>

            <div className="mt-8 text-lg opacity-90">
              📍 ١ شارع سماح - متفرع من شارع المدرسة - المنيب
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;