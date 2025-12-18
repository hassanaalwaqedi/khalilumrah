import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { Gem, Utensils } from 'lucide-react';

export default function Services() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">خدماتنا</h1>
                    <p className="text-xl text-emerald-100">حلول متكاملة لرحلة دينية ميسرة</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} Icon={service.icon} />
                    ))}
                    {/* Adding more dummy services to fill the page */}
                    <ServiceCard title="خدمات VIP" description="استقبال وتوديع خاص في المطارات مع سيارات فارهة." Icon={Gem} />
                    <ServiceCard title="الإعاشة" description="تقديم وجبات طعام متنوعة وصحية طوال فترة الرحلة." Icon={Utensils} />
                </div>
            </div>
        </div>
    );
}
