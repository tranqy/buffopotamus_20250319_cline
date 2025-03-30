# Component Structure Specifications

## Core Components

### Header Component
```astro
---
// Header.astro
---
<header class="site-header">
  <div class="container">
    <div class="logo">
      <a href="/">
        <img src="/images/buffopotamus-logo.svg" alt="Buffopotamus" />
      </a>
    </div>
    <nav class="main-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/stories">Stories</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/facts">Fun Facts</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .site-header {
    background-color: var(--color-water-blue);
    padding: var(--space-md) 0;
    /* Additional styles */
  }
  /* More styles */
</style>
```

### Story Card Component
```astro
---
// StoryCard.astro
const { title, description, image, url } = Astro.props;
---
<div class="story-card">
  <div class="story-image">
    <img src={image} alt={title} />
  </div>
  <div class="story-content">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={url} class="button">Read Story</a>
  </div>
</div>

<style>
  .story-card {
    background-color: var(--color-soft-white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .story-card:hover {
    transform: translateY(-5px);
  }
  
  /* More styles */
</style>
```

### Fact Card Component
```astro
---
// FactCard.astro
const { title, content, image, category } = Astro.props;
---
<div class="fact-card" data-category={category}>
  <div class="fact-image">
    <img src={image} alt={title} />
  </div>
  <div class="fact-content">
    <h3>Did You Know?</h3>
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
</div>

<style>
  .fact-card {
    display: flex;
    flex-direction: column;
    background-color: var(--color-soft-white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    margin-bottom: var(--space-lg);
  }
  
  .fact-card[data-category="buffalo"] {
    border-left: 5px solid var(--color-buffalo-brown);
  }
  
  .fact-card[data-category="hippo"] {
    border-left: 5px solid var(--color-water-blue);
  }
  
  .fact-card[data-category="buffopotamus"] {
    border-left: 5px solid var(--color-buffopotamus-purple);
  }
  
  /* More styles */
</style>
```

## Page Components

### Home Page
```astro
---
// index.astro
import MainLayout from '../layouts/MainLayout.astro';
import Hero from '../components/ui/Hero.astro';
import StoryCard from '../components/cards/StoryCard.astro';
import { getCollection } from 'astro:content';

const featuredStories = await getCollection('stories', ({ data }) => {
  return data.featured === true;
});
---

<MainLayout title="Buffopotamus - A Lovable Adventure">
  <Hero 
    title="Meet Buffopotamus!" 
    subtitle="The adorable creature who's part buffalo, part hippopotamus, and all heart!"
    image="/images/characters/buffopotamus-hero.png"
  />
  
  <section class="intro">
    <div class="container">
      <div class="intro-content">
        <h2>What is a Buffopotamus?</h2>
        <p>A Buffopotamus is a special creature with the strength of a buffalo and the swimming skills of a hippopotamus! Join our lovable friend on exciting adventures through grasslands and rivers.</p>
      </div>
      <div class="intro-image">
        <img src="/images/characters/buffopotamus-intro.png" alt="Buffopotamus waving" />
      </div>
    </div>
  </section>
  
  <section class="featured-content">
    <div class="container">
      <h2>Buffopotamus Adventures</h2>
      <div class="story-grid">
        {featuredStories.map((story) => (
          <StoryCard
            title={story.data.title}
            description={story.data.description}
            image={story.data.featuredImage}
            url={`/stories/${story.slug}`}
          />
        ))}
      </div>
      <div class="cta-button">
        <a href="/stories" class="button button-large">See All Stories</a>
      </div>
    </div>
  </section>
  
  <!-- Additional sections -->
</MainLayout>
```

### Stories Page
```astro
---
// stories/index.astro
import MainLayout from '../../layouts/MainLayout.astro';
import StoryCard from '../../components/cards/StoryCard.astro';
import { getCollection } from 'astro:content';

const allStories = await getCollection('stories');
---

<MainLayout title="Buffopotamus Adventures - Stories">
  <section class="page-header">
    <div class="container">
      <h1>Buffopotamus Adventures</h1>
      <p>Join our lovable friend on exciting journeys!</p>
    </div>
  </section>
  
  <section class="stories-grid">
    <div class="container">
      <div class="story-grid">
        {allStories.map((story) => (
          <StoryCard
            title={story.data.title}
            description={story.data.description}
            image={story.data.featuredImage}
            url={`/stories/${story.slug}`}
          />
        ))}
      </div>
    </div>
  </section>
</MainLayout>

<style>
  .page-header {
    background-color: var(--color-buffopotamus-purple);
    color: white;
    padding: var(--space-xl) 0;
    text-align: center;
  }
  
  .story-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--space-lg);
    padding: var(--space-xl) 0;
  }
</style>
```

## Layout Components

### Main Layout
```astro
---
// MainLayout.astro
import Header from '../components/global/Header.astro';
import Footer from '../components/global/Footer.astro';
import '../styles/global.css';

const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Nunito:wght@400;700&family=Fredoka+One&display=swap" rel="stylesheet">
</head>
<body>
  <Header />
  
  <main>
    <slot />
  </main>
  
  <Footer />
</body>
</html>
```

### Story Layout
```astro
---
// StoryLayout.astro
import MainLayout from './MainLayout.astro';

const { frontmatter } = Astro.props;
---

<MainLayout title={`${frontmatter.title} - Buffopotamus Adventures`}>
  <article class="story">
    <div class="story-header">
      <div class="container">
        <a href="/stories" class="back-button">← Back to Stories</a>
        <h1>{frontmatter.title}</h1>
        <img src={frontmatter.featuredImage} alt={frontmatter.title} class="featured-image" />
      </div>
    </div>
    
    <div class="story-content container">
      <slot />
    </div>
    
    <div class="story-navigation container">
      {frontmatter.previousStory && (
        <a href={`/stories/${frontmatter.previousStory.slug}`} class="prev-story">
          ← {frontmatter.previousStory.title}
        </a>
      )}
      
      {frontmatter.nextStory && (
        <a href={`/stories/${frontmatter.nextStory.slug}`} class="next-story">
          {frontmatter.nextStory.title} →
        </a>
      )}
    </div>
  </article>
</MainLayout>

<style>
  .story-header {
    background-color: var(--color-sky-blue);
    padding: var(--space-lg) 0;
  }
  
  .featured-image {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: var(--radius-lg);
    margin: var(--space-md) 0;
  }
  
  .story-content {
    font-size: 1.25rem;
    line-height: 1.8;
    padding: var(--space-xl) 0;
  }
  
  .story-navigation {
    display: flex;
    justify-content: space-between;
    padding: var(--space-xl) 0;
    border-top: 1px solid var(--color-gentle-gray);
  }
  
  /* More styles */
</style>
