import { Icon } from "@/assets/IconMap";
import NewsArticle from "@/components/walkthroughs/news-articles/NewsArticle";
import { FAKE_ARTICLE } from "@/lib/data";
import { NewsArticleItem } from "@/lib/types";

export default function NewsPage() {
  return (
    <div className="w-full px-6 2xl:px-0 max-w-7xl mx-auto h-full flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center pt-6 sm:pt-16 gap-20 lg:gap-24">
      <MainArticle data={FAKE_ARTICLE} />

      <aside className="flex flex-col gap-2 sm:min-w-max">
        <span className="font-semibold text-secondary-foreground font-serif">
          Latest News
        </span>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-t from-transparent to-background hidden lg:block" />

          <div className="flex flex-col gap-12  lg:max-h-[calc(100vh-58px-64px-32px)] overflow-scroll hidden-scrollbar lg:pt-6 pb-12">
            <NewsArticle data={FAKE_ARTICLE} />
            <hr className="w-[calc(100%-48px)] sm:w-full mx-auto" />
            <NewsArticle data={FAKE_ARTICLE} />
            <hr className="w-[calc(100%-48px)] sm:w-full mx-auto" />
            <NewsArticle data={FAKE_ARTICLE} />
            <hr className="w-[calc(100%-48px)] sm:w-full mx-auto" />
            <NewsArticle data={FAKE_ARTICLE} />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-b from-transparent to-background hidden lg:block" />
        </div>
      </aside>
    </div>
  );
}

const MainArticle = ({ data }: { data: NewsArticleItem }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-muted aspect-video rounded-md mb-6 shadow-inner" />

      <div className="flex flex-col gap-2 w-full">
        <span className="text-muted-foreground text-xs mb-2">
          {data.type.toUpperCase()}
        </span>
        <p className="text-3xl font-semibold font-serif">{data.headline}</p>
        <p className="line-clamp-2 font-light text-muted-foreground">
          {data.body}
        </p>
        <div className="flex items-center mt-3 text-xs gap-4 text-muted-foreground">
          <div className="flex items-center gap-2 min-w-max">
            <Icon name="calendar" className="text-inherit h-4" />
            <span>{data.date.toLocaleDateString()}</span>
          </div>

          <div className="flex items-center gap-2 min-w-max">
            <Icon name="clock" className="text-inherit h-4" />
            <span>{data.readTime} mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};
