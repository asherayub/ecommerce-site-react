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
import { motion } from "framer-motion";

const Home = () => {
  const homeVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeIn" },
    exit: { opacity: 0, x: "-100vw" },
  };
  const { allProducts } = useContext(Context);
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
          <Heading as={"h1"} fontSize={"clamp(2rem, 4vw, 6rem)"} mb={2}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Shop from Home
            </motion.div>
          </Heading>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
            <Heading className="arrow-down" display={"inline-block"}>
              <AiOutlineArrowDown />
            </Heading>
          </motion.div>
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
    </motion.div>
  );
};

export default Home;
