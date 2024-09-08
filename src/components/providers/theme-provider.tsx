"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { cn } from "@/lib/utils";
import { Icon } from "@/assets/IconMap";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className={cn("", className)}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon
        className="text-muted-foreground hover:text-accent-foreground w-5"
        name={theme === "light" ? "sun" : "moon"}
      />
    </button>
  );
}
