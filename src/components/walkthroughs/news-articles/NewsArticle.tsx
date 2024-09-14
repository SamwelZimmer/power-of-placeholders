"use client";

import { NewsArticleItem } from "@/lib/types";

export default function NewsArticle({ data }: { data: NewsArticleItem }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-muted-foreground text-xs mb-2">
        {data.type.toUpperCase()}
      </span>
      <p className="text-2xl font-semibold">{data.headline}</p>
      <p className="line-clamp-2">{data.body}</p>
      <div className="flex items-center mt-2">
        <span>{data.date.toLocaleDateString()}</span>

        <div className="flex items-center gap-2">
          <span>{data.readTime} mins</span>
        </div>
      </div>
    </div>
  );
}
