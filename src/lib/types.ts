export type IconMapType = {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type TestimonialData = {
  name: string;
  username: string;
  social: string;
  text: string;
  img: string;
};

export type MessageItem = {
  sent_by_user: boolean;
  content: string;
};
