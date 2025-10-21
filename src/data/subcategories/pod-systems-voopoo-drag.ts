import pod5 from '../../proImages/pod/pod5.jpg';
import pod6 from '../../proImages/pod/pod6.jpg';

export interface PodSystemVoopooDrag {
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

export const podSystemsVoopooDrag: PodSystemVoopooDrag[] = [
  {
    "id": "psvd-1",
    "name": "Voopoo Drag S Kit",
    "price": 34.99,
    "originalPrice": 44.99,
    "salePercentage": 22,
    "image": pod5,
    "category": "Pod Systems",
    "subcategory": "Voopoo Drag",
    "featured": true,
    "trending": true
  },
  {
    "id": "psvd-2",
    "name": "Voopoo Drag 3 Kit",
    "price": 39.99,
    "image": pod6,
    "category": "Pod Systems",
    "subcategory": "Voopoo Drag",
    "bestSeller": true
  }
];