import { Product } from '@/contexts/CartContext';

// Import JSON data files
import disposableVapesData from './disposable-vapes.json';
import eLiquidsData from './e-liquids.json';
import podSystemsData from './pod-systems.json';
import accessoriesData from './accessories.json';
import trendingData from './trending.json';
import bestSellingData from './best-selling.json';
import featuredData from './featured.json';

// Helper function to convert JSON data to Product objects
// Images are now stored as URLs in the JSON files
const convertToProducts = (data: any[]): Product[] => {
  return data.map((item) => ({
    ...item,
    image: item.image || 'https://images.unsplash.com/photo-1578432291840-8d1c51dc1cac?w=400&h=400&fit=crop',
  }));
};

// Convert all JSON data to Product arrays
const disposableVapes = convertToProducts(disposableVapesData);
const eLiquids = convertToProducts(eLiquidsData);
const podSystems = convertToProducts(podSystemsData);
const accessories = convertToProducts(accessoriesData);


// Combine all products
export const products: Product[] = [
  ...disposableVapes,
  ...eLiquids,
  ...podSystems,
  ...accessories,

];

// Export category-specific products
export const disposableVapesProducts = disposableVapes;
export const eLiquidsProducts = eLiquids;
export const podSystemsProducts = podSystems;
export const accessoriesProducts = accessories;


// Export section-specific products
export const trendingProducts = convertToProducts(trendingData);
export const bestSellingProducts = convertToProducts(bestSellingData);
export const featuredProducts = convertToProducts(featuredData);

export const categories = [
  'All Products',
  'Disposable Vapes',
  'Pod Systems',
  'E-liquids',
  'Accessories',
];
