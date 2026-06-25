import { getNews } from "@/lib/news";
import NewsListItem from "./NewsListItem";

export async function NewsList() {
  const news = await getNews();

  return (
    <ul className='mt-4 flex w-full flex-col gap-6'>
      {news.map((newsItem, idx) => (
        <NewsListItem key={idx} news={newsItem} />
      ))}
    </ul>
  );
}
