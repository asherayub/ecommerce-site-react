import { Box, Grid, HStack, Heading } from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Grid
      bg={"#2E5077"}
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
        <Heading
          onClick={() => setIsMenuOpen(false)}
          sx={{ textDecoration: "none" }}
          as={"h3"}
        >
          <Link to="/">Home</Link>
        </Heading>
        <Heading
          onClick={() => setIsMenuOpen(false)}
          sx={{ textDecoration: "none" }}
          as={"h3"}
        >
          <Link to="/favourites">Favourites</Link>
        </Heading>
        <Heading
          onClick={() => setIsMenuOpen(false)}
          sx={{ textDecoration: "none" }}
          as={"h3"}
        >
          <Link to="/cart">Cart</Link>
        </Heading>
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
