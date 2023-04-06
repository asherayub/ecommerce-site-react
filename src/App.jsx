import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Favourites from "./pages/Favourites";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
};

export default App;
