import e3 from '../../proImages/liquids/e3.jpg';
import e4 from '../../proImages/liquids/e4.jpg';
import e5 from '../../proImages/liquids/e5.jpg';
import e6 from '../../proImages/liquids/e6.jpg';

export interface ELiquidFruitFlavors {
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

export const eLiquidsFruitFlavors: ELiquidFruitFlavors[] = [
  {
    "id": "elff-1",
    "name": "Tropical Mango Mix",
    "price": 4.99,
    "originalPrice": 6.49,
    "salePercentage": 23,
    "image": e3,
    "category": "E-liquids",
    "subcategory": "Fruit Flavors",
    "featured": true
  },
  {
    "id": "elff-2",
    "name": "Berry Blast Fusion",
    "price": 4.99,
    "image": e4,
    "category": "E-liquids",
    "subcategory": "Fruit Flavors",
    "trending": true
  },
  {
    "id": "elff-3",
    "name": "Citrus Sunrise Blend",
    "price": 4.49,
    "originalPrice": 5.99,
    "salePercentage": 25,
    "image": e5,
    "category": "E-liquids",
    "subcategory": "Fruit Flavors",
    "bestSeller": true
  },
  {
    "id": "elff-4",
    "name": "Exotic Pineapple Rush",
    "price": 5.49,
    "image": e6,
    "category": "E-liquids",
    "subcategory": "Fruit Flavors"
  }
];