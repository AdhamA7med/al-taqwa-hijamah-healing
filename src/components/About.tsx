import { Card } from "@/components/ui/card";
import { Heart, Droplets, Zap, Shield, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "الطب النبوي الأصيل",
      description: "نتبع سنة النبي ﷺ في العلاج بالحجامة كما ورد في الأحاديث الشريفة"
    },
    {
      icon: Droplets,
      title: "تنقية الدم الطبيعية",
      description: "إزالة السموم والدم الفاسد من الجسم بطريقة آمنة وطبيعية"
    },
    {
      icon: Zap,
      title: "تنشيط الدورة الدموية",
      description: "تحفيز تدفق الدم وتنشيط الجهاز المناعي لمحاربة الأمراض"
    },
    {
      icon: Shield,
      title: "معايير سلامة عالية",
      description: "استخدام أدوات معقمة ومتخصصين مدربين لضمان سلامتك"
    },
    {
      icon: Users,
      title: "خبرة واسعة",
      description: "سنوات من الخبرة في تقديم خدمات الحجامة العلاجية"
    },
    {
      icon: Award,
      title: "جودة مضمونة",
      description: "التزام بأعلى معايير الجودة في تقديم الخدمة العلاجية"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 medical-icon" />
            <span className="font-semibold">عن الحجامة</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-amiri text-foreground mb-6">
            ما هي <span className="text-primary">الحجامة</span>؟
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            الحجامة هي طريقة علاج طبيعية تعود لآلاف السنين، وقد أوصى بها النبي محمد ﷺ كعلاج شافٍ. 
            تعمل على سحب الدم الفاسد والسموم من الجسم، مما يحفز الشفاء الطبيعي ويقوي جهاز المناعة.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center shadow-soft hover:shadow-healing transition-smooth hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-healing group-hover:scale-110 transition-smooth">
                <feature.icon className="w-8 h-8 text-white medical-icon" />
              </div>
              <h3 className="text-xl font-bold font-amiri text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Hadith Section */}
        <Card className="p-8 text-center gradient-healing shadow-healing">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-healing">
              <Heart className="w-10 h-10 text-white medical-icon" />
            </div>
            
            <h3 className="text-2xl font-bold font-amiri text-primary mb-6">الحجامة في السنة النبوية</h3>
            
            <blockquote className="text-xl font-amiri text-foreground mb-4 italic">
              "إن أمثل ما تداويتم به الحجامة والقسط البحري"
            </blockquote>
            
            <p className="text-muted-foreground mb-6">
              رواه البخاري ومسلم
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              أكد النبي ﷺ على فوائد الحجامة العلاجية، وجعلها من أفضل طرق التداوي. 
              نحن نلتزم بهذه السنة المباركة ونقدم خدمة الحجامة وفقاً للأصول الشرعية والطبية الصحيحة.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;