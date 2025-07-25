import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { blogUtils } from '../content/config'; // Make sure this path is correct

// We get the site URL from the environment variables provided by Astro
const site = import.meta.env.SITE;

export async function GET() {
  const allPosts = await getCollection('blog');
  
  // Make sure to filter out drafts so they don't appear in the feed
  const publishedPosts = blogUtils.filterPublished(allPosts);
  const sortedPosts = blogUtils.sortByDate(publishedPosts);

  return rss({
    // The title of your RSS feed
    title: 'CipherFlow | Blog',
    
    // A description of your RSS feed
    description: 'The latest articles, guides, and tutorials on cryptography and data security from CipherFlow.',
    
    // The full URL of your website
    site: site,
    
    // The list of items for your RSS feed
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Creates the full, valid link to the post. Example: https://powergr.github.io/cipherflow-visualizer/blog/blake23-hash/
      link: `${site}/blog/${post.slug}/`,
    })),
    
    // (Optional) We are removing the custom stylesheet link to prevent build errors.
  });
}