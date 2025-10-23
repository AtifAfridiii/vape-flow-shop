import vape3 from  '../../proImages/img1/ukpod.png';
import vape4 from  '../../proImages/img1/ukpod.png';
import vape5 from  '../../proImages/img1/ukpod.png';

export interface DisposableVapeDessert {
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

export const disposableVapesDessert: DisposableVapeDessert[] = [
  {
    "id": "dvd-1",
    "name": "Vanilla Custard Dream",
    "price": 12.99,
    "image": vape3,
    "category": "Disposable Vapes",
    "subcategory": "Dessert",
    "featured": true
  },
  {
    "id": "dvd-2",
    "name": "Chocolate Fudge Swirl",
    "price": 13.99,
    "image": vape4,
    "category": "Disposable Vapes",
    "subcategory": "Dessert",
    "trending": true
  },
  {
    "id": "dvd-3",
    "name": "Caramel Macchiato",
    "price": 12.49,
    "originalPrice": 14.99,
    "salePercentage": 17,
    "image": vape5,
    "category": "Disposable Vapes",
    "subcategory": "Dessert",
    "bestSeller": true
  }
];