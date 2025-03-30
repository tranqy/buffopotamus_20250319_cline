# Buffopotamus Website Layout Specifications

## Global Layout

### Header
- **Height**: 80px on desktop, 60px on mobile
- **Content**: Logo, navigation menu, character mascot
- **Behavior**: Sticky on desktop, fixed on mobile
- **Navigation**: Horizontal on desktop, hamburger menu on mobile

### Footer
- **Height**: Auto-height based on content
- **Content**: Copyright, credits, simplified navigation
- **Background**: Buffalo Brown (#8D6E63)
- **Text Color**: Soft White (#F5F7FA)

### Container Width
- **Maximum Width**: 1200px
- **Padding**: 20px on desktop, 16px on mobile
- **Breakpoints**:
  - Mobile: 0-767px
  - Tablet: 768px-1023px
  - Desktop: 1024px+

## Page-Specific Layouts

### Home Page
- **Hero Section**:
  - Full-width banner with Buffopotamus character
  - Tagline and brief introduction
  - Height: 60vh on desktop, 40vh on mobile
  
- **Introduction Section**:
  - Two-column layout on desktop (image + text)
  - Single column on mobile (image above text)
  - Background: Soft gradient of Water Blue to Sky Blue
  
- **Featured Content**:
  - Three-column grid on desktop
  - Single column on mobile
  - Cards for Stories, Gallery, and Fun Facts
  - Equal height cards with image, title, and brief description

### Stories Page
- **Stories List**:
  - Two-column grid on desktop
  - Single column on mobile
  - Card layout with story thumbnail, title, and brief description
  
- **Individual Story**:
  - Single column layout
  - Large header image
  - Story text with inline illustrations
  - Previous/Next navigation at bottom
  - "Back to Stories" button at top

### Gallery Page
- **Image Grid**:
  - Masonry layout on desktop (varying heights)
  - Regular grid on mobile (2 columns)
  - Lightbox functionality for image clicks
  - Lazy loading for performance

### Fun Facts Page
- **Facts Layout**:
  - Alternating left/right layout on desktop
  - Single column on mobile
  - Each fact with accompanying illustration
  - Dividers between facts
  - Interactive elements (flip cards, reveal buttons)

## Component Specifications

### Navigation Menu
- **Desktop**: Horizontal list with dropdown for Stories
- **Mobile**: Hamburger menu expanding to full-screen overlay
- **Active State**: Underline or background highlight

### Content Cards
- **Dimensions**: 300px × 400px on desktop, fluid on mobile
- **Elements**: Image (top), Title, Brief text, Link/button
- **Border Radius**: 12px
- **Shadow**: Subtle drop shadow (0 4px 6px rgba(0,0,0,0.1))

### Buttons
- **Primary**: Rounded corners (20px radius), Sunshine Yellow background
- **Secondary**: Rounded corners (20px radius), Savanna Green background
- **Size**: Minimum 44px height for touch targets
- **States**: Hover, Active, Focus with appropriate visual feedback

### Image Specifications
- **Hero Images**: 1600px × 900px (16:9 ratio)
- **Card Thumbnails**: 300px × 200px
- **Gallery Images**: Minimum 800px width, varying heights
- **Story Illustrations**: 800px × 600px
- **Fact Illustrations**: 400px × 400px (1:1 ratio)
