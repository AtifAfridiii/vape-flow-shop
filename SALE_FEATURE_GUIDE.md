# Sale Feature Implementation Guide

## Overview
The sale feature has been successfully implemented in the ProductCard component. Products can now display:
- Strike-through original price in red
- Bold, larger sale price in red
- "SALE X% OFF" badge on the product image

## How It Works

### Product Interface Updates
Two new optional fields have been added to the `Product` interface in `CartContext.tsx`:
- `originalPrice?: number` - The original price before discount
- `salePercentage?: number` - The discount percentage (e.g., 50 for 50% off)

### Visual Features

#### 1. SALE Badge
- **Location**: Top-left corner of product image
- **Style**: Red background (#EF4444), white text, rounded corners
- **Content**: "SALE X% OFF" (e.g., "SALE 50% OFF")
- **Visibility**: Only shows when both `originalPrice` and `salePercentage` are present

#### 2. Price Display
- **Original Price**: 
  - Smaller font size (text-sm)
  - Strike-through with red line (decoration-red-500)
  - Muted text color
  
- **Sale Price**:
  - Larger, bold font (text-lg font-bold)
  - Red color (#DC2626) to emphasize the deal
  - Displayed next to or below the original price

- **Regular Price** (no sale):
  - Standard display when `originalPrice` is not set
  - Primary color, medium font weight

### Responsive Design
- Uses flexbox with `flex-wrap` for price display
- Adapts to different screen sizes automatically
- Maintains clean, minimalistic layout on mobile and desktop

## How to Add Sale to Products

### Example 1: Adding Sale to a Product
```typescript
{
  "id": "dv-2",
  "name": "Thunder Vape",
  "price": 5.99,              // Current sale price
  "originalPrice": 11.99,     // Original price (before discount)
  "salePercentage": 50,       // 50% off
  "image": disposableVape1,
  "category": "Disposable Vapes",
  "trending": true
}
```

### Example 2: Product Without Sale
```typescript
{
  "id": "dv-4",
  "name": "Smok nord",
  "price": 8.99,              // Regular price
  // No originalPrice or salePercentage
  "image": disposableVape2,
  "category": "Disposable Vapes",
  "trending": true
}
```

## Files Modified

1. **`src/contexts/CartContext.tsx`**
   - Added `originalPrice?: number` to Product interface
   - Added `salePercentage?: number` to Product interface

2. **`src/components/products/ProductCard.tsx`**
   - Added SALE badge display logic
   - Updated price display with conditional rendering
   - Added strike-through styling for original price
   - Enhanced sale price with bold, larger font

3. **`src/data/trending.ts`** (Example)
   - Updated TrendingProduct interface with sale fields
   - Added sale data to example products

## Styling Details

### SALE Badge Classes
```
bg-red-600 text-white px-2.5 py-1 rounded-md shadow-lg text-xs font-bold uppercase
```

### Original Price Classes
```
text-sm text-muted-foreground line-through decoration-red-500 decoration-2
```

### Sale Price Classes
```
text-lg font-bold text-red-600
```

## Testing the Feature

1. Add `originalPrice` and `salePercentage` to any product in your data files
2. The SALE badge will automatically appear on the product image
3. The price display will show both original and sale prices
4. Products without sale data will display normally

## Notes

- The sale feature is **optional** - products work with or without sale data
- The `price` field should always contain the **current price** (sale price if on sale)
- The `originalPrice` should be **higher** than the `price` for sales
- The `salePercentage` is used for display only - actual discount calculation is not enforced
- All styling is responsive and follows the existing theme
