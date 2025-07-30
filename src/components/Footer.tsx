import { Heart, Phone, MessageCircle, MapPin, Mail, Shield, Award, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-healing">
                <Heart className="w-6 h-6 text-white medical-icon" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-amiri text-primary">التقوى للحجامة</h3>
                <p className="text-sm text-background/70">خدمة منزلية متخصصة</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              نقدم خدمة الحجامة الطبية المتخصصة في منزلك وفقاً لأعلى معايير النظافة والسلامة، 
              ملتزمين بالسنة النبوية والأصول الطبية الصحيحة.
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:+201154280889"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-smooth"
              >
                <Phone className="w-5 h-5 text-primary medical-icon" />
              </a>
              <a 
                href="https://wa.me/201154280889"
                target="_blank"
                className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-smooth"
              >
                <MessageCircle className="w-5 h-5 text-green-400 medical-icon" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold font-amiri text-primary mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-smooth">الحجامة الجافة</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-smooth">الحجامة الرطبة</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-smooth">حجامة الوجه</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-smooth">حجامة الظهر</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-smooth">استشارة طبية مجانية</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-smooth">متابعة ما بعد الجلسة</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold font-amiri text-primary mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0 medical-icon" />
                <div>
                  <p className="font-semibold text-background">للحجز والاستفسار</p>
                  <p className="text-background/80">01154280889</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0 medical-icon" />
                <div>
                  <p className="font-semibold text-background">العنوان</p>
                  <p className="text-background/80">١ شارع سماح - متفرع من شارع المدرسة - المنيب</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0 medical-icon" />
                <div>
                  <p className="font-semibold text-background">واتساب</p>
                  <p className="text-background/80">متاح 24 ساعة للرد السريع</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div>
            <h4 className="text-xl font-bold font-amiri text-primary mb-6">إحصائياتنا</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary medical-icon" />
                <div>
                  <p className="font-bold text-2xl text-background">500+</p>
                  <p className="text-background/80 text-sm">عميل راضٍ</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary medical-icon" />
                <div>
                  <p className="font-bold text-2xl text-background">99%</p>
                  <p className="text-background/80 text-sm">نسبة الأمان</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary medical-icon" />
                <div>
                  <p className="font-bold text-2xl text-background">5</p>
                  <p className="text-background/80 text-sm">سنوات خبرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © 2024 التقوى للحجامة. جميع الحقوق محفوظة.
            </div>
            
            <div className="text-background/80 text-sm">
              تم تطوير الموقع بواسطة{" "}
              <a 
                href="https://wa.me/201153903786" 
                target="_blank"
                className="text-primary hover:text-primary-light transition-smooth font-semibold"
              >
                ادهم احمد
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-background/80">
              <span>🏥 خدمة طبية معتمدة</span>
              <span>✅ ISO معتمد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-primary/10 border-t border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs text-background/70 leading-relaxed">
            <strong className="text-primary">تنبيه طبي:</strong> الحجامة علاج طبيعي مكمل وليس بديلاً عن العلاج الطبي التقليدي. 
            يُنصح باستشارة الطبيب المختص قبل إجراء جلسات الحجامة، خاصة لمن يعانون من حالات طبية مزمنة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;