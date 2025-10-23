import vape1 from '../proImages/img1/ukpod.png';
import blueRaspberry from '../proImages/pod/xova.png';
import smokNord from '../proImages/pod/pod1.jpg';
import beginnerKit from '../proImages/img1/ukvape.png';
import e1 from "../proImages/liquids/ukflv.png"
export interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const featuredData: FeaturedProduct[] = [
  {
    id: "dv-1",
    name: "Smok nord pro",
    price: 12.99,
    originalPrice: 29.99,
    salePercentage: 8,
    image: vape1,
    category: "Disposable Vapes",
    featured: true
  },
  {
    id: "el-1",
    name: "Tokyo pineApple",
    price: 3.99,
    image: e1 ,
    category: "E-liquids",
    featured: true
  },
  {
    id: "ps-1",
    name: "oxva pod",
    price: 29.99,
    originalPrice: 45.99,
    salePercentage: 15,
    image: blueRaspberry,
    category: "Pod Systems",
    featured: true
  },
  {
    id: "vk-1",
    name: "Beginner Vape Kit",
    price: 34.99,
    image: beginnerKit,
    category: "Starter Kits",
    featured: true
  }
];

export default featuredData;