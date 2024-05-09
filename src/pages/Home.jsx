import Categories from "@/components/Categories";
import DiscoverEvent from "@/components/Events/DiscoverEvent";
import GetStarted from "@/components/GetStarted";
import PopularEvent from "@/components/Events/PopularEvent";
import SearchInput from "@/components/SearchInput";
import WorldEvents from "@/components/Events/WorldEvents";
import CreateEvent from "@/components/Events/CreateEvent";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="mt-[5rem]">
      <SearchInput />
      <Categories />
      <PopularEvent />
      <DiscoverEvent />
      <GetStarted />
      <WorldEvents />
      <CreateEvent />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
