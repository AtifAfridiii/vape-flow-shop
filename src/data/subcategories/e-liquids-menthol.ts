import e7 from '../../proImages/liquids/e7.jpg';
import e8 from '../../proImages/liquids/e8.jpg';

export interface ELiquidMenthol {
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

export const eLiquidsMenthol: ELiquidMenthol[] = [
  {
    "id": "elm-1",
    "name": "Arctic Menthol Chill",
    "price": 4.99,
    "originalPrice": 6.49,
    "salePercentage": 23,
    "image": e7,
    "category": "E-liquids",
    "subcategory": "Menthol",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "elm-2",
    "name": "Cool Mint Wave",
    "price": 4.49,
    "image": e8,
    "category": "E-liquids",
    "subcategory": "Menthol",
    "trending": true
  }
];