// Import images from different subfolders based on category
// For Disposable Vapes - using images from img1 subfolder
import disposableVape1 from '../proImages/img1/vape1.jpg';
import disposableVape2 from '../proImages/img1/vape3.jpg';

// For E-liquids - using images from liquids subfolder
import eLiquid1 from '../proImages/liquids/e2.jpg';
import eLiquid2 from '../proImages/liquids/e5.jpg';

// For Pod Systems - using images from pod subfolder
import podSystem1 from '../proImages/pod/pod1.jpg';
import podSystem2 from '../proImages/pod/pod4.jpg';

// For Starter Kits - using images from img1 subfolder
import starterKit1 from '../proImages/img1/vape6.jpg';
import starterKit2 from '../proImages/img1/vape5.jpg';

export interface BestSellingProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  bestSeller?: boolean;
}

export const bestSellingProducts: BestSellingProduct[] = [
  {
    "id": "dv-1",
    "name": "Smok nord pro",
    "price": 12.99,
    "image": disposableVape1,
    "category": "Disposable Vapes",
    "bestSeller": true
  },
  {
    "id": "dv-3",
    "name": "Pack of 2 pods",
    "price": 5.49,
    "image": disposableVape2,
    "category": "Disposable Vapes",
    "bestSeller": true
  },
  {
    "id": "el-2",
    "name": "Tokyo watermelon E-liquid",
    "price": 3.99,
    "image": eLiquid1,
    "category": "E-liquids",
    "bestSeller": true
  },
  {
    "id": "el-5",
    "name": "Melon Burst E-liquid",
    "price": 3.99,
    "image": eLiquid2,
    "category": "E-liquids",
    "bestSeller": true
  },
  {
    "id": "ps-1",
    "name": "SMOK Nord 4",
    "price": 29.99,
    "image": podSystem1,
    "category": "Pod Systems",
    "bestSeller": true
  },
  {
    "id": "ps-4",
    "name": "Innokin Coolfire Z50",
    "price": 39.99,
    "image": podSystem2,
    "category": "Pod Systems",
    "bestSeller": true
  },
  {
    "id": "vk-1",
    "name": "Beginner Vape Kit",
    "price": 34.99,
    "image": starterKit1,
    "category": "Starter Kits",
    "bestSeller": true
  },
  {
    "id": "vk-3",
    "name": "Advanced Vaper Kit",
    "price": 54.99,
    "image": starterKit2,
    "category": "Starter Kits",
    "bestSeller": true
  }
];