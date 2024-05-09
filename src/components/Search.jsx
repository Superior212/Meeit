import { useState } from "react";
import locations from "../../location.json";
import { SearchIcon } from "lucide-react";
import LocationDropdown from "./LocationDropdown";
const Search = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const results = locations.filter((location) => {
      return (
        value &&
        location &&
        location.name &&
        location.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="flex  items-center  w-full">
      <div className="w-full  py-[1.5rem] rounded-l-md border-none  space-x-5 flex items-center shadow-md bg-white">
        <SearchIcon className="text-black ml-4 w-8 h-5" />
        <input
          className="bg-transparent border-none   h-full text-lg w-full place-content-start   focus:outline-nones outline-none text-black"
          placeholder="Search Events, Categories, Location..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <LocationDropdown />
    </div>
  );
};

export default Search;
