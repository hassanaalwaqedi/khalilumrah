import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold mb-4 text-emerald-500">الواقدي للحج والعمرة</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            نقدم خدمات متميزة لضيوف الرحمن. خبرة أكثر من 7 سنوات في خدمة الحجاج والمعتمرين.
                            راحتكم هي أولويتنا.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">من نحن</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">خدماتنا</Link></li>
                            <li><Link href="/packages" className="text-gray-400 hover:text-emerald-400 transition-colors">الباقات</Link></li>
                            <li><Link href="/gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">معرض الصور</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">الأسئلة الشائعة</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
                        <ul className="space-y-2">
                            <li><Link href="/hajj" className="text-gray-400 hover:text-emerald-400 transition-colors">برامج الحج</Link></li>
                            <li><Link href="/umrah" className="text-gray-400 hover:text-emerald-400 transition-colors">برامج العمرة</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">تأشيرات الزيارة</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">حجز تذاكر طيران</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">اليمن – محافظة ريمة – بني واقد – الزنام</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-gray-400 text-sm" dir="ltr">+967 777 777 777</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">info@alwaqidi.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} يوسف الواقدي للحج والعمرة. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
