import e3 from '../../proImages/liquids/e3.jpg';
import e4 from '../../proImages/liquids/e4.jpg';
import e7 from '../../proImages/liquids/e7.jpg';

export interface ELiquid30mg {
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

export const eLiquids30mg: ELiquid30mg[] = [
  {
    "id": "el-30mg-1",
    "name": "Tokyo Dragonfruit",
    "price": 3.99,
    originalPrice: 5.99,
    salePercentage:30,
    "image": e3,
    "category": "E-liquids",
    "subcategory": "30 mg",
    "trending": true
  },
  {
    "id": "el-30mg-2",
    "name": "Tokyo Passion Fruit",
    "price": 4.49,
    "image": e4,
    "category": "E-liquids",
    "subcategory": "30 mg"
  },
  {
    "id": "el-30mg-3",
    "name": "Tokyo Starwberry Kiwi",
    "price": 4.29,
    originalPrice: 5.99,
    salePercentage:15,
    "image": e7,
    "category": "E-liquids",
    "subcategory": "30 mg"
  },
  {
    "id": "el-30mg-4",
    "name": "Tokyo Mint Fresh",
    "price": 3.89,
    originalPrice: 5.99,
    salePercentage:20,
    "image": e3,
    "category": "E-liquids",
    "subcategory": "30 mg",
    "trending": true
  }
];