import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative bg-emerald-900 text-white overflow-hidden">
            {/* Background Pattern/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 opacity-90 z-0"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] z-0"></div> {/* Optional pattern */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start justify-center min-h-[80vh] md:min-h-[600px]">

                <div className="max-w-3xl">
                    <span className="inline-block bg-emerald-700/50 text-emerald-100 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-600/50 backdrop-blur-sm">
                        شريكك الموثوق في رحلة العمر
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        خليل الواقدي للحج والعمرة
                        <br />
                        <span className="text-emerald-300">خدمة متميزة لضيوف الرحمن</span>
                    </h1>

                    <p className="text-lg md:text-xl text-emerald-50 mb-8 leading-relaxed max-w-2xl">
                        نرافقكم في أطهر بقاع الأرض بخدمات راقية وعناية فائقة. حج مبرور، وسعي مشكور، وذنب مغفور بإذن الله.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-white text-emerald-900 rounded-lg font-bold hover:bg-emerald-50 transition-colors shadow-lg text-center">
                            احجز رحلتك الآن
                        </Link>
                        <Link href="/services" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors text-center">
                            تعرف على خدماتنا
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
