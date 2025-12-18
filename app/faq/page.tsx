import { faqs } from '@/data/faq';

export default function FAQPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">الأسئلة الشائعة</h1>
                    <p className="text-xl text-emerald-100">إجابات على استفساراتكم المتكررة</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600">لم تجد إجابة لسؤالك؟</p>
                    <a href="/contact" className="text-emerald-600 font-bold hover:underline mt-2 inline-block">تواصل معنا مباشرة</a>
                </div>
            </div>
        </div>
    );
}
