import coil6 from '../../proImages/img1/ukvape.png';
import coil7 from '../../proImages/img1/ukvape.png';

export interface StarterKitBoxMods {
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

export const starterKitsBoxMods: StarterKitBoxMods[] = [
  {
    "id": "skbmx-1",
    "name": "Powerful Box Mod Kit",
    "price": 69.99,
    "originalPrice": 89.99,
    "salePercentage": 22,
    "image": coil6,
    "category": "Starter Kits",
    "subcategory": "Box Mods",
    "kitType": "Box Mod",
    "featured": true,
    "trending": true
  },
  {
    "id": "skbmx-2",
    "name": "High-Wattage Mod Kit",
    "price": 74.99,
    "image": coil7,
    "category": "Starter Kits",
    "subcategory": "Box Mods",
    "kitType": "Box Mod",
    "bestSeller": true
  }
];