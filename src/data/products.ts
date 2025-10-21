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

// Import subcategory data
import {
  // Disposable Vapes subcategories
  disposableVapesFruit,
  disposableVapesMenthol,
  disposableVapesTobacco,
  disposableVapesDessert,
  disposableVapes500to1000,
  disposableVapes1500Plus,
  // E-liquids subcategories
  eLiquidsNicSalt,
  eLiquidsFreebase,
  eLiquidsShortfill,
  eLiquidsNicotineFree,
  eLiquids10mg,
  eLiquids30mg,
  eLiquids50mg,
  // Pod Systems subcategories
  podSystemsSmokNord,
  podSystemsVaporessoXros,
  podSystemsVoopooDrag,
  podSystemsLostVapeOrion,
  podSystemsGeekVape,
  // Accessories subcategories
  accessoriesCoils,
  accessoriesReplacementParts,
  accessoriesBatteries,
  accessoriesChargers,
  accessoriesTanks,
  // Starter Kits subcategories
  starterKitsBeginner,
  starterKitsIntermediate,
  starterKitsAdvanced,
  starterKitsPod,
  starterKitsBoxMods
} from './subcategories';

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

// Convert subcategory data to Product arrays
// Disposable Vapes subcategories
const disposableVapesFruitItems = convertToProducts(disposableVapesFruit);
const disposableVapesMentholItems = convertToProducts(disposableVapesMenthol);
const disposableVapesTobaccoItems = convertToProducts(disposableVapesTobacco);
const disposableVapesDessertItems = convertToProducts(disposableVapesDessert);
const disposableVapes500to1000Items = convertToProducts(disposableVapes500to1000);
const disposableVapes1500PlusItems = convertToProducts(disposableVapes1500Plus);

// E-liquids subcategories
const eLiquidsNicSaltItems = convertToProducts(eLiquidsNicSalt);
const eLiquidsFreebaseItems = convertToProducts(eLiquidsFreebase);
const eLiquidsShortfillItems = convertToProducts(eLiquidsShortfill);
const eLiquidsNicotineFreeItems = convertToProducts(eLiquidsNicotineFree);
const eLiquids10mgItems = convertToProducts(eLiquids10mg);
const eLiquids30mgItems = convertToProducts(eLiquids30mg);
const eLiquids50mgItems = convertToProducts(eLiquids50mg);

// Pod Systems subcategories
const podSystemsSmokNordItems = convertToProducts(podSystemsSmokNord);
const podSystemsVaporessoXrosItems = convertToProducts(podSystemsVaporessoXros);
const podSystemsVoopooDragItems = convertToProducts(podSystemsVoopooDrag);
const podSystemsLostVapeOrionItems = convertToProducts(podSystemsLostVapeOrion);
const podSystemsGeekVapeItems = convertToProducts(podSystemsGeekVape);

// Accessories subcategories
const accessoriesCoilsItems = convertToProducts(accessoriesCoils);
const accessoriesReplacementPartsItems = convertToProducts(accessoriesReplacementParts);
const accessoriesBatteriesItems = convertToProducts(accessoriesBatteries);
const accessoriesChargersItems = convertToProducts(accessoriesChargers);
const accessoriesTanksItems = convertToProducts(accessoriesTanks);

// Starter Kits subcategories
const starterKitsBeginnerItems = convertToProducts(starterKitsBeginner);
const starterKitsIntermediateItems = convertToProducts(starterKitsIntermediate);
const starterKitsAdvancedItems = convertToProducts(starterKitsAdvanced);
const starterKitsPodItems = convertToProducts(starterKitsPod);
const starterKitsBoxModsItems = convertToProducts(starterKitsBoxMods);

// Combine all products
export const products: Product[] = [
  ...disposableVapes,
  ...eLiquids,
  ...podSystems,
  ...accessories,
  ...vapeKits,
  // Disposable Vapes subcategories
  ...disposableVapesFruitItems,
  ...disposableVapesMentholItems,
  ...disposableVapesTobaccoItems,
  ...disposableVapesDessertItems,
  ...disposableVapes500to1000Items,
  ...disposableVapes1500PlusItems,
  // E-liquids subcategories
  ...eLiquidsNicSaltItems,
  ...eLiquidsFreebaseItems,
  ...eLiquidsShortfillItems,
  ...eLiquidsNicotineFreeItems,
  ...eLiquids10mgItems,
  ...eLiquids30mgItems,
  ...eLiquids50mgItems,
  // Pod Systems subcategories
  ...podSystemsSmokNordItems,
  ...podSystemsVaporessoXrosItems,
  ...podSystemsVoopooDragItems,
  ...podSystemsLostVapeOrionItems,
  ...podSystemsGeekVapeItems,
  // Accessories subcategories
  ...accessoriesCoilsItems,
  ...accessoriesReplacementPartsItems,
  ...accessoriesBatteriesItems,
  ...accessoriesChargersItems,
  ...accessoriesTanksItems,
  // Starter Kits subcategories
  ...starterKitsBeginnerItems,
  ...starterKitsIntermediateItems,
  ...starterKitsAdvancedItems,
  ...starterKitsPodItems,
  ...starterKitsBoxModsItems,
];

// Export category-specific products
export const disposableVapesProducts = disposableVapes;
export const eLiquidsProducts = eLiquids;
export const podSystemsProducts = podSystems;
export const accessoriesProducts = accessories;

// Export subcategory-specific products
// Disposable Vapes subcategories
export const disposableVapesFruitProducts = disposableVapesFruitItems;
export const disposableVapesMentholProducts = disposableVapesMentholItems;
export const disposableVapesTobaccoProducts = disposableVapesTobaccoItems;
export const disposableVapesDessertProducts = disposableVapesDessertItems;
export const disposableVapes500to1000Products = disposableVapes500to1000Items;
export const disposableVapes1500PlusProducts = disposableVapes1500PlusItems;

// E-liquids subcategories
export const eLiquidsNicSaltProducts = eLiquidsNicSaltItems;
export const eLiquidsFreebaseProducts = eLiquidsFreebaseItems;
export const eLiquidsShortfillProducts = eLiquidsShortfillItems;
export const eLiquidsNicotineFreeProducts = eLiquidsNicotineFreeItems;
export const eLiquids10mgProducts = eLiquids10mgItems;
export const eLiquids30mgProducts = eLiquids30mgItems;
export const eLiquids50mgProducts = eLiquids50mgItems;

// Pod Systems subcategories
export const podSystemsSmokNordProducts = podSystemsSmokNordItems;
export const podSystemsVaporessoXrosProducts = podSystemsVaporessoXrosItems;
export const podSystemsVoopooDragProducts = podSystemsVoopooDragItems;
export const podSystemsLostVapeOrionProducts = podSystemsLostVapeOrionItems;
export const podSystemsGeekVapeProducts = podSystemsGeekVapeItems;

// Accessories subcategories
export const accessoriesCoilsProducts = accessoriesCoilsItems;
export const accessoriesReplacementPartsProducts = accessoriesReplacementPartsItems;
export const accessoriesBatteriesProducts = accessoriesBatteriesItems;
export const accessoriesChargersProducts = accessoriesChargersItems;
export const accessoriesTanksProducts = accessoriesTanksItems;

// Starter Kits subcategories
export const starterKitsBeginnerProducts = starterKitsBeginnerItems;
export const starterKitsIntermediateProducts = starterKitsIntermediateItems;
export const starterKitsAdvancedProducts = starterKitsAdvancedItems;
export const starterKitsPodProducts = starterKitsPodItems;
export const starterKitsBoxModsProducts = starterKitsBoxModsItems;

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