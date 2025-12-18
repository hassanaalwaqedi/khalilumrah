import { Plane, Hotel, Globe, FileCheck } from 'lucide-react';

export const services = [
    {
        title: 'برامج الحج المتميزة',
        description: 'نوفر باقات حج متنوعة تناسب كافة الرغبات والميزانيات مع ضمان الراحة التامة.',
        icon: Globe,
        link: '/hajj'
    },
    {
        title: 'برامج العمرة طوال العام',
        description: 'رحلات عمرة ميسرة ومريحة تشمل النقل والسكن في أفضل الفنادق القريبة من الحرم.',
        icon: Hotel,
        link: '/umrah'
    },
    {
        title: 'تأشيرات الزيارة والسياحة',
        description: 'استخراج سريع وموثوق لجميع أنواع التأشيرات للسعودية.',
        icon: FileCheck,
        link: '/services'
    },
    {
        title: 'حجوزات طيران',
        description: 'أفضل الأسعار لتذاكر الطيران على جميع الخطوط الجوية.',
        icon: Plane,
        link: '/services'
    }
];
