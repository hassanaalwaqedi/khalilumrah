import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services } from '@/data/services';
import { packages } from '@/data/packages';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">خدماتنا المتميزة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نقدم مجموعة متكاملة من الخدمات لتسهيل رحلتكم الإيمانية، بدءاً من التأشيرة وحتى العودة.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} Icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">أفضل الباقات</h2>
              <p className="text-gray-600">اختر الباقة التي تناسب احتياجاتك</p>
            </div>
            <Link href="/packages" className="hidden md:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
              عرض كل الباقات <ArrowLeft size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.slice(0, 3).map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/packages" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
              عرض كل الباقات <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">ماذا يقول عملاؤنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard name="أحمد محمد" role="حاج" content="خدمة ممتازة وفريق عمل متعاون جداً. كانت رحلة الحج معهم ميسرة ومنظمة." />
            <TestimonialCard name="خالد علي" role="معتمر" content="الفنادق كانت قريبة جداً من الحرم، والمواصلات مريحة. شكراً للواقدي." />
            <TestimonialCard name="سعيد عبدالله" role="حاج" content="أشكر الأخ خليل الواقدي على اهتمامه الشخصي بكل التفاصيل." />
          </div>
        </div>
      </section>
    </>
  );
}
