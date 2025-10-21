import vape6 from '../../proImages/img1/vape6.jpg';
import vape7 from '../../proImages/img1/vape7.jpg';

export interface DisposableVape500to1000 {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  puffCount: number;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const disposableVapes500to1000: DisposableVape500to1000[] = [
  {
    "id": "dv500-1",
    "name": "Compact 600 Puff",
    "price": 9.99,
    "originalPrice": 12.99,
    "salePercentage": 23,
    "image": vape6,
    "category": "Disposable Vapes",
    "subcategory": "500-1000 Puffs",
    "puffCount": 600,
    "bestSeller": true
  },
  {
    "id": "dv500-2",
    "name": "Premium 800 Puff",
    "price": 11.99,
    "image": vape7,
    "category": "Disposable Vapes",
    "subcategory": "500-1000 Puffs",
    "puffCount": 800,
    "featured": true
  }
];