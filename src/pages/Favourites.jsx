import React from "react";
import { Context } from "../components/ContextProvider";
import { useContext } from "react";
import {
  Button,
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
const Favourites = () => {
  const { favourites } = useContext(Context);
  return (
    <VStack spacing={50} mt={70} p={10}>
      {favourites.length > 0 ? (
        favourites.map((fav) => {
          return (
            <Card
              key={fav.id}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Flex
                justifyContent={"center"}
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
                  src={fav.image}
                  alt={fav.title}
                  borderRadius="lg"
                  width="200px"
                  height="200px"
                />

                <Stack w={"50%"}>
                  <CardBody>
                    <Heading size="md">{fav.title}</Heading>

                    <Text py="2">{fav.description}</Text>
                  </CardBody>

                  <CardFooter>
                    <button>
                      <span className="button_top">Remove Favourite</span>
                    </button>
                  </CardFooter>
                </Stack>
              </Flex>
            </Card>
          );
        })
      ) : (
        <Heading>No Favourites</Heading>
      )}
    </VStack>
  );
};

export default Favourites;
