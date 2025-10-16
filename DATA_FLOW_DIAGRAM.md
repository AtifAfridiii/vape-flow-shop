# Product Data Flow Diagram

## Data Import Flow

```
JSON Data Files
├── disposable-vapes.json
├── e-liquids.json
├── vape-kits.json
├── pod-systems.json
├── accessories.json
├── trending.json
├── best-selling.json
└── featured.json
        ↓
        ↓ (imported by)
        ↓
src/data/products.ts
├── convertToProducts() function
├── imageMap (converts image references to imports)
├── Combines all JSON data
└── Exports:
    ├── products (all products combined)
    ├── disposableVapesProducts
    ├── eLiquidsProducts
    ├── vapeKitsProducts
    ├── podSystemsProducts
    ├── accessoriesProducts
    ├── trendingProducts
    ├── bestSellingProducts
    └── featuredProducts
```

## Component Data Flow

### Home Page (`src/pages/Home.tsx`)
```
products (from src/data/products)
    ├── → ProductGrid (filtered by category)
    ├── → TrendingNow (uses trendingProducts directly)
    └── → BestSelling (uses bestSellingProducts directly)
```

### Single Page Layout (`src/components/layout/SinglePageLayout.tsx`)
```
products (from src/data/products)
    ├── → ProductGrid (filtered by category)
    ├── → FeaturedProducts (uses featuredProducts directly)
    ├── → TrendingNow (uses trendingProducts directly)
    └── → BestSelling (uses bestSellingProducts directly)
```

## Component Hierarchy

```
App
└── SinglePageLayout / Home
    ├── HeroCarousel
    ├── ProductCategories
    ├── FeaturedProducts
    │   └── ProductCard[] (from featuredProducts)
    ├── TrendingNow
    │   └── ProductCard[] (from trendingProducts)
    ├── BestSelling
    │   └── ProductCard[] (from bestSellingProducts)
    ├── ProductGrid
    │   └── ProductCard[] (from filtered products)
    └── CategorySidebar
```

## Data Transformation Pipeline

```
JSON File (e.g., disposable-vapes.json)
    ↓
    ├── id: "dv-1"
    ├── name: "Crystal Pro Max"
    ├── price: 12.99
    ├── image: "1"  ← String reference
    ├── category: "Disposable Vapes"
    ├── featured: true
    └── bestSeller: true
    ↓
convertToProducts() function
    ↓
    ├── Spreads all properties
    ├── Maps image: "1" → img1 (actual import)
    └── Returns Product object
    ↓
Product object (ready for components)
    ├── id: "dv-1"
    ├── name: "Crystal Pro Max"
    ├── price: 12.99
    ├── image: img1  ← Actual import
    ├── category: "Disposable Vapes"
    ├── featured: true
    └── bestSeller: true
```

## Category Filtering Flow

```
User selects category in CategorySidebar
    ↓
setSelectedCategory(category)
    ↓
filteredProducts = products.filter(p => p.category === selectedCategory)
    ↓
ProductGrid receives filteredProducts
    ↓
ProductCard[] rendered for filtered products
```

## Section-Specific Data Flow

### Trending Products
```
trendingProducts (from trending.json)
    ↓
TrendingNow component
    ↓
.slice(0, 4) → Display first 4 trending items
    ↓
ProductCard[] with "🔥 Trending" badge
```

### Best Selling Products
```
bestSellingProducts (from best-selling.json)
    ↓
BestSelling component
    ↓
.slice(0, 4) → Display first 4 best sellers
    ↓
ProductCard[] with "🏆 Best Seller" badge
```

### Featured Products
```
featuredProducts (from featured.json)
    ↓
FeaturedProducts component
    ↓
.slice(0, 4) → Display first 4 featured items
    ↓
ProductCard[] with "⭐ Featured" badge
```

## Product ID Naming Convention

```
Category Prefix + Sequential Number

Disposable Vapes:  dv-1, dv-2, dv-3, ...
E-Liquids:         el-1, el-2, el-3, ...
Vape Kits:         vk-1, vk-2, vk-3, ...
Pod Systems:       ps-1, ps-2, ps-3, ...
Accessories:       acc-1, acc-2, acc-3, ...
```

## Image Reference System

```
JSON File:
  "image": "1"

imageMap:
  '1': img1
  '2': img2
  ...
  '10': img10

convertToProducts():
  image: imageMap[item.image] || img1

Result:
  image: img1 (actual import)
```

## Data Consistency

### Unique Products Across Files
- Each product appears in only ONE category file
- Section files (trending, best-selling, featured) reference products from category files
- No product duplication across the system

### Product Count
- Disposable Vapes: 8 products
- E-Liquids: 8 products
- Vape Kits: 6 products
- Pod Systems: 6 products
- Accessories: 8 products
- **Total: 36 unique products**

### Section Distribution
- Trending: 6 products (from 4 categories)
- Best Selling: 8 products (from 4 categories)
- Featured: 4 products (from 4 categories)
- **Total: 18 products in sections** (all unique, no duplicates)

## Export Structure from products.ts

```typescript
// Combined products
export const products: Product[]

// Category-specific
export const disposableVapesProducts: Product[]
export const eLiquidsProducts: Product[]
export const vapeKitsProducts: Product[]
export const podSystemsProducts: Product[]
export const accessoriesProducts: Product[]

// Section-specific
export const trendingProducts: Product[]
export const bestSellingProducts: Product[]
export const featuredProducts: Product[]

// Categories list
export const categories: string[]
```

