import React, { useContext } from "react";
import { Context } from "../components/ContextProvider";
import { Box, Grid, Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ProductDetails = () => {
  const { allProducts } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((product) => product.id === Number(id));
  return (
    <Grid
      maxW={"container.xl"}
      h={"100vh"}
      p={10}
      gridTemplateRows={"200px 1fr"}
      alignItems={"center"}
      justifyItems={"start"}
    >
      <Button onClick={() => navigate("/")}>
        <span className="button_top">
          <BiArrowBack />
        </span>
      </Button>
      <Flex wrap={"wrap-reverse"} alignItems={"center"}>
        <Box w={"50%"} h={"100%"} flex={"1 0 0"}>
          <Heading marginBlock={10}>{product.title}</Heading>
          <Text marginBlock={10}>{product.description}</Text>
          <Heading>Price: ${product.price}</Heading>
        </Box>
        <Image src={product.image} alt={product.title} w={300} h={300} objectFit={'contain'}  />
      </Flex>
    </Grid>
  );
};

export default ProductDetails;
