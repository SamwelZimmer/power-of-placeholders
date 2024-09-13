"use client";

import { toast } from "sonner";

import { Icon } from "@/assets/IconMap";
import DefaultSearch from "@/components/common/Search";
import { Button } from "@/components/ui/button";
import { DualSlider } from "@/components/ui/slider";
import {
  defaultFilters,
  useBooksContext,
} from "@/components/providers/books-provider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";

export default function BookListHeader() {
  const { searchQuery, setSearchQuery, activeFilters, setActiveFilters } =
    useBooksContext();

  return (
    <div className="flex flex-col fixed w-[calc(100%-48px)] sm:w-full max-w-md z-20 ">
      <div className="w-full flex gap-2 bg-background">
        <DefaultSearch
          value={searchQuery}
          setValue={setSearchQuery}
          placeholder="Search books"
          iconClasses="left-4"
          inputClasses="pl-9"
        />

        <Sheet>
          <SheetTrigger
            className={`aspect-square min-w-9 border ${
              activeFilters == defaultFilters
                ? "border-input bg-background"
                : "bg-secondary border-muted-secondary"
            }  shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
          >
            <Icon name="filter" className="text-inherit w-4 min-w-4" />
          </SheetTrigger>

          <SheetContent className="h-full">
            <SheetHeader className="text-left">
              <SheetTitle className="flex items-center gap-2 mb-6">
                <Icon name="filter" className="" />
                <span>Filter Books</span>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-4 h-full">
              <div className="flex flex-col gap-3">
                <Label>Rating</Label>
                <RatingSlider />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Category</Label>
                <CategoryDropdownSelector />
              </div>

              <div className="h-full mt-8">
                <Button
                  onClick={() => setActiveFilters(defaultFilters)}
                  variant={"secondary"}
                >
                  Clear filters
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Button
          onClick={() => toast.warning("Yeahhhh... this doesn't do anything")}
          className="font-semibold flex items-center gap-2"
        >
          <Icon name="bookmark-add" className="w-4 text-inherit" />
          <span>New</span>
        </Button>
      </div>

      <div className="w-full h-2 bg-gradient-to-t from-transparent to-background" />
    </div>
  );
}

const RatingSlider = () => {
  const { activeFilters, setActiveFilters } = useBooksContext();
  return (
    <div className="relative flex flex-col h-7">
      <DualSlider
        defaultValue={activeFilters.ratingRange}
        onValueChange={(e) =>
          setActiveFilters({ ...activeFilters, ratingRange: e })
        }
        max={5}
        step={1}
        className={""}
      />

      <div className="flex flex-row w-[calc(100%-16px)] mx-auto justify-between mt-2">
        <div className="h-2 w-px relative">
          <span className="absolute -top-1 -left-1 text-sm">0</span>
        </div>
        <div className="h-2 w-px bg-border" />
        <div className="h-2 w-px bg-border" />
        <div className="h-2 w-px bg-border" />
        <div className="h-2 w-px bg-border" />
        <div className="h-2 w-px relative">
          <span className="absolute -top-1 -left-1 text-sm">5</span>
        </div>
      </div>
    </div>
  );
};

const CategoryDropdownSelector = () => {
  const { activeFilters, setActiveFilters } = useBooksContext();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="category-selector"
          variant="outline"
          className="relative w-max"
        >
          <div className="flex">
            {activeFilters.isFiction !== null && (
              <Icon
                name={activeFilters.isFiction ? "wand" : "glasses"}
                className="w-4 mr-1"
              />
            )}

            {activeFilters.isFiction === null
              ? "All"
              : activeFilters.isFiction
              ? "Fiction"
              : "Non-Fiction"}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-max p-1">
        <CategoryDropdownItem
          onClick={() =>
            setActiveFilters({ ...activeFilters, isFiction: null })
          }
          isActive={activeFilters.isFiction === null}
        >
          All
        </CategoryDropdownItem>
        <CategoryDropdownItem
          onClick={() =>
            setActiveFilters({ ...activeFilters, isFiction: true })
          }
          isActive={activeFilters.isFiction === true}
          className="gap-1"
        >
          <Icon name="wand" className="w-4 text-inherit" />
          Fiction
        </CategoryDropdownItem>
        <CategoryDropdownItem
          onClick={() =>
            setActiveFilters({ ...activeFilters, isFiction: false })
          }
          isActive={activeFilters.isFiction === false}
          className="gap-1"
        >
          <Icon name="glasses" className="w-4 text-inherit" />
          Non-Fiction
        </CategoryDropdownItem>
      </PopoverContent>
    </Popover>
  );
};

const CategoryDropdownItem = ({
  children,
  isActive,
  onClick,
  className,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        `rounded-sm flex items-center px-2 h-6 text-sm ${
          isActive && "bg-secondary"
        } hover:bg-secondary hover:text-muted-foreground cursor-pointer`,
        className
      )}
    >
      {children}
    </div>
  );
};
