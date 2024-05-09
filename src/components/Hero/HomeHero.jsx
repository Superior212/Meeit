import { useState } from "react";
import Search from "../Search";
import { SearchResultsList } from "../SearchResultList";

const HomeHero = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="h-[50vh] bg-gradient-to-b from-[#BBBBBB] via-[#5A5A5A] to-[#5A5A5A] relative">
      <div className="absolute inset-0 bg-[url('./assets/images/heroImage.jpg')] bg-no-repeat bg-center bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#BBBBBB] via-[#5A5A5A] to-[#2B293D] opacity-50"></div>
      <div className="relative z-10 md:flex flex-col p-4 py-28 md:px-56 justify-center text-white">
        <h1 className="md:text-[2.2rem] mb-3 font-[700]">Don’t miss out!</h1>
        <h2 className="md:text-[2rem] font-[600]">
          Explore the{" "}
          <span className="text-[#FFE047]">vibrant TECH events </span>happening
          locally and globally.
        </h2>
        <div className="flex items-center pt-16   w-full ">
          <div className="flex flex-col items-center md:min-w-[500px]">
            <Search setResults={setResults} />
            {results && results.length > 0 && (
              <SearchResultsList results={results} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
