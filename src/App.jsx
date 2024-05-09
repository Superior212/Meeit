import { Route, Routes } from "react-router-dom";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <ResponsiveNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
