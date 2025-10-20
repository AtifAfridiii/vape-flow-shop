import vape1 from '../proImages/img1/vape1.jpg';
import blueRaspberry from '../proImages/img1/vape2.jpg';
import smokNord from '../proImages/pod/pod1.jpg';
import beginnerKit from '../proImages/img1/vape4.jpg';
import e1 from "../proImages/liquids/e1.jpg"
export interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const featuredData: FeaturedProduct[] = [
  {
    id: "dv-1",
    name: "Smok nord pro",
    price: 12.99,
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
    image: smokNord,
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