import MemoArrow from "@/icons/Arrow";
import { Button } from "./ui/button";

const GetStarted = () => {
  return (
    <div className="hsection">
      <div className="md:mx-3 mt-9 md:h-[30vh]  bg-[url('./assets/images/getstartedbg.png')] bg-no-repeat bg-center bg-cover">
        <div className="flex items-center justify-center flex-col p-5 md:p-0 text-center">
          <h1 className="pt-8 pb-4 font-[700] md:text-[2rem] text-[1.5rem]">
            Events specially curated for you!
          </h1>
          <p className="md:text-[1.2rem] text-[1rem] pb-6">
            Get event suggestions tailored to your interests! Don’t let your
            favorite events slip away.
          </p>
          <Button className="bg-[#2B293D] text-[#FFE047] py-6 px-8">
            Get Started
            <MemoArrow className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
