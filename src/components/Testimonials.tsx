import { Card } from "@/components/ui/card";
import { Star, Quote, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "محمد أحمد",
      location: "الدقي - الجيزة",
      rating: 5,
      text: "خدمة ممتازة ومتخصصة. الحجامة ساعدتني كثيراً في التخلص من آلام الظهر المزمنة. الفريق محترف ويلتزم بمعايير النظافة العالية."
    },
    {
      name: "فاطمة علي",
      location: "المعادي - القاهرة",
      rating: 5,
      text: "أول مرة أجرب الحجامة وكانت تجربة رائعة. شعرت بتحسن كبير في مستوى الطاقة والنوم. أنصح الجميع بتجربة هذه الخدمة المميزة."
    },
    {
      name: "عبد الرحمن محمود",
      location: "مدينة نصر - القاهرة", 
      rating: 5,
      text: "خدمة منزلية راقية ومريحة. لم أعد بحاجة للذهاب للعيادات. الحجامة حسنت من ضغط الدم عندي بشكل ملحوظ. شكراً للفريق المتميز."
    },
    {
      name: "أم يوسف",
      location: "الهرم - الجيزة",
      rating: 5,
      text: "الحمد لله، الحجامة ساعدتني في علاج الصداع المزمن. الخدمة في المنزل مريحة جداً خاصة للسيدات. فريق محترم ومتخصص."
    },
    {
      name: "أحمد سعد",
      location: "المنيب - الجيزة",
      rating: 5,
      text: "تجربة ممتازة من البداية للنهاية. الحجامة حسنت من حالتي النفسية والجسدية. أسعار معقولة وخدمة عالية الجودة. بالتأكيد سأكررها."
    },
    {
      name: "مريم خالد",
      location: "الزمالك - القاهرة",
      rating: 5,
      text: "خدمة احترافية بكل المقاييس. الحجامة ساعدتني في التخلص من آلام المفاصل. الفريق يشرح كل شيء بوضوح ويطمئن المريض طوال الجلسة."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 medical-icon" />
            <span className="font-semibold">آراء العملاء</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-amiri text-foreground mb-6">
            ماذا يقول <span className="text-primary">عملاؤنا</span>؟
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            آراء حقيقية من عملائنا الكرام الذين جربوا خدمة الحجامة المنزلية وشعروا بالفرق
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center shadow-soft hover:shadow-healing transition-smooth">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">عميل سعيد</p>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-healing transition-smooth">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <p className="text-muted-foreground">نسبة الرضا</p>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-healing transition-smooth">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">خدمة متاحة</p>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-healing transition-smooth">
            <div className="text-3xl font-bold text-primary mb-2">5 سنوات</div>
            <p className="text-muted-foreground">خبرة مثبتة</p>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft hover:shadow-healing transition-smooth hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-smooth">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                  "{testimonial.text}"
                </p>
                
                {/* Customer Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center shadow-healing">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-16 p-8 text-center gradient-healing shadow-healing">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-amiri text-primary mb-4">
              انضم لعملائنا الراضين
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              احصل على نفس التجربة المميزة واشعر بالفرق من أول جلسة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-2xl font-bold text-primary">
                📞 01154280889
              </div>
              <div className="text-lg text-muted-foreground">
                إحجز جلستك لحد باب بيتك دلوقتي
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;