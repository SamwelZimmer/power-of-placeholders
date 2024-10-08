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

export type BookItem = {
  title: string;
  description?: string;
  author: string;
  yearPublished?: number;
  isFictional: boolean;
  rating: number;
};

export type NewsArticleItem = {
  type: string; // e.g. politics, sports, tech
  date: string;
  headline: string;
  body: string;
  author: string;
  readTime: number;
};
