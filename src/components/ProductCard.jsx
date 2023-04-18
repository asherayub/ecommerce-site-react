import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus, BsCartPlusFill } from "react-icons/bs";
import React from "react";
import { Context } from "./ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useHover from "../hooks/useHover";
import { motion } from "framer-motion";

const ProductCard = ({ imgSrc, title, id, isFavourite, inCart }) => {
  const { handleFavourites, handleCart } = useContext(Context);
  const [hoverRef, isHovered] = useHover();
  const toast = useToast();
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card h={400} p="6" justifyContent={"space-between"} ref={hoverRef}>
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
            <Text as={"p"} fontWeight={"bold"}>
              <Tooltip
                hasArrow
                label={title}
                placement="top"
                aria-label="A tooltip"
                bg={"#000000"}
              >
                {title.slice(0, 20)}
              </Tooltip>
            </Text>
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
                  !isFavourite
                    ? toast({
                        title: "Added to Favorites",
                        status: "info",
                        duration: 2000,
                        isClosable: true,
                      })
                    : toast({
                        title: "Removed from Favourites",
                        status: "info",
                        duration: 2000,
                        isClosable: true,
                      });
                }}
              >
                <span className="button_top">
                  {!isFavourite ? (
                    <AiOutlineHeart fontSize={24} />
                  ) : (
                    <AiFillHeart fontSize={24} fill="#E53E3E" />
                  )}
                </span>
              </button>
              <button
                onClick={() => {
                  handleCart(id);
                  !inCart
                    ? toast({
                        title: "Added to Cart",
                        status: "info",
                        duration: 2000,
                        isClosable: true,
                      })
                    : toast({
                        title: "Removed from Cart",
                        status: "info",
                        duration: 2000,
                        isClosable: true,
                      });
                }}
              >
                <span className="button_top">
                  {inCart ? (
                    <BsCartPlusFill fontSize={24} fill="green" bg={"#38A169"} />
                  ) : (
                    <BsCartPlus fontSize={24} />
                  )}
                </span>
              </button>
            </ButtonGroup>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
