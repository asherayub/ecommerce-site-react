import React from "react";
import { Context } from "../components/ContextProvider";
import { useContext } from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
const Cart = () => {
  const { cart, handleCart } = useContext(Context);
  return (
    <VStack spacing={50} mt={90} p={10}>
      {cart?.length > 0 && (
        <Flex w={"100%"} justifyContent={"flex-end"}>
          <Heading>
            Total: $
            {cart.reduce((total, item) => {
              return total + item.price;
            }, 0)}
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
                gap={10}
                sx={{
                  "@media (max-width: 768px)": {
                    flexDirection: "column",
                    alignItems: "center",
                  },
                }}
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
                  </CardBody>

                  <CardFooter>
                    <button onClick={() => handleCart(cart.id)}>
                      <span className="button_top">Remove Product</span>
                    </button>
                  </CardFooter>
                </Stack>
              </Flex>
            </Card>
          );
        })
      ) : (
        <Heading as={"h1"} sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          color: "#2e507772",
      }}>No Items</Heading>
      )}
    </VStack>
  );
};

export default Cart;
