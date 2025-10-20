import vape1 from '../proImages/img1/vape1.jpg';
import vape2 from '../proImages/img1/vape2.jpg';
import vape3 from '../proImages/img1/vape3.jpg';
import vape4 from '../proImages/img1/vape4.jpg';
import vape5 from '../proImages/img1/vape5.jpg';
import vape6 from '../proImages/img1/vape6.jpg';
import vape7 from '../proImages/img1/vape7.jpg';

export interface DisposableVape {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
}

export const disposableVapes: DisposableVape[] = [
  {
    "id": "dv-1",
    "name": "Crystal Pro Max",
    "price": 12.99,
    "image": vape1,
    "category": "Disposable Vapes",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "dv-2",
    "name": "Elf Bar 600",
    "price": 5.99,
    "image": vape2,
    "category": "Disposable Vapes",
    "trending": true
  },
  {
    "id": "dv-3",
    "name": "Lost Mary BM600",
    "price": 5.49,
    "image": vape3,
    "category": "Disposable Vapes",
    "bestSeller": true
  },
  {
    "id": "dv-4",
    "name": "Geek Bar Pulse",
    "price": 8.99,
    "image": vape4,
    "category": "Disposable Vapes",
    "trending": true
  },
  {
    "id": "dv-5",
    "name": "Hayati Pro Max",
    "price": 9.99,
    "image": vape5,
    "category": "Disposable Vapes"
  },
  {
    "id": "dv-6",
    "name": "Aroma King 3500",
    "price": 7.49,
    "image": vape6,
    "category": "Disposable Vapes"
  },
  {
    "id": "dv-7",
    "name": "Vape Pen 5000",
    "price": 10.99,
    "image": vape7,
    "category": "Disposable Vapes"
  },
  {
    "id": "dv-8",
    "name": "Puff Bar Plus",
    "price": 6.49,
    "image": vape1,
    "category": "Disposable Vapes"
  }
];