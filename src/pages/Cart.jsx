import React from "react";
import { Context } from "../components/ContextProvider";
import { useContext } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, handleCart } = useContext(Context);
  return (
    <VStack spacing={50} p={10} minH={"100vh"}>
      {cart?.length > 0 && (
        <Flex w={"100%"} justifyContent={"flex-end"}>
          <Heading>
            Total: $
            {cart
              .reduce((total, item) => {
                return total + item.price;
              }, 0)
              .toFixed(2)}
          </Heading>
        </Flex>
      )}
      {cart?.length > 0 ? (
        cart.map((cart) => {
          return (
            <Card
              key={cart.id}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={10}
                wrap={"wrap"}
                p={2}
              >
                <Image
                  objectFit="contain"
                  src={cart.image}
                  alt={cart.title}
                  borderRadius="lg"
                  width="200px"
                  height="200px"
                />

                <Stack w={"80%"}>
                  <CardBody>
                    <Heading size="md">{cart.title}</Heading>

                    <Text py="2">{cart.description}</Text>
                    <Heading
                      as={"h3"}
                      bg={"yellow.200"}
                      display={"inline-block"}
                      p={2}
                    >
                      Price: ${cart.price}
                    </Heading>
                  </CardBody>

                  <CardFooter>
                    <button onClick={() => handleCart(cart.id)}>
                      <span className="button_top">
                        <Button>
                          <BsTrash />
                        </Button>
                      </span>
                    </button>
                  </CardFooter>
                </Stack>
              </Flex>
            </Card>
          );
        })
      ) : (
        <Heading
          as={"h1"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            color: "#2e507772",
          }}
        >
          Empty
        </Heading>
      )}
    </VStack>
  );
};

export default Cart;
