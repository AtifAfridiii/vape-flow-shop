const fs = require('fs');
const path = require('path');

// Function to update product files with originalPrice
function updateProductFile(filePath) {
  try {
    // Read the JSON file
    const data = fs.readFileSync(filePath, 'utf8');
    let products = JSON.parse(data);
    
    // Update each product with an originalPrice
    products = products.map(product => {
      // Only add originalPrice if it doesn't already exist
      if (!product.originalPrice) {
        // Generate a dummy original price that's 10-50% higher than the current price
        const increasePercentage = 0.1 + Math.random() * 0.4; // Between 10% and 50%
        const originalPrice = parseFloat((product.price * (1 + increasePercentage)).toFixed(2));
        return {
          ...product,
          originalPrice
        };
      }
      return product;
    });
    
    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    console.log(`Updated ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

// List of product data files to update
const productFiles = [
  'src/data/accessories.json',
  'src/data/best-selling.json',
  'src/data/disposable-vapes.json',
  'src/data/e-liquids.json',
  'src/data/featured.json',
  'src/data/pod-systems.json',
  'src/data/starterkit.json',
  'src/data/trending.json',
  'src/data/vape-kits.json'
];

// Update each product file
productFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    updateProductFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Product price update complete!');