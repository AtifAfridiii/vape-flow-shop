import e1 from '../../proImages/liquids/e1.jpg';
import e2 from '../../proImages/liquids/e2.jpg';
import e3 from '../../proImages/liquids/e3.jpg';

export interface ELiquidNicSalt {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  nicotineStrength: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const eLiquidsNicSalt: ELiquidNicSalt[] = [
  {
    "id": "elns-1",
    "name": "Smooth Nic Salt 20mg",
    "price": 4.99,
    "image": e1,
    "category": "E-liquids",
    "subcategory": "Nicotine Salt",
    "nicotineStrength": "20mg",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "elns-2",
    "name": "Mild Nic Salt 10mg",
    "price": 4.49,
    "originalPrice": 5.99,
    "salePercentage": 25,
    "image": e2,
    "category": "E-liquids",
    "subcategory": "Nicotine Salt",
    "nicotineStrength": "10mg",
    "trending": true
  },
  {
    "id": "elns-3",
    "name": "Strong Nic Salt 25mg",
    "price": 5.49,
    "image": e3,
    "category": "E-liquids",
    "subcategory": "Nicotine Salt",
    "nicotineStrength": "25mg"
  }
];