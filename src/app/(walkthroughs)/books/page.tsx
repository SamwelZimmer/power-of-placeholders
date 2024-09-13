import { Suspense } from "react";

import { BooksProvider } from "@/components/providers/books-provider";
import BookListHeader from "@/components/walkthroughs/books/BookListHeader";
import BookList from "@/components/walkthroughs/books/BookList";
import { BOOKS } from "@/lib/data";

export default function Books() {
  return (
    <Suspense>
      <BooksProvider initialBooks={BOOKS}>
        <div className="w-full fixed left-1/2 -translate-x-1/2 max-w-md px-6 sm:px-0 mx-auto h-full pt-6 sm:pt-16 flex flex-col gap-2">
          <BookListHeader />
          <div className="pt-11 pb-[84px] overflow-scroll hidden-scrollbar">
            <BookList />
          </div>
        </div>

        <div className="fixed bottom-0 w-full h-4 bg-gradient-to-t from-background to-transparent" />
      </BooksProvider>
    </Suspense>
  );
}
