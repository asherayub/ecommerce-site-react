import React, { useContext } from "react";
import { Context } from "../components/ContextProvider";
import { Box, Container, Flex, Image } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { allProducts } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((product) => product.id === Number(id));
  return (
    <Container maxW={"container.xl"} mt={70} p={10}>
      <button onClick={() => navigate("/")}>
        <span className="button_top">Go Back</span>
      </button>
      <Flex
        mt={70}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        sx={{
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },
        }}
      >
        <Image src={product.image} alt={product.title} w={300} />

        <Box
          w={"50%"}
          sx={{
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>Price: ${product.price}</h3>
        </Box>
      </Flex>
    </Container>
  );
};

export default ProductDetails;
