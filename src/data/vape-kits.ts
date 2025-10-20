import vape1 from '../proImages/img1/vape1.jpg';
import vape2 from '../proImages/img1/vape2.jpg';
import vape3 from '../proImages/img1/vape3.jpg';
import vape4 from '../proImages/img1/vape4.jpg';
import vape5 from '../proImages/img1/vape5.jpg';
import vape6 from '../proImages/img1/vape6.jpg';
import vape7 from '../proImages/img1/vape7.jpg';

import e1 from '../proImages/liquids/e1.jpg';
import e2 from '../proImages/liquids/e2.jpg';
import e3 from '../proImages/liquids/e3.jpg';
import e4 from '../proImages/liquids/e4.jpg';
import e5 from '../proImages/liquids/e5.jpg';
import e6 from '../proImages/liquids/e6.jpg';

import pod1 from '../proImages/pod/pod1.jpg';
import pod2 from '../proImages/pod/pod2.jpg';
import pod3 from '../proImages/pod/pod3.jpg';
import pod4 from '../proImages/pod/pod4.jpg';
import pod5 from '../proImages/pod/pod5.jpg';
import pod6 from '../proImages/pod/pod6.jpg';
import pod7 from '../proImages/pod/pod7.jpg';


export interface VapeKit {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
}

export const vapeKits: VapeKit[] = [
  {
    id: "vk-1",
    name: "Beginner Vape Kit",
    price: 34.99,
    image: vape1,
    category: "Starter Kits",
    featured: true,
    bestSeller: true
  },
  {
    id: "vk-2",
    name: "Premium Pod Kit",
    price: 44.99,
    image: vape2,
    category: "Starter Kits",
    trending: true
  },
  {
    id: "vk-3",
    name: "Advanced Vaper Kit",
    price: 54.99,
    image: vape3,
    category: "Starter Kits",
    bestSeller: true
  },
  {
    id: "vk-4",
    name: "Complete Starter Bundle",
    price: 49.99,
    image: vape4,
    category: "Starter Kits"
  },
  {
    id: "vk-5",
    name: "Professional Vaping Kit",
    price: 64.99,
    image: vape5,
    category: "Starter Kits"
  },
  {
    id: "vk-6",
    name: "Compact Travel Kit",
    price: 39.99,
    image: vape6,
    category: "Starter Kits"
  },
  {
    id: "vk-7",
    name: "Deluxe Vape Kit",
    price: 74.99,
    image: vape7,
    category: "Starter Kits",
    featured: true
  },
  {
    id: "vk-8",
    name: "E-Liquid Starter Pack",
    price: 29.99,
    image: e1,
    category: "Starter Kits"
  },
  {
    id: "vk-9",
    name: "Premium E-Liquid Collection",
    price: 44.99,
    image: e2,
    category: "Starter Kits",
    trending: true
  },
  {
    id: "vk-10",
    name: "Pod System Starter Kit",
    price: 36.99,
    image: pod1,
    category: "Starter Kits"
  },
  {
    id: "vk-11",
    name: "Advanced Pod Kit",
    price: 52.99,
    image: pod2,
    category: "Starter Kits",
    bestSeller: true
  }
];