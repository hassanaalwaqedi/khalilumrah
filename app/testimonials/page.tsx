import TestimonialCard from '@/components/TestimonialCard';

export default function TestimonialsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">آراء العملاء</h1>
                    <p className="text-xl text-emerald-100">ماذا قالوا عن تجربتهم مع الواقدي</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard name="أحمد محمد" role="حاج" content="خدمة ممتازة وفريق عمل متعاون جداً. كانت رحلة الحج معهم ميسرة ومنظمة." />
                    <TestimonialCard name="خالد علي" role="معتمر" content="الفنادق كانت قريبة جداً من الحرم، والمواصلات مريحة. شكراً للواقدي." />
                    <TestimonialCard name="سعيد عبدالله" role="حاج" content="أشكر الأخ خليل الواقدي على اهتمامه الشخصي بكل التفاصيل." />
                    <TestimonialCard name="محمد يحيى" role="معتمر" content="رحلة لا تنسى، شكراً لكم على حسن التنظيم." />
                    <TestimonialCard name="عمر سالم" role="حاج" content="الخدمات الطبية كانت متوفرة طوال الوقت، وهذا أمر يبعث على الاطمئنان." />
                    <TestimonialCard name="ياسر أحمد" role="معتمر" content="أسعار منافسة وخدمات راقية." />
                </div>
            </div>
        </div>
    );
}
