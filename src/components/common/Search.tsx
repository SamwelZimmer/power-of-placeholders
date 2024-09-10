"use client";

import { Icon } from "@/assets/IconMap";
import { cn } from "@/lib/utils";

interface SearchProps {
  value: string;
  setValue: (_value: string) => void;
  placeholder?: string;
  containerClasses?: string;
  iconClasses?: string;
  inputClasses?: string;
  showClearButton?: boolean;
}

export default function DefaultSearch({
  value,
  setValue,
  placeholder,
  containerClasses,
  iconClasses,
  inputClasses,
  showClearButton = true,
}: SearchProps) {
  return (
    <div className={cn("relative w-full", containerClasses)}>
      <Icon
        name="magnifying-glass"
        className={cn(
          "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
          iconClasses
        )}
      />

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8",
          inputClasses
        )}
      />

      {showClearButton && value.length > 0 && (
        <button
          onClick={() => setValue("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2"
        >
          <Icon
            name={"x"}
            className="text-muted-foreground hover:text-primary w-4"
          />
        </button>
      )}
    </div>
  );
}
