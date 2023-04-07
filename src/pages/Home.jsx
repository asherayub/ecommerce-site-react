import React, { useContext } from "react";
import { Context } from "../components/ContextProvider";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { allProducts } = useContext(Context);
  return (
    <SimpleGrid
      mt={90}
      p={10}
      minChildWidth="200px"
      spacing="40px"
      placeItems={"center"}
    >
      {allProducts.map((product) => {
        return (
          <Box key={product.id} h={"100%"}>
            <ProductCard
              imgSrc={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
              isFavourite={product.isFavourite}
              inCart={product.inCart}
            />
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default Home;
