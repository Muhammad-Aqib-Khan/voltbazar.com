'use client';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function FreeShippingPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="relative bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-4 rounded-2xl shadow-2xl border-4 border-yellow-300 animate-pulse max-w-sm">
        {/* Ribbons */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-16 bg-red-500 rounded-l-xl shadow-md rotate-[-20deg]"></div>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-16 bg-red-500 rounded-r-xl shadow-md rotate-[20deg]"></div>

        {/* Burst Star */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-red-600 text-xs font-bold px-2 py-1 rounded-full shadow-md border border-red-500 rotate-[-10deg]">
          Limited Time!
        </div>

        {/* Content */}
        <div className="flex items-center gap-4">
          <span id="popup-title" className="text-lg font-bold">
            🎉 Free Shipping on Orders Over Rs. 50,000/-!
          </span>
          <button
            onClick={() => setShow(false)}
            className="text-white hover:text-red-200 transition"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-sm mt-1">Shop now and save big before the deal ends!</p>
      </div>
    </div>
  );
}
