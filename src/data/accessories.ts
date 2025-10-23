// Import images from coils directory for accessories
import coil1 from '../proImages/coils/image.png';
import coil2 from'../proImages/coils/image.png';
import coil3 from'../proImages/coils/image.png';
import coil4 from'../proImages/coils/image.png';
import coil5 from'../proImages/coils/image.png';
import coil6 from'../proImages/coils/image.png';
import coil7 from'../proImages/coils/image.png';

export interface Accessory {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
   originalPrice?: number;
  salePercentage?: number;

}

export const accessories: Accessory[] = [
  {
    "id": "acc-1",
    "name": "Calliburn tank",
    "price": 4.99,
    originalPrice: 10,
    salePercentage: 60,
    "image": coil1,
    "category": "Accessories"
  },
  {
    "id": "acc-2",
    "name": "Replacement Glass Tube",
    "price": 8.99,
    "image": coil2,
    "category": "Accessories"
  },
  {
    "id": "acc-3",
    "name": "Thunder coil",
    "price": 6.99,
    originalPrice: 10,
    salePercentage: 40,
    "image": coil3,
    "category": "Accessories"
  },
  {
    "id": "acc-4",
    "name": "Smoke CLoud coil",
    "price": 12.99,
    "image": coil4,
    "category": "Accessories"
  },
  {
    "id": "acc-5",
    "name": "Oxva Coils (pack of 3)",
    "price": 9.99,
    "image": coil5,
    "category": "Accessories"
  },
  {
    "id": "acc-6",
    "name": "Smok nord coil",
    "price": 3.49,
    "image": coil6,
    "category": "Accessories"
  },
  {
    "id": "acc-7",
    "name": "Voopoo tank",
    "price": 2.99,
    "image": coil7,
    "category": "Accessories"
  }
];