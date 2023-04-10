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
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsCartPlus, BsCartPlusFill } from "react-icons/bs";
import React from "react";
import { Context } from "./ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useHover from "../hooks/useHover";

const ProductCard = ({ imgSrc, title, id, isFavourite, inCart }) => {
  const { handleFavourites, handleCart } = useContext(Context);
  const [hoverRef, isHovered] = useHover();
  return (
    <Card
      sx={{
        border: "2px solid #2e507729",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          boxShadow: "2px 2px 10px #2e50773e",
        },
      }}
      h={"345"}
      p="6"
      justifyContent={"space-between"}
      ref={hoverRef}
    >
      <CardBody mx={"auto"} textAlign={"center"}>
        <Link to={`/${id}`}>
          <Image
            src={imgSrc}
            alt={title}
            width="200px"
            height="200px"
            objectFit={"contain"}
            cursor={"pointer"}
            loading="lazy"
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Heading as={"h4"}>
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
              {title.slice(0, 50)}
            </Tooltip>
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        {isHovered && (
          <ButtonGroup
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
                {!isFavourite ? (
                  <AiOutlineHeart fontSize={24} />
                ) : (
                  <AiFillHeart fontSize={24} fill="red" />
                )}
              </span>
            </button>
            <button
              onClick={() => {
                handleCart(id);
              }}
            >
              <span className="button_top">
                {inCart ? (
                  <BsCartPlusFill fontSize={24} fill="green" bg={"green"} />
                ) : (
                  <BsCartPlus fontSize={24} />
                )}
              </span>
            </button>
          </ButtonGroup>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
