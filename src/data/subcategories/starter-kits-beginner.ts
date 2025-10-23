import coil5 from '../../proImages/img1/ukvape.png';
import coil6 from  '../../proImages/img1/ukvape.png';

export interface StarterKitBeginner {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  experienceLevel: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const starterKitsBeginner: StarterKitBeginner[] = [
  {
    "id": "skb-1",
    "name": "Entry-Level Vape Kit",
    "price": 29.99,
    "originalPrice": 39.99,
    "salePercentage": 25,
    "image": coil5,
    "category": "Starter Kits",
    "subcategory": "Beginner Kits",
    "experienceLevel": "Beginner",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "skb-2",
    "name": "Simple Starter Kit",
    "price": 24.99,
    "image": coil6,
    "category": "Starter Kits",
    "subcategory": "Beginner Kits",
    "experienceLevel": "Beginner",
    "trending": true
  }
];