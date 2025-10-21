import coil2 from '../../proImages/coils/coil2.png';
import coil3 from '../../proImages/coils/coils3.jpg';

export interface StarterKitAdvanced {
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

export const starterKitsAdvanced: StarterKitAdvanced[] = [
  {
    "id": "ska-1",
    "name": "Professional Box Mod Kit",
    "price": 79.99,
    "image": coil2,
    "category": "Starter Kits",
    "subcategory": "Advanced Kits",
    "experienceLevel": "Advanced",
    "featured": true,
    "trending": true
  },
  {
    "id": "ska-2",
    "name": "Customizable Mod Kit",
    "price": 89.99,
    "originalPrice": 109.99,
    "salePercentage": 18,
    "image": coil3,
    "category": "Starter Kits",
    "subcategory": "Advanced Kits",
    "experienceLevel": "Advanced",
    "bestSeller": true
  }
];