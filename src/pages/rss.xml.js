import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { blogUtils } from '../content/config'; // Assuming your utils are here

export async function GET(context) {
  const allPosts = await getCollection('blog');
  const publishedPosts = blogUtils.filterPublished(allPosts);
  const sortedPosts = blogUtils.sortByDate(publishedPosts);

  return rss({
    // `<title>` field in output xml
    title: 'CipherFlow Blog',
    // `<description>` field in output xml
    description: 'Learn how modern encryption works through clear, step-by-step visualizations.',
    // Base URL of your site
    site: context.site,
    // List of `<item>`s in output xml
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // The full link to the post
      link: `/blog/${post.slug}/`,
    })),
    // Optional: Custom XML stylesheet
    stylesheet: '/rss/styles.xsl',
  });
}