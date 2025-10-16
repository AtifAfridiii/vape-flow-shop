/**
 * Color Converter Utility
 * Converts between hex and HSL color formats for dynamic theming
 */

/**
 * Converts a hexadecimal color to HSL format
 * @param hex - Hex color string (e.g., "#1E40AF" or "1E40AF")
 * @returns HSL string in format "h s% l%" (e.g., "217 100% 35%")
 */
export function hexToHSL(hex: string): string {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Parse hex to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Calculate max and min
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  // Convert to standard HSL values
  const hue = Math.round(h * 360);
  const saturation = Math.round(s * 100);
  const lightness = Math.round(l * 100);

  return `${hue} ${saturation}% ${lightness}%`;
}

/**
 * Converts HSL format to hexadecimal color
 * @param hsl - HSL string in format "h s% l%" (e.g., "217 100% 35%")
 * @returns Hex color string (e.g., "#1E40AF")
 */
export function hslToHex(hsl: string): string {
  const parts = hsl.match(/(\d+(?:\.\d+)?)/g);
  if (!parts || parts.length < 3) {
    throw new Error('Invalid HSL format');
  }

  const h = parseFloat(parts[0]) / 360;
  const s = parseFloat(parts[1]) / 100;
  const l = parseFloat(parts[2]) / 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/**
 * Validates if a string is a valid hex color
 * @param hex - Hex color string to validate
 * @returns true if valid hex color, false otherwise
 */
export function isValidHex(hex: string): boolean {
  return /^#?[0-9A-Fa-f]{6}$/.test(hex);
}

/**
 * Validates if a string is a valid HSL color
 * @param hsl - HSL color string to validate
 * @returns true if valid HSL color, false otherwise
 */
export function isValidHSL(hsl: string): boolean {
  const pattern = /^(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%$/;
  if (!pattern.test(hsl)) return false;

  const parts = hsl.match(/(\d+(?:\.\d+)?)/g);
  if (!parts || parts.length < 3) return false;

  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]);
  const l = parseFloat(parts[2]);

  return h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
}

