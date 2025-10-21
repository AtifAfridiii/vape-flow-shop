import vape1 from '../../proImages/img1/vape1.jpg';
import vape2 from '../../proImages/img1/vape2.jpg';
import vape3 from '../../proImages/img1/vape3.jpg';
import vape4 from '../../proImages/img1/vape4.jpg';

export interface DisposableVapeFruit {
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

export const disposableVapesFruit: DisposableVapeFruit[] = [
  {
    "id": "dvf-1",
    "name": "Tropical Mango Blast",
    "price": 12.99,
    "originalPrice": 15.99,
    "salePercentage": 19,
    "image": vape1,
    "category": "Disposable Vapes",
    "subcategory": "Fruit Flavors",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "dvf-2",
    "name": "Berry Fusion Mix",
    "price": 11.99,
    "image": vape2,
    "category": "Disposable Vapes",
    "subcategory": "Fruit Flavors",
    "trending": true
  },
  {
    "id": "dvf-3",
    "name": "Citrus Sunrise",
    "price": 10.99,
    "originalPrice": 13.99,
    "salePercentage": 21,
    "image": vape3,
    "category": "Disposable Vapes",
    "subcategory": "Fruit Flavors",
    "bestSeller": true
  },
  {
    "id": "dvf-4",
    "name": "Pineapple Paradise",
    "price": 12.49,
    "image": vape4,
    "category": "Disposable Vapes",
    "subcategory": "Fruit Flavors"
  }
];