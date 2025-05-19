import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/header";
import Footer from "./(components)/footer";
import FreeShippingPopup from "./(components)/FreeShippingPopup";
import Image from "next/image";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltbazar - Your Electronic Hub",
  description:
    "Shop the latest electronics at Voltbazar – your one-stop hub for high-quality gadgets, accessories, and tech essentials. Discover unbeatable deals, fast shipping, and expert support.",
  icons: {
    icon: "/volt.ico", // <-- updated to volt sign favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <FreeShippingPopup />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
