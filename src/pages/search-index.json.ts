import type { APIRoute } from 'astro';
import { getAllPosts } from '../utils/posts';

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();

  const searchIndex = posts.map(post => ({
    slug: post.slug,
    lang: post.lang,
    title: post.title,
    summary: post.summary,
    bodyText: post.entry.body ? post.entry.body.replace(/[#*`_~>[\]()]/g, ' ').replace(/\s+/g, ' ').trim() : '',
    threads: post.threads,
  }));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
