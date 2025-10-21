import e1 from '../proImages/liquids/e1.jpg';
import e2 from '../proImages/liquids/e2.jpg';
import e3 from '../proImages/liquids/e3.jpg';
import e4 from '../proImages/liquids/e4.jpg';
import e5 from '../proImages/liquids/e5.jpg';
import e6 from '../proImages/liquids/e6.jpg';
import e7 from '../proImages/liquids/e7.jpg';
import e8 from '../proImages/liquids/e8.jpg';

export interface ELiquid {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  bestSeller?: boolean;
  originalPrice?: number;
  salePercentage?: number;
  trending?: boolean;
}

export const eLiquids: ELiquid[] = [
  {
    "id": "el-1",
    "name": "Tokyo Pine Apple",
    "price": 3.99,
    originalPrice: 10.,
    salePercentage: 7,
    "image": e1,
    "category": "E-liquids",
    "featured": true,
    "trending": true
  },
  {
    "id": "el-2",
    "name": "Tokyo watermelon",
    "price": 3.99,
    originalPrice: 9.99,
    salePercentage: 6,
    "image": e2,
    "category": "E-liquids",
    "bestSeller": true
  },
  {
    "id": "el-3",
    "name": "Tokyo Dragonfruit",
    "price": 3.99,
    "image": e3,
    "category": "E-liquids",
    "trending": true
  },
  {
    "id": "el-4",
    "name": "Tokyo passion fruit",
    "price": 4.49,
    "image": e4,
    "category": "E-liquids"
  },
  {
    "id": "el-5",
    "name": "Tokyo melon",
    "price": 3.99,
    originalPrice: 8.99,
    salePercentage: 67,
    "image": e5,
    "category": "E-liquids",
    "bestSeller": true
  },
  {
    "id": "el-6",
    "name": "Tokyo peach watermelon",
    "price": 3.99,
    "image": e6,
    "category": "E-liquids"
  },
  {
    "id": "el-7",
    "name": "Tokyo starwberry kiwi",
    "price": 4.29,
    "image": e7,
    "category": "E-liquids"
  },
  {
    "id": "el-8",
    "name": "Tokyo strawberry",
    "price": 3.99,
    originalPrice: 5.99,
    salePercentage: 2,
    "image": e8,
    "category": "E-liquids"
  }
];