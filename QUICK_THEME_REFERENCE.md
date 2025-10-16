# Quick Theme Reference Guide

## 🎨 Colors at a Glance

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | #1E40AF | Buttons, links, active states |
| Dark Navy | #1E3A8A | Hover states, emphasis |
| Dark Gray | #1F2937 | Primary text, headings |
| Medium Gray | #6B7280 | Secondary text, labels |
| Light Gray | #E5E7EB | Hover backgrounds, borders |
| White | #FFFFFF | Main background |
| Red | #EF4444 | Delete, error, destructive |

---

## 📝 Typography Quick Reference

```
Headings:     font-semibold (600)
Body Text:    font-normal (400)
Line Height:  1.6 for body, 1.2 for headings
Letter Space: -0.01em for headings
```

---

## 🧩 Component Patterns

### Primary Button
```tsx
<button className="bg-blue-700 hover:bg-blue-800 text-white font-medium">
  Action
</button>
```

### Secondary Button
```tsx
<button className="bg-gray-100 hover:bg-gray-200 text-gray-900">
  Secondary
</button>
```

### Card
```tsx
<div className="bg-white border border-gray-200 rounded shadow-sm p-6">
  Content
</div>
```

### Navigation Tab
```tsx
<button className={`border-b-2 px-4 py-3 ${
  isActive 
    ? 'text-blue-700 border-blue-700' 
    : 'text-gray-600 border-transparent'
}`}>
  Tab
</button>
```

### Text Hierarchy
```tsx
<h1 className="text-3xl font-semibold text-gray-900">Heading</h1>
<p className="text-base text-gray-700">Body text</p>
<p className="text-sm text-gray-600">Secondary text</p>
```

---

## 📏 Spacing Scale

```
Compact:   p-2 (0.5rem)
Standard:  p-4 (1rem)
Generous:  p-6 (1.5rem)
Large:     p-8 (2rem)
```

---

## ⚡ Transitions

```
Duration:  duration-200 (0.2s)
Easing:    ease-out
Property:  color, opacity, border
```

---

## ✅ Do's

✅ Use CSS variables
✅ Follow the color palette
✅ Use consistent spacing
✅ Apply subtle shadows
✅ Keep animations simple
✅ Test accessibility
✅ Use professional colors
✅ Maintain consistency

---

## ❌ Don'ts

❌ Hardcode colors
❌ Use bright colors
❌ Add heavy shadows
❌ Create complex animations
❌ Use inconsistent spacing
❌ Add decorative elements
❌ Use oversized icons
❌ Mix design systems

---

## 🔍 Accessibility Checklist

- [ ] Text contrast ≥ 4.5:1
- [ ] Focus states visible
- [ ] Colors aren't only indicator
- [ ] Font sizes readable
- [ ] Line heights adequate
- [ ] Touch targets ≥ 44x44px

---

## 📱 Responsive Breakpoints

```
Mobile:    < 640px
Tablet:    640px - 1024px
Desktop:   > 1024px
```

---

## 🎯 Common Tasks

### Change Button Color
```tsx
// From
className="bg-accent"

// To
className="bg-blue-700 hover:bg-blue-800"
```

### Update Text Color
```tsx
// From
className="text-foreground"

// To
className="text-gray-900"
```

### Add Card Styling
```tsx
className="bg-white border border-gray-200 rounded shadow-sm"
```

### Create Navigation
```tsx
className={`border-b-2 ${isActive ? 'text-blue-700 border-blue-700' : 'text-gray-600'}`}
```

---

## 🚀 Quick Start

1. **Use Navy Blue** for primary actions
2. **Use Gray** for text and secondary elements
3. **Use White** for backgrounds
4. **Use Light Gray** for borders and hover states
5. **Use Red** only for destructive actions

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| PROFESSIONAL_THEME_UPDATE.md | Detailed theme info |
| THEME_CHANGES_SUMMARY.md | Before/after comparison |
| COLOR_PALETTE_GUIDE.md | Color reference |
| THEME_IMPLEMENTATION_GUIDE.md | Implementation guide |
| QUICK_THEME_REFERENCE.md | This file |

---

## 🔗 CSS Variables

```css
--primary: 217 100% 35%;        /* Navy Blue */
--accent: 217 100% 30%;         /* Dark Navy */
--foreground: 0 0% 15%;         /* Dark Gray */
--muted-foreground: 0 0% 50%;   /* Medium Gray */
--border: 0 0% 90%;             /* Border Gray */
--background: 0 0% 100%;        /* White */
```

---

## 💡 Pro Tips

1. **Always use CSS variables** - Makes updates easier
2. **Test on mobile** - Ensure responsive design
3. **Check contrast** - Use WCAG checker
4. **Keep it simple** - Minimal is better
5. **Be consistent** - Follow the patterns
6. **Test accessibility** - Use screen readers
7. **Get feedback** - Ask users for input

---

## 🆘 Troubleshooting

**Colors look wrong?**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check CSS variables in index.css

**Spacing looks off?**
- Verify padding/margin classes
- Check responsive breakpoints
- Test on different screen sizes

**Buttons not styled?**
- Ensure className is applied
- Check for conflicting styles
- Verify Tailwind is configured

**Hover effects not working?**
- Check hover: prefix
- Verify transition duration
- Test in different browsers

---

## 📞 Support

For detailed information, see:
- **Colors**: COLOR_PALETTE_GUIDE.md
- **Implementation**: THEME_IMPLEMENTATION_GUIDE.md
- **Changes**: THEME_CHANGES_SUMMARY.md

---

**Last Updated**: 2025-10-16
**Status**: ✅ Complete
**Version**: 1.0

