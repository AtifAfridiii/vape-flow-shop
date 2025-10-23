import e1 from '../proImages/liquids/ukflv.png';
import e2 from '../proImages/liquids/ukflv.png';
import e3 from '../proImages/liquids/ukflv.png';
import e4 from '../proImages/liquids/ukflv.png';
import e5 from '../proImages/liquids/ukflv.png';
import e6 from '../proImages/liquids/ukflv.png';
import e7 from '../proImages/liquids/ukflv.png';
import e8 from '../proImages/liquids/ukflv.png';

export interface ELiquid {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  nicotineStrength?: string;
  vgPgRatio?: string;
  flavorProfile?: string;
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
    "subcategory": "10 mg",
    "nicotineStrength": "10mg",
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
    "subcategory": "10 mg",
    "nicotineStrength": "10mg",
    "bestSeller": true
  },
  {
    "id": "el-3",
    "name": "Tokyo Dragonfruit",
    "price": 3.99,
    "image": e3,
    "category": "E-liquids",
    "subcategory": "30 mg",
    "nicotineStrength": "30mg",
    "trending": true
  },
  {
    "id": "el-4",
    "name": "Tokyo passion fruit",
    "price": 4.49,
    "image": e4,
    "category": "E-liquids",
    "subcategory": "30 mg",
    "nicotineStrength": "30mg",
    "vgPgRatio": "50/50",
    "flavorProfile": "Fruit"
  },
  {
    "id": "el-5",
    "name": "Tokyo melon",
    "price": 3.99,
    originalPrice: 8.99,
    salePercentage: 67,
    "image": e5,
    "category": "E-liquids",
    "subcategory": "50 mg",
    "nicotineStrength": "50mg",
    "bestSeller": true
  },
  {
    "id": "el-6",
    "name": "Tokyo peach watermelon",
    "price": 3.99,
    "image": e6,
    "category": "E-liquids",
    "subcategory": "10 mg",
    "nicotineStrength": "10mg"
  },
  {
    "id": "el-7",
    "name": "Tokyo starwberry kiwi",
    "price": 4.29,
    "image": e7,
    "category": "E-liquids",
    "subcategory": "30 mg",
    "nicotineStrength": "30mg"
  },
  {
    "id": "el-9",
    "name": "Tokyo Blueberry Ice",
    "price": 4.49,
    "image": e5,
    "category": "E-liquids",
    "subcategory": "10 mg",
    "nicotineStrength": "10mg",
    "featured": true
  },
  {
    "id": "el-10",
    "name": "Tokyo Mint Fresh",
    "price": 3.89,
    "image": e6,
    "category": "E-liquids",
    "subcategory": "30 mg",
    "nicotineStrength": "30mg",
    "trending": true
  },
  {
    "id": "el-11",
    "name": "Tokyo Grape Soda",
    "price": 4.29,
    "image": e7,
    "category": "E-liquids",
    "subcategory": "50 mg",
    "nicotineStrength": "50mg",
    "bestSeller": true
  },
  {
    "id": "el-12",
    "name": "Tokyo Tropical Punch",
    "price": 3.99,
    "image": e8,
    "category": "E-liquids",
    "subcategory": "10 mg",
    "nicotineStrength": "10mg"
  },
  {
    "id": "el-13",
    "name": "Tokyo Berry Blast",
    "price": 4.19,
    "image": e1,
    "category": "E-liquids",
    "subcategory": "30 mg",
    "nicotineStrength": "30mg"
  },
  {
    "id": "el-14",
    "name": "Tokyo Cool Menthol",
    "price": 3.79,
    "image": e2,
    "category": "E-liquids",
    "subcategory": "50 mg",
    "nicotineStrength": "50mg",
    "trending": true
  },
  {
    "id": "el-15",
    "name": "Tokyo Citrus Twist",
    "price": 4.39,
    "image": e3,
    "category": "E-liquids",
    "subcategory": "10 mg",
    "nicotineStrength": "10mg",
    "featured": true
  },
  {
    "id": "el-16",
    "name": "Tokyo Vanilla Dream",
    "price": 3.99,
    "image": e4,
    "category": "E-liquids",
    "subcategory": "30 mg",
    "nicotineStrength": "30mg"
  }
];