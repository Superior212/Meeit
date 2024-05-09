export const SearchResult = ({ result }) => {
  return (
    <div
      className="sp-2 md:p-4 border-b border-gray-200 transition-colors duration-300  text-black"
      onClick={(e) => alert(`You selected ${result}!`)}>
      {result}
    </div>
  );
};
