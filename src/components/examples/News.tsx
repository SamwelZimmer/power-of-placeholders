import { NewsArticleItem } from "@/lib/types";
import NewsArticle from "../walkthroughs/news-articles/NewsArticle";

export default function News({ data }: { data: NewsArticleItem[] }) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-t from-transparent to-background" />

      <div className="flex flex-col gap-12 max-h-96 overflow-scroll hidden-scrollbar pt-6 pb-12">
        {data.map((article, i) => {
          return (
            <>
              <NewsArticle key={i} data={article} />
              <hr key={i} className="w-full mx-auto last:hidden" />
            </>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
