import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { Context } from "./ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ imgSrc, title, price, id }) => {
  const { addToFavourite } = useContext(Context);
  return (
    <Card
      gap={10}
      sx={{
        border: "2px solid #3f383810",
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          border: "2px solid #00000036",
        },
      }}
      p="6"
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
              bg="tomato"
              borderRadius={5}
              p={4}
              label={title}
              placement="right"
              aria-label="A tooltip"
            >
              {title.slice(0, 20)}
            </Tooltip>
          </Heading>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          spacing="2"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <button
            onClick={() => {
              addToFavourite(id);
            }}
          >
            <span className="button_top"> Favourite</span>
          </button>
          <button onClick={() => {}}>
            <span className="button_top"> Add</span>
          </button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
