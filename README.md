# Dev Portfolio

A modern, responsive developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **Next.js 14** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for smooth animations
- 🎯 **Lucide React** for beautiful icons
- 📱 **Responsive Design** for all devices
- 🔤 **Google Fonts** (Instrument Sans & Outfit)

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── work/
│   │   └── page.tsx          # Work/Projects page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with navbar and footer
│   └── page.tsx              # Home page
├── components/
│   ├── Footer.tsx            # Footer component
│   └── Navbar.tsx            # Navigation component
```

## Pages

- **Home** (`/`) - Hero section with introduction and features
- **About** (`/about`) - Personal information, skills, and experience
- **Work** (`/work`) - Portfolio projects and case studies

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Fonts
The project uses two Google Fonts:
- **Instrument Sans** - Primary font for body text
- **Outfit** - Secondary font for headings

### Colors
The color scheme is defined in Tailwind CSS with:
- Primary: Blue (`blue-600`)
- Secondary: Purple (`purple-600`)
- Background: Light gray (`gray-50`)

### Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Social links and quick navigation
- **Layout**: Dynamic layout system with navbar, main content, and footer

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Instrument Sans, Outfit)

## Development

- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript
- **Styling**: Tailwind CSS with custom configuration

## Deployment

This project can be deployed on:
- Vercel (recommended)
- Netlify
- Any platform that supports Next.js

## License

MIT License - feel free to use this template for your own portfolio!