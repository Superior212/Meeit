import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import locations from "../../location.json";
import { SearchResultsList } from "./SearchResultList";
export default function SearchInput() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
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
    <div className="h-[50vh] bg-gradient-to-b from-[#BBBBBB] via-[#5A5A5A] to-[#5A5A5A] relative">
      <section className="relative bg-cover bg-center bg-[url('./assets/images/heroImage.jpg')] bg-no-repeat py-32 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#BBBBBB] via-[#5A5A5A] to-[#2B293D] opacity-50 " />
        <div className="relative z-10">
          <h1 className="text-4xl font-[900] text-white mb-4">
            Don’t miss out!
          </h1>
          <p className="text-[2rem] text-white mb-8 font-[700]">
            Explore the
            <span className="text-[#FFE047]">vibrant TECH events </span>{" "}
            happening locally and globally.
          </p>
          <div className="max-w-4xl mx-auto   flex justify-center items-center ">
            <div className="relative w-full flex items-center">
              <input
                className="w-full pl-10  pr-20 py-3 rounded-md text-lg outline-none"
                placeholder="Search Events, Categories, Locations..."
                type="search"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />

              <SearchIcon className="absolute top-3 left-3 h-6 w-6 text-gray-500" />
              <div className="absolute top-0 right-0">
                <Select>
                  <SelectTrigger
                    className="h-full rounded-md text-lg border-none"
                    id="location">
                    <SelectValue placeholder="Mumbai" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="new-york">New York</SelectItem>
                    <SelectItem value="london">London</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {results && results.length > 0 && (
            <SearchResultsList results={results} />
          )}
        </div>
      </section>
    </div>
  );
}
