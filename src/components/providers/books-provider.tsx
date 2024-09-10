"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

import { useMounted } from "@/hooks/use-mounted";
import { BookItem } from "@/components/examples/BookCard";

interface BooksContextProps {
  books: BookItem[];
  setBooks: (_books: BookItem[]) => void;
}

const BooksContext = createContext<BooksContextProps | undefined>(undefined);

export const useBooksContext = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooksContext must be used within a BooksProvider");
  }
  return context;
};

export const BooksProvider = ({
  children,
  initialBooks,
}: {
  children: ReactNode;
  initialBooks: BookItem[];
}) => {
  const mounted = useMounted();

  const [books, setBooks] = useState<BookItem[]>(initialBooks);

  if (mounted) {
    return (
      <BooksContext.Provider
        value={{
          books,
          setBooks,
        }}
      >
        <div className="relative h-full">{children}</div>
      </BooksContext.Provider>
    );
  }

  return <></>;
};
