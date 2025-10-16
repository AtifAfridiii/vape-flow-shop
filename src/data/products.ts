import { Product } from '@/contexts/CartContext';

export const categories = [
  'All Products',
  'Disposable Vapes',
  'Pod Systems',
  'E-liquids',
  'Accessories',
  'Starter Kits',
];

import img1 from '@/images/1.png';
import img2 from '@/images/2.png';
import img3 from '@/images/3.png';
import img4 from '@/images/4.png';
import img5 from '@/images/5.png';
import img6 from '@/images/6.png';
import img7 from '@/images/7.png';
import img8 from '@/images/8.png';
import img9 from '@/images/9.png';
import img10 from '@/images/10.png';

export const products: Product[] = [
  // Disposable Vapes
  {
    id: '1',
    name: 'Crystal Pro Max',
    price: 12.99,
    image: img1,
    category: 'Disposable Vapes',
    featured: true,
    bestSeller: true,
  },
  {
    id: '2',
    name: 'Elf Bar 600',
    price: 5.99,
    image: img2,
    category: 'Disposable Vapes',
    trending: true,
  },
  {
    id: '11',
    name: 'Lost Mary BM600',
    price: 5.49,
    image: img3,
    category: 'Disposable Vapes',
    bestSeller: true,
  },
  {
    id: '13',
    name: 'Geek Bar Pulse',
    price: 8.99,
    image: img4,
    category: 'Disposable Vapes',
    trending: true,
  },
  {
    id: '14',
    name: 'Hayati Pro Max',
    price: 9.99,
    image: img5,
    category: 'Disposable Vapes',
  },
  {
    id: '15',
    name: 'Aroma King 3500',
    price: 7.49,
    image: img6,
    category: 'Disposable Vapes',
  },

  // Pod Systems
  {
    id: '3',
    name: 'SMOK Nord 4',
    price: 29.99,
    image: img7,
    category: 'Pod Systems',
    featured: true,
    bestSeller: true,
  },
  {
    id: '4',
    name: 'Vaporesso XROS 3',
    price: 24.99,
    image: img8,
    category: 'Pod Systems',
    trending: true,
  },
  {
    id: '16',
    name: 'Voopoo Drag S',
    price: 34.99,
    image: img9,
    category: 'Pod Systems',
  },
  {
    id: '17',
    name: 'Innokin Coolfire Z50',
    price: 39.99,
    image: img10,
    category: 'Pod Systems',
    bestSeller: true,
  },
  {
    id: '18',
    name: 'Geekvape Aegis Pod',
    price: 32.99,
    image: img1,
    category: 'Pod Systems',
  },

  // E-liquids
  {
    id: '5',
    name: 'Blue Raspberry E-liquid',
    price: 3.99,
    image: img2,
    category: 'E-liquids',
    featured: true,
    trending: true,
  },
  {
    id: '6',
    name: 'Strawberry Ice E-liquid',
    price: 3.99,
    image: img3,
    category: 'E-liquids',
    bestSeller: true,
  },
  {
    id: '12',
    name: 'Mango Ice E-liquid',
    price: 3.99,
    image: img4,
    category: 'E-liquids',
    trending: true,
  },
  {
    id: '19',
    name: 'Vanilla Custard E-liquid',
    price: 4.49,
    image: img5,
    category: 'E-liquids',
  },
  {
    id: '20',
    name: 'Watermelon Burst E-liquid',
    price: 3.99,
    image: img6,
    category: 'E-liquids',
    bestSeller: true,
  },
  {
    id: '21',
    name: 'Menthol Chill E-liquid',
    price: 3.99,
    image: img7,
    category: 'E-liquids',
  },

  // Accessories
  {
    id: '7',
    name: 'USB-C Charging Cable',
    price: 4.99,
    image: img8,
    category: 'Accessories',
  },
  {
    id: '8',
    name: 'Replacement Pods (3 Pack)',
    price: 8.99,
    image: img9,
    category: 'Accessories',
  },
  {
    id: '22',
    name: 'Coil Pack (5 Pack)',
    price: 6.99,
    image: img10,
    category: 'Accessories',
  },
  {
    id: '23',
    name: 'Battery Charger',
    price: 12.99,
    image: img1,
    category: 'Accessories',
  },
  {
    id: '24',
    name: 'Carrying Case',
    price: 9.99,
    image: img2,
    category: 'Accessories',
  },

  // Starter Kits
  {
    id: '9',
    name: 'Beginner Vape Kit',
    price: 34.99,
    image: img3,
    category: 'Starter Kits',
    featured: true,
    bestSeller: true,
  },
  {
    id: '10',
    name: 'Premium Pod Kit',
    price: 44.99,
    image: img4,
    category: 'Starter Kits',
    trending: true,
  },
  {
    id: '25',
    name: 'Advanced Vaper Kit',
    price: 54.99,
    image: img5,
    category: 'Starter Kits',
    bestSeller: true,
  },
  {
    id: '26',
    name: 'Complete Starter Bundle',
    price: 49.99,
    image: img6,
    category: 'Starter Kits',
  },
];
