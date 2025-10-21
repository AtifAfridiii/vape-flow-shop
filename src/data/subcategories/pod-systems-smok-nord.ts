import pod1 from '../../proImages/pod/pod1.jpg';
import pod2 from '../../proImages/pod/pod2.jpg';

export interface PodSystemSmokNord {
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

export const podSystemsSmokNord: PodSystemSmokNord[] = [
  {
    "id": "psn-1",
    "name": "SMOK Nord 4 Kit",
    "price": 29.99,
    "image": pod1,
    "category": "Pod Systems",
    "subcategory": "SMOK Nord",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "psn-2",
    "name": "SMOK Nord 3 Kit",
    "price": 24.99,
    "originalPrice": 32.99,
    "salePercentage": 24,
    "image": pod2,
    "category": "Pod Systems",
    "subcategory": "SMOK Nord",
    "trending": true
  }
];