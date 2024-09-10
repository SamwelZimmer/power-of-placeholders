"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Icon } from "@/assets/IconMap";
import DefaultSearch from "@/components/common/Search";
import { Button } from "@/components/ui/button";

export default function BookListHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full flex gap-2">
      <DefaultSearch
        value={searchQuery}
        setValue={setSearchQuery}
        placeholder="Search books"
        iconClasses="left-4"
        inputClasses="pl-9"
      />

      <Button className="aspect-square" variant={"outline"}>
        <Icon name="filter" className="text-inherit w-4 min-w-4" />
      </Button>

      <Button
        onClick={() => toast.warning("Yeahhhh... this doesn't do anything")}
        className="font-semibold flex items-center gap-2"
      >
        <Icon name="bookmark-add" className="w-4 text-inherit" />
        <span>New</span>
      </Button>
    </div>
  );
}
