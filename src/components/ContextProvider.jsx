import React from "react";
const Context = React.createContext();
const ContextProvider = (props) => {
  const [allProducts, setAllProducts] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(
          data.map((item) => ({ ...item, isFavourite: false, inCart: false }))
        );
      });
  }
  React.useEffect(() => {
    getAllProducts();
  }, []);
  function handleFavourites(id) {
    const newFavs = allProducts.map((product) => {
      if (product.id === id) {
        return { ...product, isFavourite: !product.isFavourite };
      }
      return product;
    });
    setAllProducts(newFavs);
    setFavourites([
      ...newFavs.filter((product) => product.isFavourite === true),
    ]);
  }
  function handleCart(id) {
    const newCart = allProducts.map((product) => {
      if (product.id === id) {
        return { ...product, inCart: !product.inCart };
      }
      return product;
    });
    setAllProducts(newCart);
    setCart([...newCart.filter((item) => item.inCart === true)]);
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
