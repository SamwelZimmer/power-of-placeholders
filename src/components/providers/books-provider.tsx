"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useMounted } from "@/hooks/use-mounted";
import { BookItem } from "@/lib/types";

type BookFilters = {
  ratingRange: number[];
  isFiction: null | boolean;
};

export const defaultFilters: BookFilters = {
  ratingRange: [0, 5],
  isFiction: null,
};

interface BooksContextProps {
  books: BookItem[];
  setBooks: (_books: BookItem[]) => void;
  filteredBooks: BookItem[];
  searchQuery: string;
  setSearchQuery: (_searchQuery: string) => void;
  activeFilters: BookFilters;
  setActiveFilters: (_activeFilters: BookFilters) => void;
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [books, setBooks] = useState<BookItem[]>(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] =
    useState<BookFilters>(defaultFilters);

  const baseRoot = pathname;

  let filteredBooks = books;

  // filter by search query
  if (searchQuery) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery) ||
        book.description?.toLowerCase().includes(searchQuery)
    );
  }

  // filter by filters
  if (activeFilters != defaultFilters) {
    // filter by fiction or non-fiction
    if (activeFilters.isFiction !== null) {
      filteredBooks = filteredBooks.filter(
        (book) => book.isFictional == activeFilters.isFiction
      );
    }

    // filter by rating range
    if (activeFilters.ratingRange !== defaultFilters.ratingRange) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.rating >= activeFilters.ratingRange[0] &&
          book.rating <= activeFilters.ratingRange[1]
      );
    }
  }

  useEffect(() => {
    // read search params when the component mounts
    const search = searchParams.get("search") || "";
    const isFiction = searchParams.get("isFiction");
    const minRating = searchParams.get("min");
    const maxRating = searchParams.get("max");

    // set initial search and filters based on URL parameters
    if (search) setSearchQuery(search);
    if (isFiction !== null) {
      setActiveFilters((prevFilters) => ({
        ...prevFilters,
        isFiction: isFiction === "true",
      }));
    }
    if (minRating && maxRating) {
      setActiveFilters((prevFilters) => ({
        ...prevFilters,
        ratingRange: [parseFloat(minRating), parseFloat(maxRating)],
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    // update the URL search params based on searchQuery and activeFilters
    const params = [];
    if (searchQuery) {
      params.push(`search=${searchQuery}`);
    }

    if (activeFilters.isFiction !== null) {
      params.push(`isFiction=${activeFilters.isFiction}`);
    }

    if (activeFilters.ratingRange !== defaultFilters.ratingRange) {
      params.push(
        `min=${activeFilters.ratingRange[0]}&max=${activeFilters.ratingRange[1]}`
      );
    }

    const queryString = params.join("&");

    router.push(`${baseRoot}?${queryString}`);
  }, [searchQuery, activeFilters, baseRoot, router]);

  if (mounted) {
    return (
      <BooksContext.Provider
        value={{
          books,
          setBooks,
          filteredBooks,
          searchQuery,
          setSearchQuery,
          activeFilters,
          setActiveFilters,
        }}
      >
        <div className="relative h-full">{children}</div>
      </BooksContext.Provider>
    );
  }

  return <></>;
};
