# Subcategory Feature - Quick Reference

## Quick Start

To view subcategories in action:
1. Navigate to any product category (except "All Products")
2. Products will be automatically grouped by subcategory
3. Each subcategory is displayed with a heading and its products in a grid

## Key Components

### SubcategoryGrid Component
Location: `src/components/products/SubcategoryGrid.tsx`
Purpose: Displays products grouped by subcategory

### Data Structure
Location: `src/data/subcategories/`
Content: Individual TypeScript files for each subcategory

### Main Integration Point
Location: `src/components/layout/SinglePageLayout.tsx`
Logic: Conditional rendering based on selected category

## How It Works

1. **Data Structure**: Each product includes a `subcategory` property
2. **Grouping**: `SubcategoryGrid` groups products by their `subcategory` value
3. **Display**: Products are shown in sections with subcategory headings
4. **Conditional Logic**: Only non-"All Products" categories use subcategory display

## Example Usage

```tsx
// In SinglePageLayout.tsx
{selectedCategory !== 'All Products' ? (
  <SubcategoryGrid
    products={filteredProducts}
    onAddToCart={handleAddToCart}
  />
) : (
  <ProductGrid
    products={filteredProducts}
    onAddToCart={handleAddToCart}
  />
)}
```

## Adding New Subcategories

1. Create a new file in `src/data/subcategories/`
2. Define interface extending Product with subcategory-specific properties
3. Create product data array with `subcategory` property set
4. Export data in `src/data/subcategories/index.ts`
5. Import and include in `src/data/products.ts`

## Design Consistency

- Uses existing `ProductCard` component
- Follows same styling and animations
- Maintains responsive grid layout
- Preserves all existing functionality

## Categories with Subcategories

- Disposable Vapes
- E-liquids
- Pod Systems
- Accessories
- Starter Kits

## File Count

- 30+ subcategory data files
- 1 SubcategoryGrid component
- 2 modified files (CartContext, SinglePageLayout)
- 2 index/export files