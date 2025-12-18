export default function GalleryPage() {
    const images = [1, 2, 3, 4, 5, 6]; // Placeholders

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">معرض الصور</h1>
                    <p className="text-xl text-emerald-100">جولة مصورة في رحاب المشاعر المقدسة</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img) => (
                        <div key={img} className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group">
                            {/* Placeholder colors/gradients */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-${img}00 to-teal-${img}00 opacity-50`}></div>
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                                صورة {img}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
