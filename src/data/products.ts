import { Product } from '@/contexts/CartContext';

// Import JSON data files
import { disposableVapes as disposableVapesData } from './disposable-vapes';
import { eLiquids as eLiquidsData } from './e-liquids';
import podSystemsData from './pod-systems';
import { accessories as accessoriesData } from './accessories';
import { trendingProducts as trendingData } from './trending';
import { bestSellingProducts as bestSellingData } from './best-selling';
import featuredData from './featured';
import { vapeKits as vapeKitsData } from './vape-kits';

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
const accessories = accessoriesData;
const vapeKits = vapeKitsData;


// Combine all products
export const products: Product[] = [
  ...disposableVapes,
  ...eLiquids,
  ...podSystems,
  ...accessories,
  ...vapeKits,

];

// Export category-specific products
export const disposableVapesProducts = disposableVapes;
export const eLiquidsProducts = eLiquids;
export const podSystemsProducts = podSystems;
export const accessoriesProducts = accessories;


// Export section-specific products
export const trendingProducts = trendingData;
export const bestSellingProducts = bestSellingData;
export const featuredProducts = convertToProducts(featuredData);

export const categories = [
  'All Products',
  'Disposable Vapes',
  'Pod Systems',
  'E-liquids',
  'Accessories',
  'Starter Kits',
];
