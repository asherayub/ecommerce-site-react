import React from "react";
const Context = React.createContext();
const ContextProvider = (props) => {
  const [allProducts, setAllProducts] = React.useState([]);
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
  return (
    <Context.Provider value={allProducts}>{props.children}</Context.Provider>
  );
};

export { ContextProvider, Context };
