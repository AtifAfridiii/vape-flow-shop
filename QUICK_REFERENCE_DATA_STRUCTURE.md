# Quick Reference - Product Data Structure

## 📂 File Locations

```
src/data/
├── products.ts              ← Main orchestrator (import from here)
├── disposable-vapes.json    ← Category data
├── e-liquids.json           ← Category data
├── vape-kits.json           ← Category data
├── pod-systems.json         ← Category data
├── accessories.json         ← Category data
├── trending.json            ← Section data
├── best-selling.json        ← Section data
└── featured.json            ← Section data
```

## 🔗 How to Import

### Get All Products
```typescript
import { products } from '@/data/products';
```

### Get Category-Specific Products
```typescript
import { 
  disposableVapesProducts,
  eLiquidsProducts,
  vapeKitsProducts,
  podSystemsProducts,
  accessoriesProducts
} from '@/data/products';
```

### Get Section-Specific Products
```typescript
import { 
  trendingProducts,
  bestSellingProducts,
  featuredProducts
} from '@/data/products';
```

### Get Categories List
```typescript
import { categories } from '@/data/products';
```

## 📋 Product Structure

```typescript
interface Product {
  id: string;              // "dv-1", "el-5", etc.
  name: string;            // "Crystal Pro Max"
  price: number;           // 12.99
  image: string;           // img1 (actual import)
  category: string;        // "Disposable Vapes"
  featured?: boolean;      // true/false
  trending?: boolean;      // true/false
  bestSeller?: boolean;    // true/false
}
```

## 🏷️ Product ID Prefixes

| Category | Prefix | Example |
|----------|--------|---------|
| Disposable Vapes | `dv-` | dv-1, dv-2, dv-3 |
| E-Liquids | `el-` | el-1, el-2, el-3 |
| Vape Kits | `vk-` | vk-1, vk-2, vk-3 |
| Pod Systems | `ps-` | ps-1, ps-2, ps-3 |
| Accessories | `acc-` | acc-1, acc-2, acc-3 |

## 📊 Product Counts

| Category | Count | Price Range |
|----------|-------|-------------|
| Disposable Vapes | 8 | $5.49 - $12.99 |
| E-Liquids | 8 | $3.99 - $4.49 |
| Vape Kits | 6 | $34.99 - $64.99 |
| Pod Systems | 6 | $24.99 - $44.99 |
| Accessories | 8 | $2.99 - $12.99 |
| **Total** | **36** | - |

## 🎯 Common Tasks

### Filter Products by Category
```typescript
const filtered = products.filter(p => p.category === 'Disposable Vapes');
```

### Get Featured Products
```typescript
import { featuredProducts } from '@/data/products';
const featured = featuredProducts.slice(0, 4);
```

### Get Trending Products
```typescript
import { trendingProducts } from '@/data/products';
const trending = trendingProducts.slice(0, 4);
```

### Get Best Sellers
```typescript
import { bestSellingProducts } from '@/data/products';
const bestSellers = bestSellingProducts.slice(0, 4);
```

### Find Product by ID
```typescript
const product = products.find(p => p.id === 'dv-1');
```

### Get All Products in a Category
```typescript
import { disposableVapesProducts } from '@/data/products';
// disposableVapesProducts is already filtered
```

## 🔄 Component Usage

### TrendingNow Component
```typescript
import TrendingNow from '@/components/home/TrendingNow';

<TrendingNow onAddToCart={handleAddToCart} />
```

### BestSelling Component
```typescript
import BestSelling from '@/components/home/BestSelling';

<BestSelling onAddToCart={handleAddToCart} />
```

### FeaturedProducts Component
```typescript
import FeaturedProducts from '@/components/home/FeaturedProducts';

<FeaturedProducts onAddToCart={handleAddToCart} />
```

## ➕ Adding New Products

### 1. Add to Category File
Edit `src/data/disposable-vapes.json`:
```json
{
  "id": "dv-9",
  "name": "New Product Name",
  "price": 9.99,
  "image": "1",
  "category": "Disposable Vapes",
  "featured": false,
  "bestSeller": false
}
```

### 2. Add to Section (if applicable)
Edit `src/data/trending.json`:
```json
{
  "id": "dv-9",
  "name": "New Product Name",
  "price": 9.99,
  "image": "1",
  "category": "Disposable Vapes",
  "trending": true
}
```

### 3. Done!
No changes needed to `products.ts` - it automatically includes new products.

## ➕ Adding New Category

### 1. Create JSON File
Create `src/data/new-category.json`:
```json
[
  {
    "id": "nc-1",
    "name": "Product 1",
    "price": 19.99,
    "image": "1",
    "category": "New Category"
  }
]
```

### 2. Update products.ts
```typescript
import newCategoryData from './new-category.json';

const newCategory = convertToProducts(newCategoryData);

export const products: Product[] = [
  ...disposableVapes,
  ...eLiquids,
  ...vapeKits,
  ...podSystems,
  ...accessories,
  ...newCategory,  // Add this
];

export const newCategoryProducts = newCategory;  // Add this
```

### 3. Update categories array (if needed)
```typescript
export const categories = [
  'All Products',
  'Disposable Vapes',
  'Pod Systems',
  'E-liquids',
  'Accessories',
  'Starter Kits',
  'New Category',  // Add this
];
```

## 🖼️ Image References

Available images: 1-10

```typescript
const imageMap: Record<string, string> = {
  '1': img1,
  '2': img2,
  '3': img3,
  '4': img4,
  '5': img5,
  '6': img6,
  '7': img7,
  '8': img8,
  '9': img9,
  '10': img10,
};
```

Use image numbers in JSON files: `"image": "1"`

## 🔍 Debugging

### Check if product exists
```typescript
const product = products.find(p => p.id === 'dv-1');
console.log(product); // Should show product object
```

### List all products in category
```typescript
console.log(disposableVapesProducts);
```

### Check trending products
```typescript
console.log(trendingProducts);
```

### Verify image mapping
```typescript
console.log(products[0].image); // Should be img1, not "1"
```

## 📝 Notes

- ✅ All products have unique IDs
- ✅ No product duplication across categories
- ✅ Section products are curated from categories
- ✅ Image references are automatically converted
- ✅ Components automatically use dedicated data sources
- ✅ Backward compatible with existing code

