// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductCarousel from '@/app/(components)/ProductCarousel';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
}

// This would typically come from an API or database
const getProductById = (id: string): Product | undefined => {
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

  return products.find(product => product.id === id);
};

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-6">{product.description}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>High energy efficiency rating</li>
              <li>Smart connectivity options</li>
              <li>Easy to use controls</li>
              <li>Durable construction</li>
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {product.tags.map(tag => (
              <span 
                key={tag}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        <ProductCarousel/>
      </div>
    </div>
  );
}