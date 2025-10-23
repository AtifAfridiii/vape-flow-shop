import coil1 from '../../proImages/coils/image.png';
import coil2 from '../../proImages/coils/image.png';

export interface AccessoryChargers {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  chargingSpeed: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const accessoriesChargers: AccessoryChargers[] = [
  {
    "id": "accc-1",
    "name": "USB-C Fast Charger",
    "price": 12.99,
    "image": coil1,
    "category": "Accessories",
    "subcategory": "Chargers",
    "chargingSpeed": "45W Fast Charging",
    "featured": true
  },
  {
    "id": "accc-2",
    "name": "Wall Adapter Charger",
    "price": 9.99,
    "originalPrice": 12.99,
    "salePercentage": 23,
    "image": coil2,
    "category": "Accessories",
    "subcategory": "Chargers",
    "chargingSpeed": "20W Standard Charging",
    "bestSeller": true
  }
];