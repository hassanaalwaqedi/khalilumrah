import { Award, Users, Clock } from 'lucide-react';

export default function About() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">من نحن</h1>
                    <p className="text-xl text-emerald-100">تعرف على مؤسسة الواقدي للحج والعمرة</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">خبرة واسعة في خدمة ضيوف الرحمن</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            تأسست مؤسسة الواقدي للحج والعمرة برؤية واضحة تهدف إلى تقديم أرقى الخدمات للحجاج والمعتمرين.
                            بقيادة المدير العام الأستاذ <span className="font-bold text-gray-900">خليل الواقدي</span>،
                            تمكنا ولله الحمد من خدمة آلاف الحجاج على مدار أكثر من 7 سنوات.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            نقع في الجمهورية اليمنية، محافظة ريمة، مديرية بني واقد، منطقة الزنام، ونفخر بكوننا إحدى المؤسسات الرائدة في مجال السياحة الدينية.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <Clock className="w-8 h-8 text-emerald-600" />
                                <div>
                                    <h4 className="font-bold text-gray-900">7+ سنوات</h4>
                                    <p className="text-sm text-gray-500">من الخبرة</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="w-8 h-8 text-emerald-600" />
                                <div>
                                    <h4 className="font-bold text-gray-900">آلاف</h4>
                                    <p className="text-sm text-gray-500">العملاء السعداء</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                        {/* Placeholder for About Image, using a colored block for now or text */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 flex items-center justify-center">
                            <span className="text-emerald-800 font-bold text-2xl">الواقدي للحج والعمرة</span>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">قيمنا</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'الأمانة والمصداقية', desc: 'نتعامل بشفافية تامة في جميع تعاملاتنا المالية والخدمية.' },
                            { title: 'الجودة والتميز', desc: 'نسعى دائماً لتقديم أفضل مستوى من الخدمات.' },
                            { title: 'الاهتمام بالعميل', desc: 'راحتكم ورضاكم هو هدفنا الأول والأخير.' },
                        ].map((value, idx) => (
                            <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-emerald-600">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
