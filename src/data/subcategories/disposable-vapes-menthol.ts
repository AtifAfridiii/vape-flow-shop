import vape5 from  '../../proImages/img1/ukpod.png';
import vape6 from  '../../proImages/img1/ukpod.png';
import vape7 from  '../../proImages/img1/ukpod.png';

export interface DisposableVapeMenthol {
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

export const disposableVapesMenthol: DisposableVapeMenthol[] = [
  {
    "id": "dvm-1",
    "name": "Arctic Mint Chill",
    "price": 11.99,
    "image": vape5,
    "category": "Disposable Vapes",
    "subcategory": "Menthol",
    "featured": true
  },
  {
    "id": "dvm-2",
    "name": "Spearmint Freeze",
    "price": 10.99,
    "originalPrice": 13.49,
    "salePercentage": 19,
    "image": vape6,
    "category": "Disposable Vapes",
    "subcategory": "Menthol",
    "trending": true
  },
  {
    "id": "dvm-3",
    "name": "Peppermint Blast",
    "price": 12.49,
    "image": vape7,
    "category": "Disposable Vapes",
    "subcategory": "Menthol",
    "bestSeller": true
  }
];