import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import './globals.css';

const cairo = Cairo({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'خليل الواقدي للحج والعمرة',
  description: 'خدمات متميزة لضيوف الرحمن - حج، عمرة، ورحلات دينية',
  keywords: 'حج, عمرة, سياحة دينية, الواقدي, اليمن',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} flex flex-col min-h-screen bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
