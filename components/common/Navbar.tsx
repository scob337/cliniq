"use client"; // ضروري عشان هنستخدم State للموبايل منيو

import Link from "next/link";
import { useState } from "react";
import { Menu, X, PlusCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* 1. اللوجو */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Cliniq
            </Link>
          </div>

          {/* 2. لينكات الكمبيوتر (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">الرئيسية</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">خدماتنا</Link>
            <Link href="/doctors" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">الأطباء</Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">اتصل بنا</Link>
            
            {/* زرار الحجز المميز */}
            <Link 
              href="/booking" 
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
            >
              <PlusCircle size={18} />
              احجز موعدك
            </Link>
          </div>

          {/* 3. زرار الموبايل */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. منيو الموبايل (Mobile Menu) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-300">
          <Link href="/" className="block px-3 py-2 text-slate-700 font-medium">الرئيسية</Link>
          <Link href="/services" className="block px-3 py-2 text-slate-700 font-medium">خدماتنا</Link>
          <Link href="/doctors" className="block px-3 py-2 text-slate-700 font-medium">الأطباء</Link>
          <Link href="/booking" className="block px-3 py-2 bg-blue-50 text-blue-600 rounded-lg font-bold">احجز موعدك الآن</Link>
        </div>
      )}
    </nav>
  );
}