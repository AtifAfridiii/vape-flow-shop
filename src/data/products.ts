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
  {
    id: '1',
    name: 'Crystal Pro Max',
    price: 12.99,
    image: img1,
    category: 'Disposable Vapes',
  },
  {
    id: '2',
    name: 'Elf Bar 600',
    price: 5.99,
    image: img2,
    category: 'Disposable Vapes',
  },
  {
    id: '3',
    name: 'SMOK Nord 4',
    price: 29.99,
    image: img3,
    category: 'Pod Systems',
  },
  {
    id: '4',
    name: 'Vaporesso XROS 3',
    price: 24.99,
    image: img4,
    category: 'Pod Systems',
  },
  {
    id: '5',
    name: 'Blue Raspberry E-liquid',
    price: 3.99,
    image: img5,
    category: 'E-liquids',
  },
  {
    id: '6',
    name: 'Strawberry Ice E-liquid',
    price: 3.99,
    image: img6,
    category: 'E-liquids',
  },
  {
    id: '7',
    name: 'USB-C Charging Cable',
    price: 4.99,
    image: img7,
    category: 'Accessories',
  },
  {
    id: '8',
    name: 'Replacement Pods (3 Pack)',
    price: 8.99,
    image: img8,
    category: 'Accessories',
  },
  {
    id: '9',
    name: 'Beginner Vape Kit',
    price: 34.99,
    image: img9,
    category: 'Starter Kits',
  },
  {
    id: '10',
    name: 'Premium Pod Kit',
    price: 44.99,
    image: img10,
    category: 'Starter Kits',
  },
  {
    id: '11',
    name: 'Lost Mary BM600',
    price: 5.49,
    image: img1,
    category: 'Disposable Vapes',
  },
  {
    id: '12',
    name: 'Mango Ice E-liquid',
    price: 3.99,
    image: img2,
    category: 'E-liquids',
  },
];
