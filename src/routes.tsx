import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./page/Coin";
import Coins from "./page/Coins";
import Navigation from "./Components/Navigation";
import Exchange from "./page/Exchange";
import Price from "./page/Price";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="" element={<Coins />} />
          <Route path=":id" element={<Coin />}>
            <Route path="exchange" element={<Exchange />} />
            <Route path="price" element={<Price />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
