import e1 from '../../proImages/liquids/e1.jpg';
import e2 from '../../proImages/liquids/e2.jpg';

export interface ELiquidNicotineFree {
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

export const eLiquidsNicotineFree: ELiquidNicotineFree[] = [
  {
    "id": "elnf-1",
    "name": "Pure Flavor 0mg",
    "price": 3.99,
    "originalPrice": 5.49,
    "salePercentage": 27,
    "image": e1,
    "category": "E-liquids",
    "subcategory": "Nicotine Free",
    "nicotineStrength": "0mg",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "elnf-2",
    "name": "Clean Taste 0mg",
    "price": 4.49,
    "image": e2,
    "category": "E-liquids",
    "subcategory": "Nicotine Free",
    "nicotineStrength": "0mg"
  }
];