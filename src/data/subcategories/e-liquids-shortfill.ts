import e6 from '../../proImages/liquids/e6.jpg';
import e7 from '../../proImages/liquids/e7.jpg';
import e8 from '../../proImages/liquids/e8.jpg';

export interface ELiquidShortfill {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  nicotineStrength: string;
  bottleSize: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  originalPrice?: number;
  salePercentage?: number;
}

export const eLiquidsShortfill: ELiquidShortfill[] = [
  {
    "id": "elsh-1",
    "name": "Shortfill 0mg 50ml",
    "price": 12.99,
    "image": e6,
    "category": "E-liquids",
    "subcategory": "Shortfill",
    "nicotineStrength": "0mg",
    "bottleSize": "50ml",
    "featured": true
  },
  {
    "id": "elsh-2",
    "name": "Shortfill 0mg 100ml",
    "price": 19.99,
    "image": e7,
    "category": "E-liquids",
    "subcategory": "Shortfill",
    "nicotineStrength": "0mg",
    "bottleSize": "100ml",
    "trending": true
  },
  {
    "id": "elsh-3",
    "name": "Shortfill 0mg 150ml",
    "price": 24.99,
    "originalPrice": 29.99,
    "salePercentage": 17,
    "image": e8,
    "category": "E-liquids",
    "subcategory": "Shortfill",
    "nicotineStrength": "0mg",
    "bottleSize": "150ml",
    "bestSeller": true
  }
];