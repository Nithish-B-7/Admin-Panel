import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "../Components/Categories/Categories";
import AddItems from "../Components/AddItems/AddItems";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/additems" element={<AddItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
