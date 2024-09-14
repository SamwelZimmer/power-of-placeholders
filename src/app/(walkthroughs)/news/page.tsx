import NewsArticle from "@/components/walkthroughs/news-articles/NewsArticle";
import { FAKE_ARTICLE } from "@/lib/data";

export default function NewsPage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <NewsArticle data={FAKE_ARTICLE} />
      </div>
    </div>
  );
}
