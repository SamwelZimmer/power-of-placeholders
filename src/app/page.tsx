import Books from "@/components/examples/Books";
import Messages from "@/components/examples/Messages";
import Testimonial from "@/components/examples/Testimonial";

import {
  TESTIMONIALS,
  TEXT_MESSAGES,
  PLACEHOLDER_TEXT_MESSAGES,
  PLACEHOLDER_BOOK,
  BOOKS,
} from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col py-12">
      <SectionHeading text="Messages" className="mt-0" />

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 mx-auto max-w-max gap-6 px-6 sm:px-0">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial className="hidden lg:block" />
        <Testimonial className="hidden xl:block" />
        <Testimonial className="hidden xl:block" />
      </div>

      <HorizontalVsDivider className="my-12" />

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 mx-auto max-w-max gap-6 px-6 sm:px-0">
        {TESTIMONIALS.map((testimonial, i) => (
          <Testimonial
            key={i}
            data={testimonial}
            className={
              i > 2 ? (i === 3 ? "hidden lg:block" : "hidden xl:block") : ""
            }
          />
        ))}
      </div>

      <SectionHeading text="Messages" />

      <div className="flex flex-col lg:flex-row gap-6 px-6 sm:px-0 w-full justify-center items-center">
        <Messages data={PLACEHOLDER_TEXT_MESSAGES} />
        <VerticalVsDivider className="text-muted-foreground hidden lg:block" />
        <HorizontalVsDivider className="lg:hidden" />
        <Messages data={TEXT_MESSAGES} />
      </div>

      <SectionHeading text="Book Reviews" />

      <div className="flex flex-col lg:flex-row gap-6 px-6 sm:px-0 mx-auto w-full justify-center items-center">
        <Books books={[PLACEHOLDER_BOOK, PLACEHOLDER_BOOK, PLACEHOLDER_BOOK]} />
        <VerticalVsDivider className="text-muted-foreground hidden lg:block" />
        <HorizontalVsDivider className="lg:hidden" />
        <Books books={BOOKS} />
      </div>

      <Link
        href={"/books"}
        className="text-sm underline text-muted-foreground mt-6 mx-auto"
      >
        View these in action
      </Link>
    </div>
  );
}

const SectionHeading = ({
  text,
  children,
  className,
}: {
  text: string;
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("mx-auto mt-24 mb-12 flex flex-col", className)}>
    <span className="text-3xl font-bold">{text}</span>
    {children}
  </div>
);

const HorizontalVsDivider = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex items-center gap-4 w-full max-w-sm my-3 mx-auto text-muted-foreground lg:hidden",
      className
    )}
  >
    <hr className="border w-full block lg:hidden" />
    <span>vs</span>
    <hr className="border w-full block lg:hidden" />
  </div>
);

const VerticalVsDivider = ({ className }: { className?: string }) => (
  <span className={className}>vs</span>
);
