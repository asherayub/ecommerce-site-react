import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "./pages/Cart";
import Favourites from "./pages/Favourites";
import ProductDetails from "./pages/ProductDetails";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/favourites" element={<Favourites />} />
          <Route exact path="/:id" element={<ProductDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
