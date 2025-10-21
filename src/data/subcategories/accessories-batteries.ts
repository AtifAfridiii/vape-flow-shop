import coil6 from '../../proImages/coils/coill6.jpg';
import coil7 from '../../proImages/coils/coil7.png';

export interface AccessoryBatteries {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  batteryCapacity: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const accessoriesBatteries: AccessoryBatteries[] = [
  {
    "id": "accb-1",
    "name": "18650 Battery 3000mAh",
    "price": 6.99,
    "originalPrice": 8.99,
    "salePercentage": 22,
    "image": coil6,
    "category": "Accessories",
    "subcategory": "Batteries",
    "batteryCapacity": "3000mAh",
    "bestSeller": true
  },
  {
    "id": "accb-2",
    "name": "21700 Battery 4000mAh",
    "price": 8.99,
    "image": coil7,
    "category": "Accessories",
    "subcategory": "Batteries",
    "batteryCapacity": "4000mAh",
    "featured": true
  }
];