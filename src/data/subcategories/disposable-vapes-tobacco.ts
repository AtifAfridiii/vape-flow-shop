import vape1 from  '../../proImages/img1/ukpod.png';
import vape2 from  '../../proImages/img1/ukpod.png';

export interface DisposableVapeTobacco {
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

export const disposableVapesTobacco: DisposableVapeTobacco[] = [
  {
    "id": "dvt-1",
    "name": "Classic Tobacco Blend",
    "price": 11.99,
    "originalPrice": 14.99,
    "salePercentage": 20,
    "image": vape1,
    "category": "Disposable Vapes",
    "subcategory": "Tobacco",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "dvt-2",
    "name": "Virginia Gold",
    "price": 12.99,
    "image": vape2,
    "category": "Disposable Vapes",
    "subcategory": "Tobacco"
  }
];