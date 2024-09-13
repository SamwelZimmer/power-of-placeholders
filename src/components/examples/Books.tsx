import BookCard from "@/components/walkthroughs/books/BookCard";
import { BookItem } from "@/lib/types";

export default function Books({ books }: { books: BookItem[] }) {
  const limitedBooks = books.slice(0, 3);
  return (
    <div className="flex flex-col gap-2 w-full">
      {limitedBooks.map((book, i) => (
        <BookCard key={i} data={book} />
      ))}
    </div>
  );
}
