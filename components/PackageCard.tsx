import { Check } from 'lucide-react';
import Link from 'next/link';

interface PackageProps {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
}

const PackageCard = ({ title, price, features, isPopular = false }: PackageProps) => {
    return (
        <div className={`relative bg-white rounded-2xl shadow-sm border ${isPopular ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-gray-200'} p-8 flex flex-col h-full hover:shadow-lg transition-shadow`}>
            {isPopular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    الأكثر طلباً
                </span>
            )}

            <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-emerald-600">{price}</span>
                    <span className="text-gray-500 text-sm">/ للشخص</span>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link href="/contact" className={`block w-full py-3 px-6 rounded-lg text-center font-semibold transition-colors
        ${isPopular
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}>
                احجز الآن
            </Link>
        </div>
    );
};

export default PackageCard;
