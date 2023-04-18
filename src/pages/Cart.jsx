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
import { motion, AnimatePresence } from "framer-motion";
const Cart = () => {
  const cartVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeIn" },
    exit: { opacity: 0, x: "-100vw" },
  };
  const { cart, handleCart } = useContext(Context);
  return (
    <motion.div
      variants={cartVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <VStack spacing={50} p={10} minH={"100vh"} mt={cart.length > 0 ? 77 : 0}>
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
        <AnimatePresence>
          {cart?.length > 0 ? (
            cart.map((cart) => {
              return (
                <motion.div
                  key={cart.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0, x: 100 }}
                >
                  <Card
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
                          <Button onClick={() => handleCart(cart.id)}>
                            <span className="button_top">
                              <BsTrash />
                            </span>
                          </Button>
                        </CardFooter>
                      </Stack>
                    </Flex>
                  </Card>
                </motion.div>
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
              Cart Empty
            </Heading>
          )}
        </AnimatePresence>
      </VStack>
    </motion.div>
  );
};

export default Cart;
