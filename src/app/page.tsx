import Messages from "@/components/Messages";
import Testimonial from "@/components/Testimonial";

import {
  TESTIMONIALS,
  TEXT_MESSAGES,
  PLACEHOLDER_TEXT_MESSAGES,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col py-12">
      <div className="mx-auto mb-12">
        <span className="text-3xl font-bold">Testimonials</span>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 mx-auto max-w-max gap-6 px-6 sm:px-0">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial className="hidden lg:block" />
        <Testimonial className="hidden xl:block" />
        <Testimonial className="hidden xl:block" />
      </div>

      <div className="flex items-center gap-4 w-full px-6 max-w-md my-12 mx-auto text-muted-foreground">
        <hr className="border w-full" />
        <span>vs</span>
        <hr className="border w-full" />
      </div>

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

      <div className="mx-auto mt-24 mb-12">
        <span className="text-3xl font-bold">Messages</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-6 sm:px-0 w-full justify-center items-center">
        <Messages data={PLACEHOLDER_TEXT_MESSAGES} />

        <span className="text-muted-foreground hidden lg:block">vs</span>

        <div className="flex items-center gap-4 w-full max-w-sm my-3 mx-auto text-muted-foreground lg:hidden">
          <hr className="border w-full block lg:hidden" />
          <span>vs</span>
          <hr className="border w-full block lg:hidden" />
        </div>

        <Messages data={TEXT_MESSAGES} />
      </div>
    </div>
  );
}
