// config.ts
import { defineCollection, z, type CollectionEntry } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // Required fields
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    pubDate: z.date(),
    author: z.string().min(1, 'Author is required'),
    
    // Optional fields
    cover: image().optional(),
    coverAlt: z.string().optional(),
    thumbnail: image().optional(),
    thumbnailAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    readTime: z.number().positive().optional(),
    
    // SEO fields
    canonicalURL: z.string().url().optional(),
    socialImage: z.string().optional(),
    
    // Content flags
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    
    // Educational specific fields
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    prerequisites: z.array(z.string()).default([]),
    learningObjectives: z.array(z.string()).default([]),
    
    // Additional metadata
    updatedDate: z.date().optional(),
    relatedPosts: z.array(z.string()).default([]),
    
    // Schema.org structured data
    articleType: z.enum(['article', 'tutorial', 'guide', 'review', 'news']).default('article'),

    // ADD THIS: The visualizer property for our dynamic components
    visualizer: z.string().optional(),
  })
});

// Export collections
export const collections = {
  blog: blogCollection,
};

// NOTE: We no longer need the custom BlogPost type or the validateBlogPost function,
// because CollectionEntry<'blog'> from Astro does this for us automatically and more safely.

// Utility functions for filtering and sorting posts
// All instances of 'BlogPost' have been replaced with Astro's 'CollectionEntry<'blog'>'
export const blogUtils = {
  // Filter out draft posts in production
  filterPublished: (posts: CollectionEntry<'blog'>[]) => {
    return import.meta.env.PROD 
      ? posts.filter(post => !post.data.draft)
      : posts;
  },
  
  // Sort posts by publication date (newest first)
  sortByDate: (posts: CollectionEntry<'blog'>[]) => {
    return posts.sort((a, b) => 
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    );
  },
  
  // Filter posts by category
  filterByCategory: (posts: CollectionEntry<'blog'>[], category: string) => {
    return posts.filter(post => 
      post.data.category?.toLowerCase() === category.toLowerCase()
    );
  },
  
  // Filter posts by tag
  filterByTag: (posts: CollectionEntry<'blog'>[], tag: string) => {
    return posts.filter(post => 
      post.data.tags.some(postTag => 
        postTag.toLowerCase() === tag.toLowerCase()
      )
    );
  },
  
  // Filter posts by difficulty level
  filterByDifficulty: (posts: CollectionEntry<'blog'>[], difficulty: 'beginner' | 'intermediate' | 'advanced') => {
    return posts.filter(post => post.data.difficulty === difficulty);
  },
  
  // Get featured posts
  getFeatured: (posts: CollectionEntry<'blog'>[]) => {
    return posts.filter(post => post.data.featured);
  },
  
  // Get related posts based on tags
  getRelated: (posts: CollectionEntry<'blog'>[], currentPost: CollectionEntry<'blog'>, limit: number = 3) => {
    const currentTags = currentPost.data.tags;
    const relatedPosts = posts
      .filter(post => post.slug !== currentPost.slug)
      .filter(post => 
        post.data.tags.some(tag => currentTags.includes(tag))
      )
      .sort((a, b) => {
        const aMatches = a.data.tags.filter(tag => currentTags.includes(tag)).length;
        const bMatches = b.data.tags.filter(tag => currentTags.includes(tag)).length;
        return bMatches - aMatches;
      });
    
    return relatedPosts.slice(0, limit);
  },
  
  // Get unique tags from all posts
  getAllTags: (posts: CollectionEntry<'blog'>[]) => {
    const tagSet = new Set<string>();
    posts.forEach(post => {
      post.data.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  },
  
  // Get unique categories from all posts
  getAllCategories: (posts: CollectionEntry<'blog'>[]) => {
    const categorySet = new Set<string>();
    posts.forEach(post => {
      if (post.data.category) {
        categorySet.add(post.data.category);
      }
    });
    return Array.from(categorySet).sort();
  },
  
  // Calculate estimated read time based on content
  calculateReadTime: (content: string, wordsPerMinute: number = 200) => {
    if (!content) return 0;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  }
};

// Constants for the blog
export const BLOG_CONFIG = {
  title: 'Educational Blog',
  description: 'Learn, grow, and succeed with our educational content',
  defaultAuthor: 'Blog Team',
  postsPerPage: 10,
  defaultReadTime: 5,
  socialLinks: {
    twitter: 'https://twitter.com/yourblog',
    facebook: 'https://facebook.com/yourblog',
    linkedin: 'https://linkedin.com/company/yourblog',
    github: 'https://github.com/yourblog'
  }
} as const;