import coil4 from '../../proImages/coils/coil4.jpg';
import coil5 from '../../proImages/coils/coil5.jpg';

export interface AccessoryReplacementParts {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const accessoriesReplacementParts: AccessoryReplacementParts[] = [
  {
    "id": "accrp-1",
    "name": "Replacement Glass Tube",
    "price": 8.99,
    "originalPrice": 11.99,
    "salePercentage": 25,
    "image": coil4,
    "category": "Accessories",
    "subcategory": "Replacement Parts",
    "bestSeller": true
  },
  {
    "id": "accrp-2",
    "name": "O-Ring Seals Pack of 10",
    "price": 3.99,
    "image": coil5,
    "category": "Accessories",
    "subcategory": "Replacement Parts"
  }
];