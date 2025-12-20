# Profe Chill Landing Page

A modern, multilingual landing page built with Astro for Profe Chill - Spanish/English Corporate Language Training.

## 🚀 Features

- ✅ **Multilingual Support**: English and Spanish versions (`/en/` and `/es/`)
- ✅ **Dark Mode**: Persistent theme toggle with localStorage
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Modern Animations**: Smooth transitions and scroll animations
- ✅ **SEO Optimized**: Meta tags, structured data, and sitemap
- ✅ **Interactive Components**: Accordions, carousels, modals
- ✅ **WhatsApp Integration**: Floating action button with pre-filled messages
- ✅ **Newsletter Modal**: Email subscription with form validation
- ✅ **Accessibility**: WCAG 2.1 AA compliant

## 📋 Sections

1. **Hero** - Eye-catching introduction with CTAs
2. **Value Proposition** - 4 key benefits
3. **About Me** - Professional bio and language expertise
4. **How My Lessons Work** - Interactive accordion with methodology
5. **Corporate Focus** - Industry-specific use cases
6. **Experience & Impact** - Animated statistics
7. **Testimonials** - Auto-playing carousel with 5 reviews
8. **FAQ** - Searchable accordion with 8 questions
9. **Final CTA** - Strong closing with multiple action options

## 🛠️ Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 3.x
- **UI Components**: React 19 (for interactive components)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins + Inter)
- **Dark Mode**: Tailwind class-based strategy
- **Deployment**: Ready for Vercel/Netlify

## 🎨 Brand Colors

```css
--sky-blue: #93bcfc
--beige: #fdedd2
--light-green: #a9e277
--gold: #fac504
--orange: #ff8940
```

## 📦 Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Routes

- `/` - Redirects to `/en/`
- `/en/` - English landing page
- `/es/` - Spanish landing page

## 📝 Content Management

All content is managed through:

1. **Translation files**: `src/i18n/en.json` and `src/i18n/es.json`
2. **Component props**: Language-specific content in components
3. **Easy to edit**: No code knowledge needed to update text

### How to Edit Content

#### Update Text Content
Edit the JSON files in `src/i18n/`:
- `en.json` for English
- `es.json` for Spanish

#### Update Testimonials
Edit in `src/components/Testimonials.tsx` - look for the testimonials array.

#### Update FAQ
Edit in `src/components/FAQ.tsx` - look for the faqs array.

#### Update WhatsApp Number
Edit in:
- `src/components/WhatsAppFAB.astro`
- `src/components/FinalCTA.astro`

#### Update Contact Information
Edit in `src/components/Footer.astro`

## 🎯 SEO Configuration

Update meta tags in `src/pages/en/index.astro` and `src/pages/es/index.astro`:
- Title
- Description
- Keywords

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's class strategy:
- Toggle in header and footer
- Preference saved to localStorage
- System preference detection on first visit

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

Build output shows optimized bundles:
- Small component chunks (< 10KB gzipped)
- Tree-shaken dependencies
- Lazy-loaded interactive components
- Optimized for Lighthouse scores 90+

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Set these in your deployment platform:

```env
# Optional: Set site URL for canonical links
SITE=https://profechill.com

# Newsletter integration (when implemented)
NEWSLETTER_API_KEY=xxx

# Analytics (when implemented)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 📂 Project Structure

```
src/
├── components/         # All UI components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Footer.astro
│   ├── HowItWorks.tsx  # React components
│   └── ...
├── layouts/
│   └── Layout.astro    # Base layout with SEO
├── pages/
│   ├── index.astro     # Redirects to /en/
│   ├── en/
│   │   └── index.astro # English page
│   └── es/
│       └── index.astro # Spanish page
├── i18n/
│   ├── en.json         # English translations
│   └── es.json         # Spanish translations
├── styles/
│   └── global.css      # Global styles + Tailwind
└── utils/
    └── i18n.ts         # i18n utilities
```

## 🎨 Customization

### Add New Section

1. Create component in `src/components/`
2. Import in page files
3. Add translations to i18n files
4. Update navigation if needed

### Change Colors

Edit `tailwind.config.mjs` brand colors:

```js
colors: {
  'brand': {
    'sky-blue': '#93bcfc',
    // ... add or modify colors
  }
}
```

## 📄 License

Private - All rights reserved to Profe Chill

## 👤 Contact

For questions or updates, contact the project maintainer.

---

**Built with ❤️ using Astro**
