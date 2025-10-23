import vape1 from '../proImages/img1/ukpod.png';
import vape2 from '../proImages/img1/ukpod.png';
import vape3 from '../proImages/img1/ukpod.png';
import vape4 from '../proImages/img1/ukpod.png';
import vape5 from '../proImages/img1/ukpod.png';
import vape6 from '../proImages/img1/ukpod.png';
import vape7 from '../proImages/img1/ukpod.png';
import e1 from '../proImages/img1/ukpod.png';
import e2 from '../proImages/img1/ukpod.png';
import pod1 from '../proImages/img1/ukpod.png';
import pod2 from '../proImages/img1/ukpod.png';



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