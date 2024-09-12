import { Suspense } from "react";

import { BookItem } from "@/components/examples/BookCard";
import { BooksProvider } from "@/components/providers/books-provider";
import BookListHeader from "./BookListHeader";
import BookList from "./BookList";

const BOOK_LIST: BookItem[] = [
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto, ipsam aliquam rem et quia ad delectus beatae dolorum harum.",
    author: "Bertram Man",
    isFiction: true,
    yearPublished: 1212,
    rating: 3.5,
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto, ipsam aliquam rem et quia ad delectus beatae dolorum harum.",
    author: "Bertram Man",
    isFiction: true,
    yearPublished: 1212,
    rating: 3.5,
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto, ipsam aliquam rem et quia ad delectus beatae dolorum harum.",
    author: "Bertram Man",
    isFiction: true,
    yearPublished: 1212,
    rating: 3.5,
  },
];

export default function BooksPage() {
  return (
    <Suspense>
      <BooksProvider initialBooks={BOOK_LIST}>
        <div className="w-full max-w-md px-6 sm:px-0 mx-auto h-full pt-6 sm:pt-16 flex flex-col gap-2">
          <BookListHeader />
          <BookList />
        </div>
      </BooksProvider>
    </Suspense>
  );
}
