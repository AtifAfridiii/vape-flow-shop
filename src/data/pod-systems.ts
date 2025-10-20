import pod1 from '../proImages/pod/pod1.jpg';
import pod2 from '../proImages/pod/pod2.jpg';
import pod3 from '../proImages/pod/pod3.jpg';
import pod4 from '../proImages/pod/pod4.jpg';
import pod5 from '../proImages/pod/pod5.jpg';
import pod6 from '../proImages/pod/pod6.jpg';
import pod7 from '../proImages/pod/pod7.jpg';

export interface PodSystem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
}

export const podSystemsData: PodSystem[] = [
  {
    id: "ps-1",
    name: "SMOK Nord 4",
    price: 29.99,
    image: pod1,
    category: "Pod Systems",
    featured: true,
    bestSeller: true
  },
  {
    id: "ps-2",
    name: "Vaporesso XROS 3",
    price: 24.99,
    image: pod2,
    category: "Pod Systems",
    trending: true
  },
  {
    id: "ps-3",
    name: "Voopoo Drag S",
    price: 34.99,
    image: pod3,
    category: "Pod Systems"
  },
  {
    id: "ps-4",
    name: "Pack of 3 Pods",
    price: 99.99,
    image: pod4,
    category: "Pod Systems",
    bestSeller: true
  },
  {
    id: "ps-5",
    name: "Pack of 2 Pods",
    price: 69.99,
    image: pod5,
    category: "Pod Systems"
  },
  {
    id: "ps-6",
    name: "Lost Vape Orion",
    price: 44.99,
    image: pod6,
    category: "Pod Systems"
  },
  {
    id: "ps-7",
    name: "GeekVape L200",
    price: 39.99,
    image: pod7,
    category: "Pod Systems",
    trending: true
  }
];

export default podSystemsData;