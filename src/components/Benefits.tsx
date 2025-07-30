import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Heart, 
  Zap, 
  Shield, 
  Droplets, 
  Stethoscope, 
  Moon, 
  Activity,
  RefreshCw,
  Leaf,
  Star,
  CheckCircle
} from "lucide-react";

const Benefits = () => {
  const healthBenefits = [
    {
      icon: Brain,
      title: "تحسين الذاكرة والتركيز",
      description: "تنشط الدورة الدموية للدماغ مما يحسن الوظائف الذهنية والتركيز"
    },
    {
      icon: Heart,
      title: "تقوية القلب والشرايين",
      description: "تحسن من صحة القلب وتنظم ضغط الدم وتقوي الأوعية الدموية"
    },
    {
      icon: Droplets,
      title: "تنقية الدم من السموم",
      description: "تزيل الدم الفاسد والسموم المتراكمة في الجسم بشكل طبيعي"
    },
    {
      icon: Shield,
      title: "تقوية جهاز المناعة",
      description: "تحفز إنتاج خلايا الدم البيضاء وتقوي مقاومة الجسم للأمراض"
    },
    {
      icon: Zap,
      title: "زيادة الطاقة والحيوية",
      description: "تعيد النشاط والحيوية للجسم وتقلل من الشعور بالتعب والإرهاق"
    },
    {
      icon: Moon,
      title: "تحسين جودة النوم",
      description: "تساعد على الاسترخاء والحصول على نوم عميق ومريح"
    },
    {
      icon: Activity,
      title: "تخفيف آلام المفاصل",
      description: "تقلل من آلام المفاصل والعضلات وتحسن المرونة الحركية"
    },
    {
      icon: RefreshCw,
      title: "تنشيط الدورة الدموية",
      description: "تحفز تدفق الدم في جميع أنحاء الجسم وتحسن التروية"
    },
    {
      icon: Leaf,
      title: "علاج طبيعي آمن",
      description: "طريقة علاج طبيعية بدون أدوية أو مواد كيميائية ضارة"
    }
  ];

  const conditions = [
    "الصداع والشقيقة",
    "آلام الظهر والرقبة", 
    "ارتفاع ضغط الدم",
    "مرض السكري",
    "آلام المفاصل والروماتيزم",
    "الأرق وقلة النوم",
    "ضعف المناعة",
    "التوتر والقلق",
    "مشاكل الهضم",
    "الإرهاق العام",
    "مشاكل الدورة الدموية",
    "آلام الطمث عند النساء"
  ];

  return (
    <section id="benefits" className="py-20 gradient-healing">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 medical-icon" />
            <span className="font-semibold">فوائد الحجامة</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-amiri text-foreground mb-6">
            <span className="text-primary">الفوائد الصحية</span> للحجامة
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            الحجامة لها فوائد صحية مذهلة ومثبتة علمياً، وهي علاج شامل يفيد الجسم والعقل معاً
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {healthBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft hover:shadow-healing transition-smooth hover:-translate-y-2 group bg-card/80 backdrop-blur-sm"
            >
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mb-4 shadow-healing group-hover:scale-110 transition-smooth">
                <benefit.icon className="w-8 h-8 text-white medical-icon" />
              </div>
              <h3 className="text-xl font-bold font-amiri text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Conditions Section */}
        <Card className="p-8 shadow-healing bg-card/90 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-healing">
              <Stethoscope className="w-10 h-10 text-white medical-icon" />
            </div>
            
            <h3 className="text-3xl font-bold font-amiri text-foreground mb-4">
              الحالات التي تفيد فيها <span className="text-primary">الحجامة</span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              الحجامة علاج فعال للعديد من الحالات الصحية والأمراض المزمنة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-smooth"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 medical-icon" />
                <span className="font-medium text-foreground">{condition}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg text-primary font-semibold mb-2">
              ✨ استشارة مجانية قبل الجلسة
            </p>
            <p className="text-muted-foreground">
              نقدم استشارة طبية مجانية لتحديد أفضل نوع حجامة مناسب لحالتك الصحية
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Benefits;