import e4 from '../../proImages/liquids/e4.jpg';
import e5 from '../../proImages/liquids/e5.jpg';

export interface ELiquidFreebase {
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

export const eLiquidsFreebase: ELiquidFreebase[] = [
  {
    "id": "elfb-1",
    "name": "Classic Freebase 3mg",
    "price": 3.99,
    "image": e4,
    "category": "E-liquids",
    "subcategory": "Freebase",
    "nicotineStrength": "3mg",
    "featured": true
  },
  {
    "id": "elfb-2",
    "name": "Strong Freebase 6mg",
    "price": 4.49,
    "originalPrice": 5.99,
    "salePercentage": 25,
    "image": e5,
    "category": "E-liquids",
    "subcategory": "Freebase",
    "nicotineStrength": "6mg",
    "bestSeller": true
  }
];