# Subcategory Data Summary

This document provides an overview of all the subcategory data created for the vape shop application.

## Disposable Vapes Subcategories

1. **Fruit Flavors**
   - Tropical Mango Blast
   - Berry Fusion Mix
   - Citrus Sunrise
   - Pineapple Paradise

2. **Menthol**
   - Arctic Mint Chill
   - Spearmint Freeze
   - Peppermint Blast

3. **Tobacco**
   - Classic Tobacco Blend
   - Virginia Gold

4. **Dessert**
   - Vanilla Custard Dream
   - Chocolate Fudge Swirl
   - Caramel Macchiato

5. **500-1000 Puffs**
   - Compact 600 Puff
   - Premium 800 Puff

6. **1500+ Puffs**
   - Extended 1500 Puff
   - Long-Lasting 2000 Puff
   - Ultra 3000 Puff

## E-liquids Subcategories

1. **Nicotine Salt**
   - Smooth Nic Salt 20mg
   - Mild Nic Salt 10mg
   - Strong Nic Salt 25mg

2. **Freebase**
   - Classic Freebase 3mg
   - Strong Freebase 6mg

3. **Shortfill**
   - Shortfill 0mg 50ml
   - Shortfill 0mg 100ml
   - Shortfill 0mg 150ml

4. **Nicotine Free**
   - Pure Flavor 0mg
   - Clean Taste 0mg

5. **Fruit Flavors**
   - Tropical Mango Mix
   - Berry Blast Fusion
   - Citrus Sunrise Blend
   - Exotic Pineapple Rush

6. **Menthol**
   - Arctic Menthol Chill
   - Cool Mint Wave

## Pod Systems Subcategories

1. **SMOK Nord**
   - SMOK Nord 4 Kit
   - SMOK Nord 3 Kit

2. **Vaporesso XROS**
   - Vaporesso XROS 3 Kit
   - Vaporesso XROS 2 Kit

3. **Voopoo Drag**
   - Voopoo Drag S Kit
   - Voopoo Drag 3 Kit

4. **Lost Vape Orion**
   - Lost Vape Orion Q Kit

5. **GeekVape**
   - GeekVape L200 Kit
   - GeekVape Aegis X Kit

## Accessories Subcategories

1. **Coils**
   - SMOK Nord Coils Pack of 3
   - Vaporesso XROS Coils Pack of 2
   - GeekVape Coil Pack of 4

2. **Replacement Parts**
   - Replacement Glass Tube
   - O-Ring Seals Pack of 10

3. **Batteries**
   - 18650 Battery 3000mAh
   - 21700 Battery 4000mAh

4. **Chargers**
   - USB-C Fast Charger
   - Wall Adapter Charger

5. **Tanks**
   - Sub-Ohm Tank 5ml
   - Glass Tank 4ml

## Starter Kits Subcategories

1. **Beginner Kits**
   - Entry-Level Vape Kit
   - Simple Starter Kit

2. **Intermediate Kits**
   - Advanced Pod Kit
   - Variable Watt Kit

3. **Advanced Kits**
   - Professional Box Mod Kit
   - Customizable Mod Kit

4. **Pod Kits**
   - Compact Pod Kit
   - Slim Pod Starter Kit

5. **Box Mods**
   - Powerful Box Mod Kit
   - High-Wattage Mod Kit

## Data Structure

All subcategory data follows the same structure as the main product data, with additional fields specific to each subcategory type:
- `subcategory`: The subcategory name
- Additional fields like `puffCount`, `nicotineStrength`, `batteryCapacity`, etc. depending on the product type

## File Organization

All subcategory data is organized in:
```
src/data/subcategories/
```

Each subcategory has its own TypeScript file with the appropriate interface and data array.