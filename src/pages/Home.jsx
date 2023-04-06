import React, { useContext } from "react";
import { Context } from "../components/ContextProvider";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const context = useContext(Context);
  return (
    <SimpleGrid mt={70} p={10} minChildWidth="200px" spacing="40px" placeItems={"center"}>
      {context.map((product) => {
        return (
          <Box>
            <ProductCard
              imgSrc={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default Home;
