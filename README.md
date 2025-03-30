# Buffopotamus Website Project

This repository contains the specifications and implementation for the Buffopotamus website, a child-friendly website featuring the adorable Buffopotamus character - a fictional hybrid of a buffalo and hippopotamus.

## Project Overview

The Buffopotamus website is designed for school-aged children (6-12 years old) and features:

- Adventure stories featuring the Buffopotamus character
- A gallery of Buffopotamus images
- Fun facts about buffalos, hippopotamuses, and the fictional buffopotamus
- Child-friendly design with bright colors and engaging content

The website is built using the Astro framework and is designed to be deployed to Cloudflare Pages.

## Project Structure

### Specifications

The `specs` directory contains detailed specifications for the project:

- **Project Overview**: [specs/project-overview.md](specs/project-overview.md)
- **Character Design**: 
  - [specs/character/character-design.md](specs/character/character-design.md)
  - [specs/character/personality.md](specs/character/personality.md)
- **Content**:
  - [specs/content/stories.md](specs/content/stories.md)
  - [specs/content/fun-facts.md](specs/content/fun-facts.md)
- **Design**:
  - [specs/design/color-palette.md](specs/design/color-palette.md)
  - [specs/design/typography.md](specs/design/typography.md)
  - [specs/design/layout.md](specs/design/layout.md)
- **Technical**:
  - [specs/technical/astro-setup.md](specs/technical/astro-setup.md)
  - [specs/technical/component-structure.md](specs/technical/component-structure.md)
  - [specs/technical/cloudflare-deployment.md](specs/technical/cloudflare-deployment.md)
- **Implementation Plan**: [specs/implementation-plan.md](specs/implementation-plan.md)
- **Images**: [specs/images/README.md](specs/images/README.md)

### Implementation

The implementation of the website will be organized according to the Astro project structure outlined in the technical specifications:

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
│   │   ├── cards/
│   │   └── ui/
│   ├── layouts/
│   ├── pages/
│   ├── content/
│   └── styles/
├── tsconfig.json
└── package.json
```

## Getting Started

To start implementing the Buffopotamus website:

1. Review the specifications in the `specs` directory
2. Follow the implementation plan in [specs/implementation-plan.md](specs/implementation-plan.md)
3. Set up the Astro project as described in [specs/technical/astro-setup.md](specs/technical/astro-setup.md)
4. Implement the components and pages according to the design specifications
5. Deploy the website to Cloudflare Pages as described in [specs/technical/cloudflare-deployment.md](specs/technical/cloudflare-deployment.md)

## Development

### Prerequisites
- Node.js (v16.12.0 or higher)
- npm (v8.0.0 or higher)

### Installation

```bash
# Create new Astro project
npm create astro@latest buffopotamus-website

# Navigate to project directory
cd buffopotamus-website

# Install dependencies
npm install
```

### Development Server

```bash
# Start the development server
npm run dev
```

### Build

```bash
# Build the website for production
npm run build
```

## Deployment

The website is designed to be deployed to Cloudflare Pages. See [specs/technical/cloudflare-deployment.md](specs/technical/cloudflare-deployment.md) for detailed deployment instructions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
