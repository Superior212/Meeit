import { Button } from "@/components/ui/button";
import event9 from "../../assets/images/event9.png";
import event10 from "../../assets/images/event10.png";
import event11 from "../../assets/images/event11.png";
import event12 from "../../assets/images/event12.png";
import event8 from "../../assets/images/event8.png";
import EventCard from "./EventCard";

export default function WorldEvents() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <h2 className="text-2xl font-semibold text-gray-900 my-8">
        Trending Events around the World
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <EventCard
          imageSrc={event9}
          badgeText="Educational & Business"
          date="June 5"
          title="Google I/O 2024"
          location="Satyanarayan Lawns, Vadodara"
          time="6 PM - 10:30 PM"
          cost="INR 450 - 30k"
          interest="528 interested"
        />

        <EventCard
          imageSrc={event10}
          badgeText="Travel & Adventure"
          date="July 18"
          title="Apple WWDC 2024"
          location="Renaissance Los Angeles Airport Hotel"
          time="8 AM - 12 PM"
          cost="USD 125"
          interest="14 interested"
        />

        <EventCard
          imageSrc={event11}
          badgeText="Technology"
          date="August 22"
          title="AWS re:Invent 2024"
          location="Brown Alley, Melbourne"
          time="9:30 PM - 3:30 AM"
          cost="AUD 0 - 40"
          interest="137 interested"
        />

        <EventCard
          imageSrc={event12}
          badgeText="Technology"
          date="September 10"
          title="Microsoft Build 2024"
          location="Earl Bales Community Centre, Toronto"
          time="5 PM - 8 PM"
          cost="CAD 22"
          interest="13 interested"
        />

        <EventCard
          imageSrc={event8}
          badgeText="Technology"
          date="October 3"
          title="Facebook F8 2024"
          location="Atelier du monde, Brussels"
          time="10 AM - 8:30 PM"
          cost="EUR 20 - 45"
          interest="200 interested"
        />
        <EventCard
          imageSrc={event9}
          badgeText="Technology"
          date="November 15"
          title="Samsung Developer Conference 2024"
          location="Hyde Sunset Kitchen + Cocktails, CA"
          time="8:30 PM - 11:50 PM"
          cost="USD 23.5 - 35"
          interest="10 interested"
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
