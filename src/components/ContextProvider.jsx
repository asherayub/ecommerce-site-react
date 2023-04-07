import React, { useState, useEffect, createContext } from "react";

const Context = createContext();

const ContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);

  function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(
          data.map((item) => ({ ...item, isFavourite: false, inCart: false }))
        );
      });
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  function handleFavourites(id) {
    const newFavs = allProducts.map((product) =>
      product.id === id
        ? { ...product, isFavourite: !product.isFavourite }
        : product
    );
    setAllProducts(newFavs);
    setFavourites(newFavs.filter((product) => product.isFavourite === true));
  }

  function handleCart(id) {
    const newCart = allProducts.map((product) =>
      product.id === id ? { ...product, inCart: !product.inCart } : product
    );
    setAllProducts(newCart);
    setCart(newCart.filter((item) => item.inCart === true));
  }

  return (
    <Context.Provider
      value={{ allProducts, favourites, cart, handleFavourites, handleCart }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
