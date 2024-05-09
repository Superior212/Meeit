import { Button } from "@/components/ui/button";
import event4 from "../../assets/images/event4.png";
import event5 from "../../assets/images/event5.png";
import event6 from "../../assets/images/event6.png";
import event7 from "../../assets/images/event7.png";
import event8 from "../../assets/images/event8.png";
import EventCard from "./EventCard";

export default function DiscoverEvent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900 my-8">
        Discover Best of Online Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <EventCard
          imageSrc={event4}
          badgeText="Educational & Business"
          date="JAN 13"
          title="The Road to Jobs and Internships: Starting with LinkedIn Webinar"
          location="Online"
          time="10 AM - 5 PM"
          cost="INR 49"
          interest="16 interested"
        />

        <EventCard
          imageSrc={event5}
          badgeText="Travel & Adventure"
          date=" NOV 25-26"
          title="Easy book folding"
          location="Online"
          time="4 PM - 5:30 PM"
          cost="INR 1,400 "
          interest="14 interested"
        />

        <EventCard
          imageSrc={event6}
          badgeText="Technology"
          date="October 8"
          title="Machine Learning Expo"
          location="Online Summit"
          time="9:00 AM - 5:00 PM"
          cost="Free"
          interest="220 interested"
        />

        <EventCard
          imageSrc={event7}
          badgeText="Technology"
          date="July 12"
          title="Blockchain Conference"
          location="Virtual"
          time="9:30 AM - 4:30 PM"
          cost="Free"
          interest="90 interested"
        />

        <EventCard
          imageSrc={event8}
          badgeText="Technology"
          date="August 5"
          title="Cybersecurity Summit"
          location="Online Event"
          time="8:00 AM - 3:00 PM"
          cost="Free"
          interest="200 interested"
        />
        <EventCard
          imageSrc={event4}
          badgeText="Technology"
          date="September 20"
          title="Web Development Conference"
          location="Virtual Conference"
          time="10:00 AM - 4:00 PM"
          cost="Free"
          interest="180 interested"
        />
      </div>
      <div className="text-center mt-4">
        <Button className="border border-[#2B293D] w-80" variant="default">
          See More
        </Button>
      </div>
    </div>
  );
}
