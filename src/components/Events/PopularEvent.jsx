import { Button } from "@/components/ui/button";
import event1 from "../../assets/images/event1.png";
import event2 from "../../assets/images/event2.png";
import event3 from "../../assets/images/event3.png";

import EventCard from "./EventCard";

export default function PopularEvent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900">
        Popular Events in Mumbai
      </h2>
      <div className="md:flex space-x-4 space-y-4 md:space-y-0 mx-10 md:mx-0 my-7">
        <Button
          className="border rounded-[3rem] border-[6F6F6F]"
          variant="default">
          All
        </Button>
        <Button
          className="border rounded-[3rem] border-[6F6F6F]"
          variant="default">
          Today
        </Button>
        <Button
          className="border rounded-[3rem] border-[6F6F6F]"
          variant="default">
          Tomorrow
        </Button>
        <Button
          className="border rounded-[3rem] border-[6F6F6F]"
          variant="default">
          This Weekend
        </Button>
        <Button
          className="border rounded-[3rem] border-[6F6F6F]"
          variant="default">
          Free
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <EventCard
          imageSrc={event1}
          badgeText="Technology"
          date="November 15"
          title="Data Science Summit"
          location="Online"
          time="10:00 AM - 6:00 PM"
          cost="Free"
          interest="180 interested"
        />
        <EventCard
          imageSrc={event2}
          badgeText="Technology"
          date="December 3"
          title="Cloud Computing Conference"
          location="Virtual Event"
          time="9:00 AM - 4:00 PM"
          cost="Free"
          interest="150 interested"
        />
        <EventCard
          imageSrc={event3}
          badgeText="Technology"
          date="January 20"
          title="Artificial Intelligence Symposium"
          location="Virtual"
          time="1:00 PM - 7:00 PM"
          cost="Free"
          interest="200 interested"
        />
        <EventCard
          imageSrc={event2}
          badgeText="Technology"
          date="February 8"
          title="Cybersecurity Workshop"
          location="Online Event"
          time="10:00 AM - 2:00 PM"
          cost="Free"
          interest="120 interested"
        />
        <EventCard
          imageSrc={event3}
          badgeText="Technology"
          date="March 22"
          title="Web Development Bootcamp"
          location="Virtual Conference"
          time="9:00 AM - 5:00 PM"
          cost="Free"
          interest="250 interested"
        />
        <EventCard
          imageSrc={event1}
          badgeText="Technology"
          date="April 14"
          title="Machine Learning Hackathon"
          location="Online Summit"
          time="11:00 AM - 7:00 PM"
          cost="Free"
          interest="170 interested"
        />
      </div>
      <div className="text-center my-8">
        <Button className="border border-[#2B293D] w-80" variant="default">
          See More
        </Button>
      </div>
    </div>
  );
}
