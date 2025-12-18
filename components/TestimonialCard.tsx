interface TestimonialProps {
    name: string;
    role: string;
    content: string;
    rating?: number;
}

const TestimonialCard = ({ name, role, content, rating = 5 }: TestimonialProps) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 italic">
            <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">&quot;{content}&quot;</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                    {name[0]}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
                    <p className="text-gray-500 text-xs">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
