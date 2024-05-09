import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import MemoStarFilledIcon from "@/icons/StarFilledIcon";
import MemoIntrestStar from "@/icons/IntrestStar";
import { Star } from "lucide-react";
import { useState } from "react";
import MemoSquare from "@/icons/Square";
import MemoTicket from "@/icons/Ticket";

const EventCard = ({
  imageSrc,
  badgeText,
  date,
  title,
  location,
  time,
  cost,
  interest,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Card className="bg-white h-[22rem]">
      <CardHeader className="relative p-0 ">
        <img
          alt={title}
          className="w-full h-48 object-cover rounded-t-md"
          src={imageSrc}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
        />
        {badgeText && (
          <Badge className="absolute top-0 left-0 bg-[#FFE047] text-[#2D2C3C]">
            {badgeText}
          </Badge>
        )}
        <button
          className="absolute bg-white rounded-full flex items-center justify-center border-none outline-none top-0 right-1 h-8 w-8 text-yellow-400 hover:text-yellow-500"
          onClick={handleBookmarkClick}>
          {isBookmarked ? (
            <MemoStarFilledIcon className="h-5 w-5" />
          ) : (
            <Star className="h-5 w-5" />
          )}
        </button>
        {date && (
          <div className="absolute bottom-0 font-semibold left-0 bg-[#FFD700] text-[#2B293D] px-4 py-1">
            {date}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold  my-2">{title}</h3>
        {location && <p className="text-sm text-gray-500 my-2">{location}</p>}
        {time && <p className="text-sm text-gray-500 my-2">{time}</p>}
        {cost && interest && (
          <p className="text-sm text-gray-900 my-2 flex items-center gap-1">
            <MemoTicket className="w-3 h-3" />
            {cost}
            <MemoSquare className="w-1 h-1" />
            <MemoIntrestStar className="w-3 h-3" />
            <span className="text-gray-500">{interest}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;
