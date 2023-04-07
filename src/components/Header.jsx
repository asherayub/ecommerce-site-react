import { Box, Grid, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Grid
      bg={"tomato"}
      p={"10px"}
      gridTemplateColumns={"1fr 1fr"}
      alignItems={"center"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      right={"0"}
      zIndex={"100"}
    >
      <Box>
        <Heading as={"h1"}>
          <Link to="/">StoreIt</Link>
        </Heading>
      </Box>
      <HStack justifySelf={"end"}>
        <Heading sx={{ textDecoration: "none" }} as={"h3"} mr={"10px"}>
          <Link to="/">Home</Link>
        </Heading>
        <Heading sx={{ textDecoration: "none" }} as={"h3"} mr={"10px"}>
          <Link to="/cart">Cart</Link>
        </Heading>
        <Heading sx={{ textDecoration: "none" }} as={"h3"} mr={"10px"}>
          <Link to="/favourites">Favourites</Link>
        </Heading>
      </HStack>
    </Grid>
  );
};

export default Header;
