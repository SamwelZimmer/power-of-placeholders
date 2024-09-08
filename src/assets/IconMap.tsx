import React, { ReactElement } from "react";

import { IconMapType } from "@/lib/types";
import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import Linkedin from "@/assets/icons/Linkedin";
import Moon from "@/assets/icons/Moon";
import PaperAirplane from "@/assets/icons/PaperAirplane";
import Sun from "@/assets/icons/Sun";
import Twitter from "@/assets/icons/Twitter";
import User from "@/assets/icons/User";

export const IconMap: IconMapType = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  moon: Moon,
  "paper-airplane": PaperAirplane,
  sun: Sun,
  twitter: Twitter,
  user: User,
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
