# Astro Framework Setup Specifications

## Project Initialization

### Prerequisites
- Node.js (v16.12.0 or higher)
- npm (v8.0.0 or higher)

### Installation Commands
```bash
# Create new Astro project
npm create astro@latest buffopotamus-website

# Navigate to project directory
cd buffopotamus-website

# Install dependencies
npm install
```

### Project Configuration
- **astro.config.mjs**:
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://buffopotamus.example.com',
  integrations: [],
  output: 'static',
});
```

## Project Structure

```
buffopotamus-website/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── characters/
│   │   ├── stories/
│   │   └── gallery/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── global/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   ├── cards/
│   │   │   ├── StoryCard.astro
│   │   │   ├── FactCard.astro
│   │   │   └── GalleryCard.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       └── Hero.astro
│   ├── layouts/
│   │   ├── MainLayout.astro
│   │   └── StoryLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── stories/
│   │   │   ├── index.astro
│   │   │   ├── makes-a-splash.astro
│   │   │   ├── great-migration.astro
│   │   │   ├── lost-calf.astro
│   │   │   └── saves-the-day.astro
│   │   ├── gallery.astro
│   │   ├── facts.astro
│   │   └── about.astro
│   ├── content/
│   │   ├── stories/
│   │   └── facts/
│   └── styles/
│       ├── global.css
│       ├── variables.css
│       └── components/
├── tsconfig.json
└── package.json
```

## Dependencies

### Core Dependencies
- astro (framework)
- @astrojs/image (for image optimization)

### Additional Dependencies
- gsap (for animations)
- photoswipe (for gallery lightbox)

## Component Architecture

### Global Components
- **Header.astro**: Site header with logo and navigation
- **Footer.astro**: Site footer with copyright and links
- **Navigation.astro**: Main navigation menu

### Layout Components
- **MainLayout.astro**: Base layout for all pages
- **StoryLayout.astro**: Special layout for story pages

### UI Components
- **Button.astro**: Reusable button component
- **Hero.astro**: Hero section component
- **StoryCard.astro**: Card component for story previews
- **FactCard.astro**: Card component for fun facts
- **GalleryCard.astro**: Card component for gallery images

## Data Management

### Content Structure
- Stories stored as Markdown files in `src/content/stories/`
- Facts stored as JSON in `src/content/facts/`
- Image metadata stored in JSON files

### Content Collections (Astro 2.0+)
```javascript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const storiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
    featuredImage: z.string(),
    images: z.array(z.string()).optional(),
  }),
});

const factsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.enum(['buffalo', 'hippo', 'buffopotamus']),
    image: z.string(),
    funActivity: z.string().optional(),
  }),
});

export const collections = {
  'stories': storiesCollection,
  'facts': factsCollection,
};
```

## Styling Approach

### CSS Strategy
- Global CSS variables for colors, typography, spacing
- Component-specific CSS using Astro's scoped styles
- Mobile-first responsive design

### Example Variables
```css
/* src/styles/variables.css */
:root {
  /* Colors */
  --color-water-blue: #4FACFE;
  --color-savanna-green: #8BE36D;
  --color-buffopotamus-purple: #A98ACB;
  --color-buffalo-brown: #8D6E63;
  --color-sunshine-yellow: #FFD54F;
  --color-sky-blue: #90CAF9;
  --color-soft-white: #F5F7FA;
  --color-gentle-gray: #B0BEC5;
  --color-dark-charcoal: #37474F;
  
  /* Typography */
  --font-heading: 'Bubblegum Sans', 'Comic Sans MS', 'Marker Felt', sans-serif;
  --font-body: 'Nunito', 'Arial Rounded MT Bold', 'Helvetica Rounded', sans-serif;
  --font-accent: 'Fredoka One', 'Arial Black', 'Gadget', sans-serif;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;
}
