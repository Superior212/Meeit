import { Button } from "../ui/button";
import MemoEvent from "@/icons/Event";

const CreateEvent = () => {
  return (
    <div className="">
      <div className=" my-9  md:h-[30vh]  bg-[url('./assets/images/createEventbg.png')] bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 p-5 md:p-0  text-[#FFE047]">
          <div className=" md:my-10 text-center md:text-left">
            <h1 className="pt-8 pb-4 font-[700] md:text-[2rem] text-[1.5rem]">
              Create an event with Meeit
            </h1>
            <p className="md:text-[1.2rem] text-[1rem] pb-6">
              Got a show, event, activity or a great experience? Partner with us
              & get listed on Meeit
            </p>
          </div>
          <Button className="bg-[#FFE047] text-[#2B293D] py-6 px-8">
            <MemoEvent className="h-5 w-5 mr-2" />
            Create Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
