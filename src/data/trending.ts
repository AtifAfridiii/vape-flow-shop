// Import images from different subfolders based on category
// For Disposable Vapes - using images from img1 subfolder
import disposableVape1 from '../proImages/img1/vape2.jpg';
import disposableVape2 from '../proImages/img1/vape4.jpg';

// For E-liquids - using images from liquids subfolder
import eLiquid5 from '../proImages/liquids/e1.jpg';
import eLiquid2 from '../proImages/liquids/e3.jpg';

// For Pod Systems - using images from pod subfolder
import podSystem1 from '../proImages/pod/pod2.jpg';

// For Starter Kits - using images from img1 subfolder
import starterKit1 from '../proImages/img1/vape7.jpg';

export interface TrendingProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  trending?: boolean;
}

export const trendingProducts: TrendingProduct[] = [
  {
    "id": "dv-2",
    "name": "Thunder Vape",
    "price": 5.99,
    "image": disposableVape1,
    "category": "Disposable Vapes",
    "trending": true
  },
  {
    "id": "dv-4",
    "name": "Smok nord",
    "price": 8.99,
    "image": disposableVape2,
    "category": "Disposable Vapes",
    "trending": true
  },
  {
    "id": "el-1",
    "name": "Pine Apple E-liquid",
    "price": 3.99,
    "image": eLiquid5,
    "category": "E-liquids",
    "trending": true
  },
  {
    "id": "el-3",
    "name": "Dragon Fruit E-liquid",
    "price": 3.99,
    "image": eLiquid2,
    "category": "E-liquids",
    "trending": true
  },
  {
    "id": "ps-2",
    "name": "Vaporesso XROS 3",
    "price": 24.99,
    "image": podSystem1,
    "category": "Pod Systems",
    "trending": true
  },
  {
    "id": "vk-2",
    "name": "Premium Pod Kit",
    "price": 44.99,
    "image": starterKit1,
    "category": "Starter Kits",
    "trending": true
  }
];