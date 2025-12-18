import PackageCard from '@/components/PackageCard';
import { packages } from '@/data/packages';

export default function PackagesPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">باقاتنا وعروضنا</h1>
                    <p className="text-xl text-emerald-100">اختر الباقة الأنسب لاحتياجاتك وميزانيتك</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <PackageCard key={index} {...pkg} />
                    ))}
                </div>
            </div>
        </div>
    );
}
