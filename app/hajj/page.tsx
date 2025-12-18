import Link from 'next/link';
import { Shield, Clock, Heart } from 'lucide-react';

export default function HajjPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-emerald-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl font-bold mb-4">خدمات الحج</h1>
                    <p className="text-xl text-emerald-100">رحلة العمر.. نيسرها لك</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="prose max-w-none text-right mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">برامج حج متميزة لعام 1447هـ</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        نحرص في الواقدي للحج والعمرة على تقديم برامج حج متكاملة تشمل كافة الخدمات التي يحتاجها الحاج، بدءاً من التسجيل واستخراج التصاريح، مروراً بالتنقل والسكن في المشاعر المقدسة، وحتى العودة إلى أرض الوطن سالماً غانماً.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <Shield className="w-12 h-12 text-emerald-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">موثوقية وأمان</h3>
                        <p className="text-gray-600">تصاريح رسمية وعقود موثقة لضمان حقوق الحاج.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <Clock className="w-12 h-12 text-emerald-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">دقة في المواعيد</h3>
                        <p className="text-gray-600">التزام تام بجدول الرحلة ومواعيد التفويج.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <Heart className="w-12 h-12 text-emerald-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">رعاية شاملة</h3>
                        <p className="text-gray-600">فريق إداري وطبي وديني يرافق الحملة على مدار الساعة.</p>
                    </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">بادر بالتسجيل لموسم الحج القادم</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">المقاعد محدودة، احجز مقعدك الآن واستفد من عروض التسجيل المبكر.</p>
                    <Link href="/contact" className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition-colors">
                        تواصل معنا للتسجيل
                    </Link>
                </div>
            </div>
        </div>
    );
}
