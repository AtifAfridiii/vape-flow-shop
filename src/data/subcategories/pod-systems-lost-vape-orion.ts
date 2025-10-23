import pod7 from  '../../proImages/pod/xova.png';

export interface PodSystemLostVapeOrion {
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

export const podSystemsLostVapeOrion: PodSystemLostVapeOrion[] = [
  {
    "id": "pslvo-1",
    "name": "Lost Vape Orion Q Kit",
    "price": 29.99,
    "originalPrice": 39.99,
    "salePercentage": 25,
    "image": pod7,
    "category": "Pod Systems",
    "subcategory": "Lost Vape Orion",
    "featured": true
  }
];