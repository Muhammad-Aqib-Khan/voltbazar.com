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

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  return {
    title: product ? product.name : 'Product Not Found',
    description: product ? product.description : 'No product found.',
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={300} className="mb-4" />
      <p className="mb-2">{product.description}</p>
      <div className="flex gap-2">
        {product.tags.map(tag => (
          <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-xs">{tag}</span>
        ))}
      </div>
    </div>
  );
}