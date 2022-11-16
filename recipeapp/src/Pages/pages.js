import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Recipes from "./RecipesPage";
import Blogs from "./Blogs";
import Error from "./Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "../Components/Trending";
import MainCourse from "./MainCourse";
import SideDish from "./SideDish";
import Deserts from "./Deserts";
import Beverage from "./Beverage";

function Pages() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<Error />} />
            <Route path="/recipes" element={<Recipes />}>
                <Route index element={<Trending/>} />
                <Route path=":type"  element={<Trending/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Pages;
