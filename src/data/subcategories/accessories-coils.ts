import coil1 from '../../proImages/coils/image.png';
import coil2 from '../../proImages/coils/image.png';
import coil3 from '../../proImages/coils/image.png';

export interface AccessoryCoils {
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

export const accessoriesCoils: AccessoryCoils[] = [
  {
    "id": "acc-1",
    "name": "SMOK Nord Coils Pack of 3",
    "price": 9.99,
    "originalPrice": 13.99,
    "salePercentage": 29,
    "image": coil1,
    "category": "Accessories",
    "subcategory": "Coils",
    "bestSeller": true
  },
  {
    "id": "acc-2",
    "name": "Vaporesso XROS Coils Pack of 2",
    "price": 7.99,
    "image": coil2,
    "category": "Accessories",
    "subcategory": "Coils",
    "trending": true
  },
  {
    "id": "acc-3",
    "name": "GeekVape Coil Pack of 4",
    "price": 12.99,
    "originalPrice": 16.99,
    "salePercentage": 24,
    "image": coil3,
    "category": "Accessories",
    "subcategory": "Coils",
    "featured": true
  }
];