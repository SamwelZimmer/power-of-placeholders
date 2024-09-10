import React, { ReactElement } from "react";

import { IconMapType } from "@/lib/types";
import Bin from "@/assets/icons/Bin";
import BookmarkAdd from "@/assets/icons/BookmarkAdd";
import Copy from "@/assets/icons/Copy";
import Facebook from "@/assets/icons/Facebook";
import Filter from "@/assets/icons/Filter";
import Glasses from "@/assets/icons/Glasses";
import Instagram from "@/assets/icons/Instagram";
import Linkedin from "@/assets/icons/Linkedin";
import MagnifyingGlass from "@/assets/icons/MagnifyingGlass";
import Moon from "@/assets/icons/Moon";
import PaperAirplane from "@/assets/icons/PaperAirplane";
import Pencil from "@/assets/icons/Pencil";
import Star from "@/assets/icons/Star";
import StarHalf from "@/assets/icons/StarHalf";
import Sun from "@/assets/icons/Sun";
import Twitter from "@/assets/icons/Twitter";
import User from "@/assets/icons/User";
import Wand from "@/assets/icons/Wand";
import X from "@/assets/icons/X";

export const IconMap: IconMapType = {
  bin: Bin,
  "bookmark-add": BookmarkAdd,
  copy: Copy,
  facebook: Facebook,
  filter: Filter,
  glasses: Glasses,
  instagram: Instagram,
  linkedin: Linkedin,
  "magnifying-glass": MagnifyingGlass,
  moon: Moon,
  "paper-airplane": PaperAirplane,
  pencil: Pencil,
  star: Star,
  "star-half": StarHalf,
  sun: Sun,
  twitter: Twitter,
  user: User,
  wand: Wand,
  x: X,
};

interface IconProps {
  name: keyof typeof IconMap;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = ({
  name,
  size = 16,
  className,
  style,
  ...props
}: IconProps): ReactElement | null => {
  const IconComponent = IconMap[name];
  if (!IconComponent) return null;

  return React.createElement(IconComponent, {
    width: size,
    height: size,
    className,
    style,
    ...props,
  });
};
