import coil7 from '../../proImages/img1/ukvape.png';
import coil1 from '../../proImages/img1/ukvape.png';

export interface StarterKitIntermediate {
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

export const starterKitsIntermediate: StarterKitIntermediate[] = [
  {
    "id": "ski-1",
    "name": "Advanced Pod Kit",
    "price": 49.99,
    "image": coil7,
    "category": "Starter Kits",
    "subcategory": "Intermediate Kits",
    "experienceLevel": "Intermediate",
    "featured": true
  },
  {
    "id": "ski-2",
    "name": "Variable Watt Kit",
    "price": 54.99,
    "originalPrice": 69.99,
    "salePercentage": 21,
    "image": coil1,
    "category": "Starter Kits",
    "subcategory": "Intermediate Kits",
    "experienceLevel": "Intermediate",
    "bestSeller": true
  }
];