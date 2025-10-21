import pod3 from '../../proImages/pod/pod3.jpg';
import pod4 from '../../proImages/pod/pod4.jpg';

export interface PodSystemVaporessoXros {
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

export const podSystemsVaporessoXros: PodSystemVaporessoXros[] = [
  {
    "id": "psvx-1",
    "name": "Vaporesso XROS 3 Kit",
    "price": 24.99,
    "image": pod3,
    "category": "Pod Systems",
    "subcategory": "Vaporesso XROS",
    "featured": true
  },
  {
    "id": "psvx-2",
    "name": "Vaporesso XROS 2 Kit",
    "price": 21.99,
    "originalPrice": 27.99,
    "salePercentage": 21,
    "image": pod4,
    "category": "Pod Systems",
    "subcategory": "Vaporesso XROS",
    "bestSeller": true
  }
];