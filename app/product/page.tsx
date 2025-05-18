"use client";

import { useState, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

export default function Product() {
  const [searchQuery, setSearchQuery] = useState("");

  const products: Product[] = [
    // Irons
    {
      id: 1,
      name: "Panasonic Dry Iron NI-317T",
      price: "PKR 4,500",
      image: "/images/iron.jpg",
      description: "Non-stick soleplate with adjustable temperature control.",
    },
    {
      id: 2,
      name: "Philips Steam Iron GC1740",
      price: "PKR 7,200",
      image: "/images/Philips Steam Iron GC1740.jpg",
      description: "Fast heat-up and even steam distribution.",
    },
    {
      id: 3,
      name: "Kenwood Steam Iron STP50",
      price: "PKR 5,900",
      image: "/images/Kenwood Steam Iron STP50.webp",
      description: "Durable ceramic soleplate and vertical steam feature.",
    },
    {
      id: 4,
      name: "Haier Steam Iron HI-770",
      price: "PKR 4,750",
      image: "/images/Haier Steam Iron HI-770.jpg",
      description: "Energy-saving with anti-drip technology.",
    },
    {
      id: 5,
      name: "Westpoint WF-9802 Steam Iron",
      price: "PKR 3,850",
      image: "/images/Westpoint WF-9802 Steam Iron.jpg",
      description: "Lightweight design with overheat protection.",
    },

    // Fridges
    {
      id: 6,
      name: "Haier Top Mount Refrigerator HRF-276",
      price: "PKR 88,000",
      image: "/images/Haier Top Mount Refrigerator HRF-276.webp",
      description: "260L capacity with energy-efficient cooling.",
    },
    {
      id: 7,
      name: "Dawlance Refrigerator 91996 WB",
      price: "PKR 105,000",
      image: "/images/Dawlance Refrigerator 91996 WB.jpg",
      description: "Inverter technology and glass door design.",
    },
    {
      id: 8,
      name: "PEL Refrigerator PRGD-21850",
      price: "PKR 92,500",
      image: "/images/PEL Refrigerator PRGD-21850.jpg",
      description: "Fast cooling with power saving mode.",
    },
    {
      id: 9,
      name: "Orient Refrigerator Snow 280",
      price: "PKR 85,000",
      image: "/images/Orient Refrigerator Snow 280.jpg",
      description: "Spacious freezer with anti-fungal gasket.",
    },
    {
      id: 10,
      name: "Samsung Double Door Fridge RT38K",
      price: "PKR 140,000",
      image: "/images/Samsung Double Door Fridge RT38K.webp",
      description: "Twin cooling system and frost-free technology.",
    },

    // Ovens
    {
      id: 11,
      name: "Haier Microwave Oven HIL2001",
      price: "PKR 21,000",
      image: "/images/Haier Microwave Oven HIL2001.webp",
      description: "20L oven with timer and defrost function.",
    },
    {
      id: 12,
      name: "Dawlance Microwave Oven DW-132",
      price: "PKR 18,500",
      image: "/images/Dawlance Microwave Oven DW-132.jpg",
      description: "Built-in child lock and power-saving mode.",
    },


    // Additional Mixed Products

  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <>
      <Head>
        <title>Products - My Store</title>
        <meta name="description" content="Browse our products" />
      </Head>

      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Our Products</h1>
          <p className="text-center text-lg">Appliances for every home at the best prices.</p>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Product Cards */}
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition-transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-green-600 font-bold mt-1">{product.price}</p>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
