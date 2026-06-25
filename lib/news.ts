import { News } from "@/types/News";
import { cacheLife, cacheTag } from 'next/cache';

export async function getNews(): Promise<News[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('news');

  const NEWS_API_KEY = '32a5f9bc65ee4a688899d2d491706b17';

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`,
  );

  const data = await response.json();

  return data.articles.slice(0, 5);
}
