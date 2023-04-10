import React, { useContext } from "react";
import { Context } from "../components/ContextProvider";
import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Grid,
  Highlight,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
  const { allProducts } = useContext(Context);
  return (
    <Container maxW={"container.lg"}>
      <Flex
        w={"100%"}
        h={"100vh"}
        mt={77}
        flexDirection={"column"}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        lineHeight={2}
      >
        <Heading as={"h1"} mb={2}>
          Shop from Home
        </Heading>

        <Heading as={"h3"} fontSize={"20"}>
          With
          <Text
            as={"span"}
            display={"inline-block"}
            px={2}
            py={4}
            mx={1}
            pos={"relative"}
          >
            {/* <Badge ml="1" bg="blue.100" position={"absolute"} right={0} top={0}>
              Limited Time
            </Badge> */}
            <Highlight
              query="Limited Time"
              styles={{ px: "1", py: "1", bg: "orange.100" }}
            >
              FREE Delivery Limited Time
            </Highlight>
          </Text>
          <br />
          All Around The World.
        </Heading>
        <Text>Scroll down to see products</Text>
        <Heading className="arrow-down">
          <AiOutlineArrowDown />
        </Heading>
      </Flex>
      <Grid
        px={10}
        py={0}
        gap={5}
        gridTemplateColumns={"repeat(auto-fill, minmax(200px, 1fr))"}
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
      </Grid>
    </Container>
  );
};

export default Home;
