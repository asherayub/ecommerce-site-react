import React from "react";
const Context = React.createContext();
const ContextProvider = (props) => {
  const [allProducts, setAllProducts] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.map((item) => ({ ...item, isFavourite: false })));
      });
  }
  React.useEffect(() => {
    getAllProducts();
  }, []);
  function addToFavourite(id) {
    const newFavs = allProducts.map((product) => {
      if (product.id === id) {
        return { ...product, isFavourite: true };
      }
      return product;
    });
    setFavourites([
      ...favourites,
      newFavs.find((product) => product.id === id),
    ]);
  }

  return (
    <Context.Provider value={{ allProducts, favourites, addToFavourite }}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
