import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import React from "react";
import { Context } from "./ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ imgSrc, title, id, isFavourite, inCart }) => {
  const { handleFavourites, handleCart } = useContext(Context);
  return (
    <Card
      gap={10}
      sx={{
        border: "2px solid #2e507729",
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          boxShadow: "2px 2px 10px #2e507799",
        },
      }}
      h={"100%"}
      p="6"
      justifyContent={"space-between"}
    >
      <CardBody>
        <Link to={`/${id}`}>
          <Image
            src={imgSrc}
            alt={title}
            borderRadius="lg"
            width="200px"
            height="200px"
            objectFit={"contain"}
            cursor={"pointer"}
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Heading>
            <Tooltip
              maxWidth={150}
              hasArrow
              bg="#2E5077"
              color="white"
              borderRadius={5}
              p={6}
              label={title}
              placement="top"
              aria-label="A tooltip"
            >
              {title.slice(0, 20)}
            </Tooltip>
          </Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
        mt={30}
          spacing="2"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <button
            onClick={() => {
              handleFavourites(id);
            }}
          >
            <span className="button_top">
              Favourite
              {!isFavourite ? (
                <AiFillHeart fontSize={18} />
              ) : (
                <AiFillHeart fontSize={18} fill="red" />
              )}
            </span>
          </button>
          <button
            onClick={() => {
              handleCart(id);
            }}
          >
            <span className="button_top">
              {" "}
              Add
              {inCart ? (
                <BsCartPlusFill fontSize={18} fill="green" bg={"green"} />
              ) : (
                <BsCartPlusFill fontSize={18} />
              )}
            </span>
          </button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
