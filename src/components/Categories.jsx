import tech from "../assets/images/tech.png";
import edu from "../assets/images/edu.png";
import travel from "../assets/images/travel.png";
import culture from "../assets/images/culture.png";

const Categories = () => {
  return (
    <div className="hsection py-10">
      <h1 className=" font-[700] text-[1.5rem] md:my-5 my-20">
        Explore Categories
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-2 mt-5">
        <div className="flex flex-col items-center">
          <img src={tech} alt="Image 1" className="w-20 h-20 rounded-full" />
          <div className=" text-black text-center py-2">Conferences</div>
        </div>

        <div className="flex flex-col items-center">
          <img src={edu} alt="Image 2" className="w-20 h-20 rounded-full" />
          <div className=" text-black text-center py-2">Hackathons</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={travel} alt="Image 2" className="w-20 h-20 rounded-full" />
          <div className=" text-black text-center py-2">Meetups</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={culture} alt="Image 2" className="w-20 h-20 rounded-full" />
          <div className=" text-black text-center py-2">
            Workshops and Training Sessions
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={edu} alt="Image 2" className="w-20 h-20 rounded-full" />
          <div className=" text-black text-center py-2">
            Exhibitions and Trade Shows
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={tech} alt="Image 2" className="w-20 h-20 rounded-full" />
          <div className=" text-black  text-center py-2">
            Developer Conferences
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
