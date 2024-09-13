import { Suspense } from "react";

import { BooksProvider } from "@/components/providers/books-provider";
import BookListHeader from "./BookListHeader";
import BookList from "./BookList";
import { BOOKS } from "@/lib/data";

export default function BooksPage() {
  return (
    <Suspense>
      <BooksProvider initialBooks={BOOKS}>
        <div className="w-full max-w-md px-6 sm:px-0 mx-auto h-full pt-6 sm:pt-16 flex flex-col gap-2">
          <BookListHeader />
          <BookList />
        </div>
      </BooksProvider>
    </Suspense>
  );
}
