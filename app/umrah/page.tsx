import Link from 'next/link';
import { Calendar, MapPin, Coffee } from 'lucide-react';

export default function UmrahPage() {
    return (
        <div className="bg-white">
            <div className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">خدمات العمرة</h1>
                    <p className="text-xl text-emerald-100">زيارة بيت الله الحرام.. حلم نحققه لك</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">عمرة ميسرة طوال العام</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            نقدم رحلات عمرة أسبوعية من جميع المحافظات اليمنية، بباصات حديثة ومكيفة، وسكن راقي قريب من الحرمين الشريفين.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-700">
                                <Calendar className="w-6 h-6 text-emerald-500" />
                                <span>رحلات أسبوعية مستمرة</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <MapPin className="w-6 h-6 text-emerald-500" />
                                <span>فنادق المركزية (قريبة جداً)</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <Coffee className="w-6 h-6 text-emerald-500" />
                                <span>خدمات فندقية راقية</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-200 h-[300px] rounded-2xl flex items-center justify-center text-gray-500">
                        {/* Image Placeholder */}
                        <span>صورة المعالم أو الفنادق</span>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">برامج العمرة المتاحة</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors cursor-pointer group">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600">العمرة الاقتصادية</h3>
                            <p className="text-gray-600 mb-4">مناسبة للجميع، سكن اقتصادي نظيف وخدمات أساسية.</p>
                            <Link href="/packages" className="text-emerald-600 font-medium hover:underline">التفاصيل والأسعار &larr;</Link>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors cursor-pointer group">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600">عمرة الـ VIP</h3>
                            <p className="text-gray-600 mb-4">فنادق 5 نجوم مطلة على الحرم مع خدمات راقية.</p>
                            <Link href="/packages" className="text-emerald-600 font-medium hover:underline">التفاصيل والأسعار &larr;</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
