import React, { useContext } from "react";
import { Context } from "../components/ContextProvider";
import { Box, Grid, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

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
      <button onClick={() => navigate("/")}>
        <span className="button_top">Go Back</span>
      </button>
      <Flex
        alignItems={"center"}
        justifyContent={"space-evenly"}
        sx={{
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box
          w={"50%"}
          h={"100%"}
          sx={{
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <Heading marginBlock={10} fontSize={"clamp(1.5rem, 4vw, 3rem)"}>
            {product.title}
          </Heading>
          <Text marginBlock={10} fontSize={"clamp(.8rem, 3vw, 1.3rem)"}>
            {product.description}
          </Text>
          <Heading marginBlock={10} as={"h3"} bg={"yellow"} w={"max-content"} p={2} ml={"auto"}>
            Price: ${product.price}
          </Heading>
        </Box>
        <Image src={product.image} alt={product.title} w={300} />
      </Flex>
    </Grid>
  );
};

export default ProductDetails;
