import coil4 from '../../proImages/coils/coil4.jpg';
import coil5 from '../../proImages/coils/coil5.jpg';

export interface StarterKitPod {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  kitType: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const starterKitsPod: StarterKitPod[] = [
  {
    "id": "skp-1",
    "name": "Compact Pod Kit",
    "price": 34.99,
    "image": coil4,
    "category": "Starter Kits",
    "subcategory": "Pod Kits",
    "kitType": "Pod",
    "featured": true
  },
  {
    "id": "skp-2",
    "name": "Slim Pod Starter Kit",
    "price": 29.99,
    "originalPrice": 37.99,
    "salePercentage": 21,
    "image": coil5,
    "category": "Starter Kits",
    "subcategory": "Pod Kits",
    "kitType": "Pod",
    "bestSeller": true
  }
];