"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setCategoryOpen(false);
      }
    }
    if (categoryOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [categoryOpen]);

  return (
    <header className="bg-white shadow-sm">
      {/* Topbar */}
      <div className="border-b border-gray-200 text-sm text-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between">
          {/* Topbar Links - Desktop Only */}
          <ul className="hidden md:flex space-x-4">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/product">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="#">FAQ</Link></li>
          </ul>
          {/* Topbar Contact - Desktop Only */}
          <ul className="hidden md:flex space-x-6">
            <li className="flex items-center">
              <i className="fa fa-phone mr-2 text-blue-600" /> +880 1234 56789
            </li>
            <li className="flex items-center">
              <i className="fa fa-envelope mr-2 text-blue-600" />
              <a href="mailto:support@yourmail.com">support@yourmail.com</a>
            </li>
          </ul>
          {/* Topbar Hamburger - Mobile Only */}
          <button
            className="md:hidden ml-auto p-2 rounded focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Header Inner */}
      <div className="max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between flex-wrap">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/waves.jpg"
              alt="Logo"
              width={120}
              height={35}
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {/* Category Dropdown */}
            <div className="relative" ref={categoryRef}>
              <button
                type="button"
                className="hover:text-blue-600 flex items-center focus:outline-none"
                onClick={() => setCategoryOpen(!categoryOpen)}
              >
                Category <i className="ml-1 icofont-rounded-down" />
              </button>
              {categoryOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow rounded py-2 w-56 z-10">
                  <li>
                    <span className="block px-4 py-2 font-semibold text-gray-700">Electronic Application</span>
                    <ul className="pl-4">
                      <li><Link href="/product"><span className="block px-4 py-2 hover:bg-gray-100">Refrigerators</span></Link></li>
                      <li><Link href="/product"><span className="block px-4 py-2 hover:bg-gray-100">Ovens</span></Link></li>
                      <li><Link href="/product"><span className="block px-4 py-2 hover:bg-gray-100">Irons</span></Link></li>
                      <li><Link href="/product"><span className="block px-4 py-2 hover:bg-gray-100">Other Home Accessories</span></Link></li>
                    </ul>
                  </li>
                  <li><Link href="/product"><span className="block px-4 py-2 hover:bg-gray-100">Mattress</span></Link></li>
                  <li><Link href="/product"><span className="block px-4 py-2 hover:bg-gray-100">Drones</span></Link></li>
                  <li><Link href="/product"><span className="block px-4 py-2 hover:bg-gray-100">Washing Machine</span></Link></li>
                  <li><Link href="/product"><span className="block px-4 py-2 hover:bg-gray-100">Television</span></Link></li>
                </ul>
              )}
            </div>
            <Link href="/product" className="hover:text-blue-600">Products</Link>
            <Link href="/about" className="hover:text-blue-600">About Us</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
          </nav>

          {/* CTA */}
          <div className="mt-4 md:mt-0">
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 text-sm font-medium transition"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-4 py-4 space-y-2 text-gray-800 font-medium">
          {/* Topbar Links - Mobile */}
          <ul className="space-y-1 mb-2">
            <li><Link href="/about" className="block py-2 hover:text-blue-600">About</Link></li>
            <li><Link href="/product" className="block py-2 hover:text-blue-600">Products</Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-blue-600">Contact</Link></li>
            <li><Link href="#" className="block py-2 hover:text-blue-600">FAQ</Link></li>
            <li className="flex items-center py-2">
              <i className="fa fa-phone mr-2 text-blue-600" /> +880 1234 56789
            </li>
            <li className="flex items-center py-2">
              <i className="fa fa-envelope mr-2 text-blue-600" />
              <a href="mailto:support@yourmail.com">support@yourmail.com</a>
            </li>
          </ul>
          <div className="block">
            <button
              className="font-semibold block py-2 w-full text-left"
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
            >
              Category {mobileCategoryOpen ? '▲' : '▼'}
            </button>
            {mobileCategoryOpen && (
              <ul className="pl-4">
                <li><Link href="/product"><span className="block py-1 hover:text-blue-600">Refrigerators</span></Link></li>
                <li><Link href="/product"><span className="block py-1 hover:text-blue-600">Ovens</span></Link></li>
                <li><Link href="/product"><span className="block py-1 hover:text-blue-600">Irons</span></Link></li>
                <li><Link href="/product"><span className="block py-1 hover:text-blue-600">Other Home Accessories</span></Link></li>
                <li><Link href="/product"><span className="block py-1 hover:text-blue-600">Mattress</span></Link></li>
                <li><Link href="/product"><span className="block py-1 hover:text-blue-600">Drones</span></Link></li>
                <li><Link href="/product"><span className="block py-1 hover:text-blue-600">Washing Machine</span></Link></li>
                <li><Link href="/product"><span className="block py-1 hover:text-blue-600">Television</span></Link></li>
              </ul>
            )}
          </div>
          <Link href="/product" className="block py-2 hover:text-blue-600">Products</Link>
          <Link href="/about" className="block py-2 hover:text-blue-600">About Us</Link>
          <Link href="/contact" className="block py-2 hover:text-blue-600">Contact Us</Link>
          <Link href="/products" className="block py-2 bg-blue-600 text-white rounded text-center mt-2">Order Now</Link>
        </nav>
      )}
    </header>
  );
}
