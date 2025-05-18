"use client";
import React from "react";
import Link from "next/link";

interface FirstBodyProps {
  title: string;
  backgroundImage?: string;
}

export default function FirstBody({ title, backgroundImage }: FirstBodyProps) {
  return (
    <div
      className="relative bg-cover bg-blue-600 bg-center bg-no-repeat py-32 text-white"
      style={{
        backgroundImage: `url(${backgroundImage || "/default-bg.jpg"})`,
        minHeight: "300px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <ul className="flex justify-center items-center space-x-2 mt-4 text-sm">
            <li>
              <Link href="/" className="text-white font-bold">
                Home {">"}
              </Link>
            </li>
            <li>
              <i className="icofont-simple-right mx-2" />
            </li>
            <li className="text-white font-bold">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


