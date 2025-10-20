// Import images from coils directory for accessories
import coil1 from '../proImages/coils/coil1.png';
import coil2 from '../proImages/coils/coil2.png';
import coil3 from '../proImages/coils/coils3.jpg';
import coil4 from '../proImages/coils/coil4.jpg';
import coil5 from '../proImages/coils/coil5.jpg';
import coil6 from '../proImages/coils/coill6.jpg';
import coil7 from '../proImages/coils/coil7.png';

export interface Accessory {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
}

export const accessories: Accessory[] = [
  {
    "id": "acc-1",
    "name": "Calliburn tank",
    "price": 4.99,
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