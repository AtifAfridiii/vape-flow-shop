import { describe, it, expect } from 'vitest';
import {
  products,
  disposableVapesProducts,
  eLiquidsProducts,
  podSystemsProducts,
  accessoriesProducts,
  trendingProducts,
  bestSellingProducts,
  featuredProducts,
  categories,
} from '@/data/products';

describe('Product Data Structure', () => {
  it('should have all products loaded', () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it('should have category-specific products', () => {
    expect(disposableVapesProducts.length).toBeGreaterThan(0);
    expect(eLiquidsProducts.length).toBeGreaterThan(0);
    expect(podSystemsProducts.length).toBeGreaterThan(0);
    expect(accessoriesProducts.length).toBeGreaterThan(0);
  });

  it('should have section-specific products', () => {
    expect(trendingProducts.length).toBeGreaterThan(0);
    expect(bestSellingProducts.length).toBeGreaterThan(0);
    expect(featuredProducts.length).toBeGreaterThan(0);
  });

  it('should have all required categories', () => {
    expect(categories).toContain('All Products');
    expect(categories).toContain('Disposable Vapes');
    expect(categories).toContain('Pod Systems');
    expect(categories).toContain('E-liquids');
    expect(categories).toContain('Accessories');
  });
});

describe('Product Image URLs', () => {
  it('should have URL-based images for all products', () => {
    products.forEach((product) => {
      expect(product.image).toBeDefined();
      expect(typeof product.image).toBe('string');
      expect(product.image).toMatch(/^https?:\/\//);
    });
  });

  it('should have URL-based images for trending products', () => {
    trendingProducts.forEach((product) => {
      expect(product.image).toBeDefined();
      expect(typeof product.image).toBe('string');
      expect(product.image).toMatch(/^https?:\/\//);
    });
  });

  it('should have URL-based images for best-selling products', () => {
    bestSellingProducts.forEach((product) => {
      expect(product.image).toBeDefined();
      expect(typeof product.image).toBe('string');
      expect(product.image).toMatch(/^https?:\/\//);
    });
  });

  it('should have URL-based images for featured products', () => {
    featuredProducts.forEach((product) => {
      expect(product.image).toBeDefined();
      expect(typeof product.image).toBe('string');
      expect(product.image).toMatch(/^https?:\/\//);
    });
  });
});

describe('Category-Specific Display', () => {
  it('should have correct category for disposable vapes', () => {
    disposableVapesProducts.forEach((product) => {
      expect(product.category).toBe('Disposable Vapes');
    });
  });

  it('should have correct category for e-liquids', () => {
    eLiquidsProducts.forEach((product) => {
      expect(product.category).toBe('E-liquids');
    });
  });

  it('should have correct category for pod systems', () => {
    podSystemsProducts.forEach((product) => {
      expect(product.category).toBe('Pod Systems');
    });
  });

  it('should have correct category for accessories', () => {
    accessoriesProducts.forEach((product) => {
      expect(product.category).toBe('Accessories');
    });
  });

  it('should filter products by category correctly', () => {
    const disposableVapesFiltered = products.filter(
      (p) => p.category === 'Disposable Vapes'
    );
    expect(disposableVapesFiltered.length).toBe(disposableVapesProducts.length);

    const eLiquidsFiltered = products.filter((p) => p.category === 'E-liquids');
    expect(eLiquidsFiltered.length).toBe(eLiquidsProducts.length);

    const podSystemsFiltered = products.filter(
      (p) => p.category === 'Pod Systems'
    );
    expect(podSystemsFiltered.length).toBe(podSystemsProducts.length);

    const accessoriesFiltered = products.filter(
      (p) => p.category === 'Accessories'
    );
    expect(accessoriesFiltered.length).toBe(accessoriesProducts.length);
  });
});

describe('Product Properties', () => {
  it('should have all required properties for each product', () => {
    products.forEach((product) => {
      expect(product.id).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.price).toBeDefined();
      expect(product.image).toBeDefined();
      expect(product.category).toBeDefined();
      expect(typeof product.price).toBe('number');
      expect(product.price).toBeGreaterThan(0);
    });
  });

  it('should have optional properties when applicable', () => {
    const featuredProduct = products.find((p) => p.featured);
    if (featuredProduct) {
      expect(featuredProduct.featured).toBe(true);
    }

    const trendingProduct = products.find((p) => p.trending);
    if (trendingProduct) {
      expect(trendingProduct.trending).toBe(true);
    }

    const bestSellerProduct = products.find((p) => p.bestSeller);
    if (bestSellerProduct) {
      expect(bestSellerProduct.bestSeller).toBe(true);
    }
  });
});

