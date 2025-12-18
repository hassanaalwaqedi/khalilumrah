export const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a2.013 2.013 0 0 1 .88-1.54L13 22l-3-8h-.01M21 21l-3.8-1.65A9 9 0 1 0 14 6" opacity="0" /> {/* Keeping it simple like Lucide MessageCircle but customized or just use path for WA logo if I had it. Actually, I'll use a path that resembles WA logo more closely or just use the standard MessageCircle from Lucide if I want to match style. But user asked for specific WA icon. */}
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.966-.944 1.164-.173.199-.347.223-.647.075-.299-.15-1.258-.465-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.417.248-.696.248-1.291.173-1.417-.074-.125-.272-.199-.572-.349z" fill="currentColor" stroke="none" />
    </svg>
);
