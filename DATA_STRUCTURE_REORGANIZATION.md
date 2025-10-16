# Product Data Structure Reorganization

## Overview
The product data has been reorganized from a single monolithic file into separate JSON files for categories and sections, providing better organization, maintainability, and scalability.

## New Directory Structure

```
src/data/
├── products.ts                 # Main data orchestrator (imports and combines all JSON files)
├── disposable-vapes.json       # Disposable Vapes category (8 products)
├── e-liquids.json              # E-Liquids category (8 products)
├── vape-kits.json              # Starter Kits category (6 products)
├── pod-systems.json            # Pod Systems category (6 products)
├── accessories.json            # Accessories category (8 products)
├── trending.json               # Trending products section (6 products)
├── best-selling.json           # Best Selling products section (8 products)
└── featured.json               # Featured products section (4 products)
```

## Category Files

### 1. Disposable Vapes (`disposable-vapes.json`)
- **Products**: 8 unique products
- **Price Range**: $5.49 - $12.99
- **Featured Products**: Crystal Pro Max
- **Trending Products**: Elf Bar 600, Geek Bar Pulse
- **Best Sellers**: Crystal Pro Max, Lost Mary BM600

### 2. E-Liquids (`e-liquids.json`)
- **Products**: 8 unique products
- **Price Range**: $3.99 - $4.49
- **Featured Products**: Blue Raspberry E-liquid
- **Trending Products**: Blue Raspberry E-liquid, Mango Ice E-liquid
- **Best Sellers**: Strawberry Ice E-liquid, Watermelon Burst E-liquid

### 3. Vape Kits (`vape-kits.json`)
- **Products**: 6 unique products
- **Price Range**: $34.99 - $64.99
- **Featured Products**: Beginner Vape Kit
- **Trending Products**: Premium Pod Kit
- **Best Sellers**: Beginner Vape Kit, Advanced Vaper Kit

### 4. Pod Systems (`pod-systems.json`)
- **Products**: 6 unique products
- **Price Range**: $24.99 - $44.99
- **Featured Products**: SMOK Nord 4
- **Trending Products**: Vaporesso XROS 3
- **Best Sellers**: SMOK Nord 4, Innokin Coolfire Z50

### 5. Accessories (`accessories.json`)
- **Products**: 8 unique products
- **Price Range**: $2.99 - $12.99
- **No featured/trending/bestseller flags** (general accessories)

## Section Files

### 1. Trending Products (`trending.json`)
- **Total Products**: 6 products from various categories
- **Sources**: Disposable Vapes (2), E-Liquids (2), Pod Systems (1), Starter Kits (1)
- **Purpose**: Showcase currently trending items across all categories

### 2. Best Selling Products (`best-selling.json`)
- **Total Products**: 8 products from various categories
- **Sources**: Disposable Vapes (2), E-Liquids (2), Pod Systems (2), Starter Kits (2)
- **Purpose**: Display top-performing products across all categories

### 3. Featured Products (`featured.json`)
- **Total Products**: 4 products from various categories
- **Sources**: Disposable Vapes (1), E-Liquids (1), Pod Systems (1), Starter Kits (1)
- **Purpose**: Highlight premium/showcase products

## Data Structure

### Product Object
```typescript
interface Product {
  id: string;                    // Unique identifier (e.g., "dv-1", "el-1")
  name: string;                  // Product name
  price: number;                 // Price in USD
  image: string;                 // Image reference (number 1-10)
  category: string;              // Category name
  featured?: boolean;            // Optional: marks as featured
  trending?: boolean;            // Optional: marks as trending
  bestSeller?: boolean;          // Optional: marks as best seller
}
```

## Updated Components

### 1. `src/data/products.ts`
**Changes**:
- Imports all JSON data files
- Provides `imageMap` to convert image references to actual imports
- Exports combined `products` array
- Exports category-specific arrays:
  - `disposableVapesProducts`
  - `eLiquidsProducts`
  - `vapeKitsProducts`
  - `podSystemsProducts`
  - `accessoriesProducts`
- Exports section-specific arrays:
  - `trendingProducts`
  - `bestSellingProducts`
  - `featuredProducts`

### 2. `src/components/home/TrendingNow.tsx`
**Changes**:
- Removed `products` prop from component interface
- Now imports `trendingProducts` directly from `@/data/products`
- Simplified component to use dedicated data source

### 3. `src/components/home/BestSelling.tsx`
**Changes**:
- Removed `products` prop from component interface
- Now imports `bestSellingProducts` directly from `@/data/products`
- Simplified component to use dedicated data source

### 4. `src/components/home/FeaturedProducts.tsx`
**Changes**:
- Removed `products` prop from component interface
- Now imports `featuredProducts` directly from `@/data/products`
- Simplified component to use dedicated data source

### 5. `src/pages/Home.tsx`
**Changes**:
- Removed `products` prop from `<TrendingNow />` component
- Removed `products` prop from `<BestSelling />` component

### 6. `src/components/layout/SinglePageLayout.tsx`
**Changes**:
- Removed `products` prop from `<FeaturedProducts />` component
- Removed `products` prop from `<TrendingNow />` component
- Removed `products` prop from `<BestSelling />` component

## Benefits

1. **Better Organization**: Each category and section has its own file
2. **Easier Maintenance**: Update specific categories without affecting others
3. **Scalability**: Easy to add new categories or sections
4. **Separation of Concerns**: Category data is separate from section data
5. **Unique Products**: Each category has distinct products, not duplicates
6. **Cleaner Components**: Section components no longer need to filter data
7. **Performance**: Smaller, focused data files can be loaded independently

## Product Uniqueness

- **Total Unique Products**: 36 products
- **Category Distribution**:
  - Disposable Vapes: 8 products
  - E-Liquids: 8 products
  - Vape Kits: 6 products
  - Pod Systems: 6 products
  - Accessories: 8 products
- **Section Products**: Curated from categories (no duplication across sections)

## How to Add New Products

1. **Add to Category**: Edit the appropriate JSON file (e.g., `disposable-vapes.json`)
2. **Add to Section**: If product should be trending/featured/bestseller, add to corresponding JSON file
3. **Update products.ts**: No changes needed - it automatically combines all files

## How to Add New Category

1. Create new JSON file: `src/data/new-category.json`
2. Add products with unique IDs
3. Update `src/data/products.ts`:
   - Import the new JSON file
   - Add conversion: `const newCategory = convertToProducts(newCategoryData);`
   - Add to combined products array
   - Export the category-specific array
4. Update `src/data/products.ts` categories array if needed

