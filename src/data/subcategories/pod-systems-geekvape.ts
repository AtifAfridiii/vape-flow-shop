import pod1 from '../../proImages/pod/pod1.jpg';
import pod2 from '../../proImages/pod/pod2.jpg';

export interface PodSystemGeekVape {
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

export const podSystemsGeekVape: PodSystemGeekVape[] = [
  {
    "id": "psgv-1",
    "name": "GeekVape L200 Kit",
    "price": 39.99,
    "originalPrice": 49.99,
    "salePercentage": 20,
    "image": pod1,
    "category": "Pod Systems",
    "subcategory": "GeekVape",
    "trending": true
  },
  {
    "id": "psgv-2",
    "name": "GeekVape Aegis X Kit",
    "price": 44.99,
    "image": pod2,
    "category": "Pod Systems",
    "subcategory": "GeekVape",
    "bestSeller": true
  }
];