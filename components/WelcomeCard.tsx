"use client";

import { useEffect, useState } from 'react';

const WelcomeCard = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-4xl mx-auto">
                <div
                    className="relative bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                >
                    {/* Background subtle effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32 transition-opacity group-hover:opacity-70"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 -ml-32 -mb-32 transition-opacity group-hover:opacity-70"></div>

                    <div className="relative z-10 text-center">
                        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-emerald-600 uppercase bg-emerald-50 rounded-full border border-emerald-100">
                            خدمة ضيوف الرحمن
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                            مرحبًا بكم في موقع <span className="text-emerald-600">خليل الواقدي</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-6 font-medium">
                            نرافقكم إلى بيت الله بخبرة وثقة
                        </p>

                        <div className="w-24 h-1 bg-gradient-to-l from-emerald-500 to-teal-400 mx-auto rounded-full mb-8"></div>

                        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                            نقدم خدمات الحج والعمرة والسياحة الدينية بخبرة تتجاوز سبع سنوات، مع عناية كاملة براحة الحاج والمعتمر. نسعى دائماً لتقديم تجربة روحانية لا تُنسى بأعلى معايير الجودة والتميز.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeCard;
