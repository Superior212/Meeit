import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <>
      <div className="max-w-[48rem] ml-[16rem] bg-white flex flex-col shadow-md mt-0 max-h-40 overflow-y-auto">
        {results.map((result, id) => {
          return <SearchResult result={result.name} key={id} />;
        })}
      </div>
    </>
  );
};
