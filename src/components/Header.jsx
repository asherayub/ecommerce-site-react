import { Box, Grid, HStack, Heading, Text } from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Grid
      bg={"blue.600"}
      color={"white"}
      p={"20px 10px"}
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
      <HStack
        justifySelf={"end"}
        sx={{
          "@media (max-width: 430px)": {
            flexDirection: "column",
            justifyContent: "space-evenly",
            position: "absolute",
            top: "100%",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "100vh",
            backdropFilter: "blur(10px)",
            padding: "10px 0",
            backgroundColor: "#2e507799",
            boxShadow: "2px 2px 10px #2e507799",
            display: `${isMenuOpen ? "flex" : "none"}}`,
          },
        }}
      >
        <Text
          onClick={() => setIsMenuOpen(false)}
          sx={{ textDecoration: "none" }}
        >
          <Link to="/">Home</Link>
        </Text>
        <Text
          onClick={() => setIsMenuOpen(false)}
          sx={{ textDecoration: "none" }}
        >
          <Link to="/favourites">Favourites</Link>
        </Text>
        <Text
          onClick={() => setIsMenuOpen(false)}
          sx={{ textDecoration: "none" }}
        >
          <Link to="/cart">Cart</Link>
        </Text>
      </HStack>
      <Heading
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          "@media (min-width: 430px)": {
            display: "none",
          },
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <AiOutlineClose /> : <CiMenuBurger />}
      </Heading>
    </Grid>
  );
};

export default Header;
