import e1 from '../../proImages/liquids/e1.jpg';
import e2 from '../../proImages/liquids/e2.jpg';
import e6 from '../../proImages/liquids/e6.jpg';
import e8 from '../../proImages/liquids/e8.jpg';

export interface ELiquid10mg {
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

export const eLiquids10mg: ELiquid10mg[] = [
  {
    "id": "el-10mg-1",
    "name": "Tokyo Pine Apple",
    "price": 3.99,
    "originalPrice": 10.0,
    "salePercentage": 7,
    "image": e1,
    "category": "E-liquids",
    "subcategory": "10 mg",
    "featured": true,
    "trending": true
  },
  {
    "id": "el-10mg-2",
    "name": "Tokyo Watermelon",
    "price": 3.99,
    "originalPrice": 9.99,
    "salePercentage": 6,
    "image": e2,
    "category": "E-liquids",
    "subcategory": "10 mg",
    "bestSeller": true
  },
  {
    "id": "el-10mg-3",
    "name": "Tokyo Peach Watermelon",
    "price": 3.99,
    "image": e6,
    "category": "E-liquids",
    "subcategory": "10 mg"
  },
  {
    "id": "el-10mg-4",
    "name": "Tokyo Blueberry Ice",
    "price": 4.29,
    "image": e8,
    "category": "E-liquids",
    "subcategory": "10 mg",
    "featured": true
  }
];