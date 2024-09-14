import { NewsArticleItem } from "@/lib/types";
import NewsArticle from "../walkthroughs/news-articles/NewsArticle";
import { Card } from "../ui/card";

export default function News({ data }: { data: NewsArticleItem[] }) {
  return (
    <Card className="relative px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-t from-transparent to-background" />

      <div className="flex flex-col gap-12 max-h-96 overflow-scroll hidden-scrollbar py-4">
        {data.map((article, i) => {
          return (
            <>
              <NewsArticle key={i} data={article} />
              <hr key={i} className="w-full mx-auto last:hidden" />
            </>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-b from-transparent to-background" />
    </Card>
  );
}
