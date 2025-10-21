import vape1 from '../../proImages/img1/vape1.jpg';
import vape2 from '../../proImages/img1/vape2.jpg';
import vape3 from '../../proImages/img1/vape3.jpg';

export interface DisposableVape1500Plus {
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

export const disposableVapes1500Plus: DisposableVape1500Plus[] = [
  {
    "id": "dv1500-1",
    "name": "Extended 1500 Puff",
    "price": 14.99,
    "image": vape1,
    "category": "Disposable Vapes",
    "subcategory": "1500+ Puffs",
    "puffCount": 1500,
    "featured": true
  },
  {
    "id": "dv1500-2",
    "name": "Long-Lasting 2000 Puff",
    "price": 16.99,
    "originalPrice": 19.99,
    "salePercentage": 15,
    "image": vape2,
    "category": "Disposable Vapes",
    "subcategory": "1500+ Puffs",
    "puffCount": 2000,
    "trending": true
  },
  {
    "id": "dv1500-3",
    "name": "Ultra 3000 Puff",
    "price": 19.99,
    "image": vape3,
    "category": "Disposable Vapes",
    "subcategory": "1500+ Puffs",
    "puffCount": 3000,
    "bestSeller": true
  }
];