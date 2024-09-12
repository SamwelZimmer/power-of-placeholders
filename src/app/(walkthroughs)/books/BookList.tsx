"use client";

import BookCard from "@/components/examples/BookCard";
import {
  defaultFilters,
  useBooksContext,
} from "@/components/providers/books-provider";
import { Button } from "@/components/ui/button";

export default function BookList() {
  const { filteredBooks, setSearchQuery, setActiveFilters } = useBooksContext();

  const clearSearchCriteria = () => {
    setSearchQuery("");
    setActiveFilters(defaultFilters);
  };

  if (filteredBooks.length === 0) {
    return (
      <div className="flex flex-col pt-6 mx-auto items-center justify-between gap-2">
        <span className="text-muted-foreground">
          No books match these criteria
        </span>
        <Button
          onClick={clearSearchCriteria}
          variant="secondary"
          className="w-max"
        >
          Clear criteria
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {filteredBooks.map((book, i) => (
        <BookCard key={i} data={book} />
      ))}
    </div>
  );
}
