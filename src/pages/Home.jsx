import React, { useContext } from "react";
import { Context } from "../components/ContextProvider";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
  const { allProducts } = useContext(Context);
  return (
    <Container>
      <Flex
        w={"100%"}
        h={"100vh"}
        mt={77}
        flexDirection={"column"}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        lineHeight={1.5}
      >
        <Heading as={"h1"} fontSize={"clamp(2rem, 4vw, 3rem)"}>
          Shop from comfort of your Home
        </Heading>
        <Heading as={"h3"}>With FREE Delivery All Around The World.</Heading>
        <Divider mt={10} mb={10} />
        <Text>Scroll down to see products</Text>
        <Heading className="arrow-down">
          <AiOutlineArrowDown />
        </Heading>
      </Flex>
      <SimpleGrid
        mt={40}
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
    </Container>
  );
};

export default Home;
