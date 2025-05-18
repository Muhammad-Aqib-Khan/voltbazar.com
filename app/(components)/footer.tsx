"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-6 pt-16">
      {/* Footer Top */}
      <div className="max-w-screen-xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm text-gray-300 mb-4">
              At VoltBazar! we’re here to assist you every step of the way! Whether you have a question about our products, need help with an order, or want expert advice on selecting the perfect electronic appliance, our team is ready to help.
            </p>
            <ul className="flex space-x-3 mt-4">
              <li><Link href="#"><i className="icofont-facebook text-xl hover:text-blue-500" /></Link></li>
              <li><Link href="#"><i className="icofont-google-plus text-xl hover:text-red-500" /></Link></li>
              <li><Link href="#"><i className="icofont-twitter text-xl hover:text-sky-500" /></Link></li>
              <li><Link href="#"><i className="icofont-vimeo text-xl hover:text-pink-400" /></Link></li>
              <li><Link href="#"><i className="icofont-pinterest text-xl hover:text-red-600" /></Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="ml-4">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="flex space-x-6">
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline"><i className="fa fa-caret-right mr-1" />Home</Link></li>
                <li><Link href="#" className="hover:underline"><i className="fa fa-caret-right mr-1" />About Us</Link></li>
                <li><Link href="#" className="hover:underline"><i className="fa fa-caret-right mr-1" />Services</Link></li>
                <li><Link href="#" className="hover:underline"><i className="fa fa-caret-right mr-1" />Our Cases</Link></li>
                <li><Link href="#" className="hover:underline"><i className="fa fa-caret-right mr-1" />Other Links</Link></li>
              </ul>
              
            </div>
          </div>

          {/* Find Product */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Find Product</h2>
            <p className="text-sm text-gray-300 mb-4">
              Search for your desired product by name below.
            </p>
            <form action="#" method="get" className="flex flex-col gap-2 mt-2">
              <input
                type="text"
                name="product"
                placeholder="Enter product Name"
                className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Search
              </button>
            </form>
          </div>
      </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        <p>&copy; 2023 VoltBazar! All rights reserved <></><span className="font-bold text-white "><a href="https://www.linkedin.com/in/muhammad-aqib-khan-845131291/" target="_blank" > Muhammmd Aqib Khan</a></span> </p>
      </div>
    </footer>
  );
}