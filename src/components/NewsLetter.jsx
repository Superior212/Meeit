import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsLetter() {
  return (
    <div className="bg-[#FFE047] py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className=" space-y-4">
          <h2 className="text-[1.4rem]  text-[#2D2C3C] tracking-tight sm:text-3xl">
            Subscribe to our Newsletter
          </h2>
          <p className="text-[#2D2C3C] text-[1.1rem] md:w-[65%]">
            Receive our weekly newsletter & updates with new events from your
            favourite organizers & venues.
          </p>
        </div>
        <form className="flex w-full max-w-sm">
          <Input
            className="flex-1 rounded-l-[0.5rem] rounded-r-none border border-gray-300 px-4 py-2 text-gray-900 placeholder-[#5A5A5A]"
            placeholder="Enter your e-mail address"
            type="email"
          />
          <Button
            className="rounded-r-[0.5rem] rounded-l-none  bg-[#2B293D] px-4 py-2 text-[#FFE047] shadow-sm "
            type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
