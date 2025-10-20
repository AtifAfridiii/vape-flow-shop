#!/usr/bin/env node

/**
 * Verification script to check product data structure and image URLs
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');

// Load all JSON files
const loadJSON = (filename) => {
  const filePath = path.join(dataDir, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
};

const files = [
  'disposable-vapes.json',
  'e-liquids.json',
  'vape-kits.json',
  'pod-systems.json',
  'accessories.json',
  'trending.json',
  'best-selling.json',
  'featured.json',
];

let allProducts = [];
let errors = [];
let warnings = [];

console.log('🔍 Verifying Product Data Structure...\n');

// Check each file
files.forEach((file) => {
  try {
    const data = loadJSON(file);
    console.log(`✓ ${file}: ${data.length} products`);

    data.forEach((product, index) => {
      // Check required properties
      if (!product.id) errors.push(`${file}[${index}]: Missing 'id'`);
      if (!product.name) errors.push(`${file}[${index}]: Missing 'name'`);
      if (product.price === undefined) errors.push(`${file}[${index}]: Missing 'price'`);
      if (!product.image) errors.push(`${file}[${index}]: Missing 'image'`);
      if (!product.category) errors.push(`${file}[${index}]: Missing 'category'`);

      // Check image is a URL or local path
      if (product.image && !product.image.match(/^https?:\/\//) && !product.image.match(/^\.(\/|\\)|^(\/|\\)/)) {
        errors.push(
          `${file}[${index}]: Image is not a valid URL or local path: "${product.image}"`
        );
      }

      // Check price is a number
      if (typeof product.price !== 'number') {
        errors.push(`${file}[${index}]: Price is not a number: ${product.price}`);
      }

      allProducts.push({ ...product, source: file });
    });
  } catch (err) {
    errors.push(`${file}: ${err.message}`);
  }
});

console.log(`\n📊 Total Products: ${allProducts.length}\n`);

// Check category distribution
console.log('📂 Category Distribution:');
const categories = {};
allProducts.forEach((product) => {
  categories[product.category] = (categories[product.category] || 0) + 1;
});

Object.entries(categories).forEach(([category, count]) => {
  console.log(`  - ${category}: ${count} products`);
});

// Check for duplicate IDs
console.log('\n🔑 Checking for Duplicate IDs...');
const ids = new Map();
allProducts.forEach((product) => {
  if (ids.has(product.id)) {
    errors.push(`Duplicate ID found: ${product.id}`);
  } else {
    ids.set(product.id, product.source);
  }
});
if (ids.size === allProducts.length) {
  console.log(`✓ All ${allProducts.length} product IDs are unique`);
}

// Check image URLs or local paths
console.log('\n🖼️  Checking Image URLs or Local Paths...');
let validImageCount = 0;
allProducts.forEach((product) => {
  if (product.image && (product.image.match(/^https?:\/\//) || product.image.match(/^\.(\/|\\)|^(\/|\\)/))) {
    validImageCount++;
  }
});
console.log(`✓ ${validImageCount}/${allProducts.length} products have valid image URLs or local paths`);

// Check for products with special flags
console.log('\n🏷️  Special Product Flags:');
const featured = allProducts.filter((p) => p.featured).length;
const trending = allProducts.filter((p) => p.trending).length;
const bestSeller = allProducts.filter((p) => p.bestSeller).length;

console.log(`  - Featured: ${featured} products`);
console.log(`  - Trending: ${trending} products`);
console.log(`  - Best Seller: ${bestSeller} products`);

// Report errors and warnings
console.log('\n' + '='.repeat(60));
if (errors.length > 0) {
  console.log(`\n❌ ERRORS (${errors.length}):`);
  errors.forEach((error) => console.log(`  - ${error}`));
} else {
  console.log('\n✅ No errors found!');
}

if (warnings.length > 0) {
  console.log(`\n⚠️  WARNINGS (${warnings.length}):`);
  warnings.forEach((warning) => console.log(`  - ${warning}`));
}

console.log('\n' + '='.repeat(60));
console.log('\n✨ Verification Complete!\n');

process.exit(errors.length > 0 ? 1 : 0);

