import { Outlet, Route, Routes } from "react-router-dom";
import Introduction from "../Introduction/Introduction";
import Filters from "../Products/Filters";
import Products from "../Products/Products";

const Home = () => {
  return (
    <main>
      <Introduction />

      <div className="container">
        <Filters />
        <Outlet />
      </div>
    </main>
  );
};
export default Home;
