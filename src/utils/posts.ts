import { getCollection, type CollectionEntry } from 'astro:content';

export interface ProcessedPost {
  slug: string;
  lang: 'pt' | 'en';
  title: string;
  date: Date;
  threads: string[];
  summary: string;
  entry: CollectionEntry<'posts'>;
  bannerUrl: string | null;
  hasAlternateLang: boolean;
}

// Global cache for images in content directory
const bannerImages = import.meta.glob('/src/content/posts/**/*.{jpg,jpeg,png,webp,svg}', { eager: true, import: 'default' });

/**
 * Normaliza o ID de uma entrada de coleção para extrair o slug da pasta e o idioma.
 * Exemplo: "dominando-astro/pt" -> { slug: "dominando-astro", lang: "pt" }
 */
export function parsePostId(id: string): { slug: string; lang: 'pt' | 'en' } {
  const parts = id.replace(/\\/g, '/').split('/');
  const langWithExt = parts.pop() || '';
  const lang = langWithExt.replace(/\.(md|mdx)$/, '') as 'pt' | 'en';
  const slug = parts.join('/');
  return { slug, lang };
}

/**
 * Encontra a imagem de banner (banner.*) localizada na mesma pasta do post.
 */
export function getPostBannerUrl(slug: string): string | null {
  for (const path in bannerImages) {
    if (path.includes(`/src/content/posts/${slug}/banner.`)) {
      return bannerImages[path] as string;
    }
  }
  return null;
}

/**
 * Recupera todos os posts agrupados, aplicando validação estrita de threads entre PT e EN.
 */
export async function getAllPosts(): Promise<ProcessedPost[]> {
  const allEntries = await getCollection('posts');
  
  // Agrupar entradas por slug da pasta do post
  const postsBySlug: Record<string, { pt?: CollectionEntry<'posts'>; en?: CollectionEntry<'posts'> }> = {};

  for (const entry of allEntries) {
    const { slug, lang } = parsePostId(entry.id);
    if (!postsBySlug[slug]) {
      postsBySlug[slug] = {};
    }
    if (lang === 'pt' || lang === 'en') {
      postsBySlug[slug][lang] = entry;
    }
  }

  const processedPosts: ProcessedPost[] = [];

  for (const [slug, versions] of Object.entries(postsBySlug)) {
    const { pt, en } = versions;

    // VALIDAÇÃO ESTRITA: Se ambas as versões existirem, verificar se as threads correspondem exatamente
    if (pt && en) {
      const ptThreads = [...pt.data.threads].sort().join(',');
      const enThreads = [...en.data.threads].sort().join(',');

      if (ptThreads !== enThreads) {
        throw new Error(
          `[BUILD ERROR] Mismatched threads in post "${slug}"!\n` +
          `  pt.md threads: [${pt.data.threads.join(', ')}]\n` +
          `  en.md threads: [${en.data.threads.join(', ')}]\n` +
          `Threads must be identical across both language versions.`
        );
      }
    }

    const bannerUrl = getPostBannerUrl(slug);

    if (pt) {
      processedPosts.push({
        slug,
        lang: 'pt',
        title: pt.data.title,
        date: pt.data.date,
        threads: pt.data.threads,
        summary: pt.data.summary,
        entry: pt,
        bannerUrl,
        hasAlternateLang: Boolean(en),
      });
    }

    if (en) {
      processedPosts.push({
        slug,
        lang: 'en',
        title: en.data.title,
        date: en.data.date,
        threads: en.data.threads,
        summary: en.data.summary,
        entry: en,
        bannerUrl,
        hasAlternateLang: Boolean(pt),
      });
    }
  }

  // Ordenar por data mais recente primeiro
  return processedPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

/**
 * Obtém posts filtrados por idioma e opcionalmente por thread.
 */
export async function getPostsByLang(lang: 'pt' | 'en', threadFilter?: string): Promise<ProcessedPost[]> {
  const posts = await getAllPosts();
  let filtered = posts.filter(p => p.lang === lang);

  if (threadFilter) {
    filtered = filtered.filter(p => p.threads.includes(threadFilter));
  }

  return filtered;
}

/**
 * Retorna a contagem de posts por thread para um determinado idioma.
 */
export async function getThreadsWithCount(lang: 'pt' | 'en'): Promise<{ name: string; count: number }[]> {
  const posts = await getPostsByLang(lang);
  const counts: Record<string, number> = {};

  for (const post of posts) {
    for (const thread of post.threads) {
      counts[thread] = (counts[thread] || 0) + 1;
    }
  }

  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}
