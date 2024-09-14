import NewsArticle from "@/components/walkthroughs/news-articles/NewsArticle";
import { ARTICLES } from "@/lib/data";

export default function NewsPage() {
  return (
    <div className="w-full px-6 2xl:px-0 max-w-7xl mx-auto h-full flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center pt-6 sm:pt-16 gap-20 lg:gap-24">
      <div className="flex flex-col w-full">
        <div className="w-full bg-muted aspect-video rounded-md mb-6 shadow-inner" />
        <NewsArticle data={ARTICLES[0]} className="max-w-none" />
      </div>

      <aside className="flex flex-col gap-2 sm:min-w-max">
        <span className="font-semibold text-secondary-foreground font-serif">
          Latest News
        </span>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-t from-transparent to-background hidden lg:block" />

          <div className="flex flex-col gap-12  lg:max-h-[calc(100vh-58px-64px-32px)] overflow-scroll hidden-scrollbar pt-6 pb-12">
            {ARTICLES.slice(1, ARTICLES.length).map((article, i) => {
              return (
                <>
                  <NewsArticle key={i} data={article} />
                  <hr
                    key={i}
                    className="w-[calc(100%-48px)] sm:w-full mx-auto last:hidden"
                  />
                </>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-b from-transparent to-background hidden lg:block" />
        </div>
      </aside>
    </div>
  );
}
