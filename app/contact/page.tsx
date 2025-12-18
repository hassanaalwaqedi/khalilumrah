import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
                    <p className="text-xl text-emerald-100">نحن هنا لخدمتكم والإجابة على استفساراتكم</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">معلومات الاتصال</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">العنوان</h3>
                                    <p className="text-gray-600">اليمن – محافظة ريمة – بني واقد – الزنام</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">الهاتف</h3>
                                    <p className="text-gray-600" dir="ltr">+967 777 777 777</p>
                                    <p className="text-gray-600" dir="ltr">+967 711 111 111</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                                    <p className="text-gray-600">info@alwaqidi.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 bg-gray-200 h-[300px] rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15469.761073801267!2d43.6826666!3d14.3726666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDIyJzIxLjYiTiA0M8KwNDAnNTcuNiJF!5e0!3m2!1sen!2s!4v1635789000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="absolute inset-0"
                            ></iframe>
                            {/* Note: Coordinates are approximate for Raymah/Bani Waqid, using generic iframe for visual */}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">أرسل لنا رسالة</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="الاسم" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                                <input type="tel" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="05xxxxxxxx" />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">نوع الخدمة</label>
                                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all">
                                    <option value="">اختر الخدمة...</option>
                                    <option value="hajj">حج</option>
                                    <option value="umrah">عمرة</option>
                                    <option value="visa">تأشيرة</option>
                                    <option value="other">أخرى</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="اكتب رسالتك هنا..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-lg font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                                <span>إرسال الرسالة</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
