import e5 from '../../proImages/liquids/ukflv.png';

export interface ELiquid50mg {
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

export const eLiquids50mg: ELiquid50mg[] = [
  {
    "id": "el-50mg-1",
    "name": "Tokyo Melon",
    "price": 3.99,
    "originalPrice": 8.99,
    "salePercentage": 67,
    "image": e5,
    "category": "E-liquids",
    "subcategory": "50 mg",
    "bestSeller": true
  },
  {
    "id": "el-50mg-2",
    "name": "Tokyo Grape Soda",
    "price": 4.29,
    "image": e5,
    "category": "E-liquids",
    "subcategory": "50 mg"
  },
  {
    "id": "el-50mg-3",
    "name": "Tokyo Cool Menthol",
    "price": 3.79,
    "image": e5,
    "category": "E-liquids",
    "subcategory": "50 mg",
    "trending": true
  }
];