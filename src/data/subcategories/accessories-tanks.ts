import coil3 from '../../proImages/coils/coils3.jpg';
import coil4 from '../../proImages/coils/coil4.jpg';

export interface AccessoryTanks {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  tankCapacity: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const accessoriesTanks: AccessoryTanks[] = [
  {
    "id": "acct-1",
    "name": "Sub-Ohm Tank 5ml",
    "price": 14.99,
    "image": coil3,
    "category": "Accessories",
    "subcategory": "Tanks",
    "tankCapacity": "5ml",
    "featured": true
  },
  {
    "id": "acct-2",
    "name": "Glass Tank 4ml",
    "price": 12.99,
    "originalPrice": 15.99,
    "salePercentage": 19,
    "image": coil4,
    "category": "Accessories",
    "subcategory": "Tanks",
    "tankCapacity": "4ml",
    "bestSeller": true
  }
];