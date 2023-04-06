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
} from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ imgSrc, title, price, id }) => {
  return (
    <Card
      sx={{
        border: "2px solid transparent",
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          border: "2px solid #00000036",
        },
      }}
      p="6"
    >
      <CardBody>
        <Image
          src={imgSrc}
          alt={title}
          borderRadius="lg"
          width="200px"
          height="200px"
          objectFit={"contain"}
        />
        <Stack mt="6" spacing="3">
          <Heading as={"h2"} size="md" title="title">
            {title.slice(0, 15)}...
          </Heading>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button colorScheme="blue">Favourite</Button>
          <Button colorScheme="blue">Add to Cart</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
