// components/ProductCarousel.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  image: string;
  description?: string;
  tags?: string[];
}

const ProductCarousel = () => {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  // Sample product data - replace with your actual data source
  const products: Product[] = [
    {
      id: '1',
      name: 'Oven',
      image: '/images/oven.png',
      description: 'Modern smart oven with 10 cooking modes and self-cleaning feature.',
      tags: ['kitchen', 'appliance', 'smart']
    },
    {
      id: '2',
      name: 'Washing Machine',
      image: '/images/washing.jpg',
      description: 'Energy efficient washing machine with 8kg capacity and 15 programs.',
      tags: ['laundry', 'home', 'efficient']
    },
    {
      id: '3',
      name: 'Water Dispenser',
      image: '/images/Ws.jpg',
      description: 'Hot and cold water dispenser with child safety lock.',
      tags: ['kitchen', 'water', 'appliance']
    },
    {
      id: '4',
      name: 'Air Conditioner',
      image: '/images/Ac.jpg',
      description: 'Inverter AC with smart connectivity and energy saving mode.',
      tags: ['cooling', 'home', 'smart']
    },
    {
      id: '5',
      name: 'Fridge',
      image: '/images/fr.jpg',
      description: 'French door refrigerator with smart cooling and large capacity.',
      tags: ['kitchen', 'storage', 'appliance']
    },
    {
      id: '6',
      name: 'Home Appliances',
      image: '/images/hp.jpg',
      description: 'Complete set of modern home appliances for your smart home.',
      tags: ['kitchen', 'living', 'bedroom']
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // Adjust speed as needed

    const animate = () => {
      position -= speed;
      
      // Reset position when all items have scrolled
      if (position < -carousel.scrollWidth / 2) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="relative w-full overflow-hidden h-64 my-8">
      <div 
        ref={carouselRef}
        className="flex absolute whitespace-nowrap"
        style={{ width: '200%' }} // Double width for seamless looping
      >
        {/* Duplicate items for seamless looping */}
        {[...products, ...products].map((product, index) => (
          <div 
            key={`${product.id}-${index}`}
            className="relative inline-block w-64 h-64 mx-4 transition-all duration-300"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleProductClick(product.id)}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              style={{
                border: hoveredProduct === product.id ? '3px solid #3b82f6' : 'none',
                transition: 'border 0.3s ease'
              }}
            />
            {hoveredProduct === product.id && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
                <button 
                  className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product.id);
                  }}
                >
                  DISCOVER NOW
                </button>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h3 className="text-white font-bold text-lg">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;