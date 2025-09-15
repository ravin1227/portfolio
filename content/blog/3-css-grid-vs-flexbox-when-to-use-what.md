---
title: "CSS Grid vs Flexbox: When to Use What"
date: Mar 10, 2025
readTime: 5 min read
tags: css, flexbox, grid, design
image: /assets/illustrations/thumbnail.jpg
---

# CSS Grid vs Flexbox: When to Use What

![Grid vs Flexbox illustration](./images/grid-vs-flexbox.png)

Both **CSS Grid** and **Flexbox** are powerful layout tools — but they serve different purposes.

## 🔲 CSS Grid

Use when you need **two-dimensional layouts**.

Example:
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

Perfect for dashboards, galleries, and layouts with rows + columns.

## ➡ Flexbox

Use for **one-dimensional layouts** (row *or* column).

Example:
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

Ideal for navbars, cards, and aligning elements.

## 📌 Quick Comparison

| Feature       | Flexbox | CSS Grid |
|--------------|--------|---------|
| Axis         | 1D     | 2D |
| Content-first| ✅     | ❌ |
| Layout-first | ❌     | ✅ |
| Browser support | ✅ | ✅ |

> *Rule of thumb: use Grid for page layout, Flexbox for smaller UI components.*

