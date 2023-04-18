import React, { useContext } from "react";
import { Context } from "../components/ContextProvider";
import {
  Box,
  Grid,
  Flex,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";

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
      <Flex
        justifyContent={"space-evenly"}
        wrap={"wrap-reverse"}
        alignItems={"center"}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ width: "50%" }}
        >
          <Box h={"100%"} flex={"1 0 0"}>
            <Heading marginBlock={10}>{product.title}</Heading>
            <Text marginBlock={10}>{product.description}</Text>
            <Heading>Price: ${product.price}</Heading>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={product.image}
            alt={product.title}
            w={400}
            h={400}
            objectFit={"contain"}
          />
        </motion.div>
      </Flex>
    </Grid>
  );
};

export default ProductDetails;
