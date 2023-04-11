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
import { BsTrash } from "react-icons/bs";
const Favourites = () => {
  const { favourites, handleFavourites } = useContext(Context);
  return (
    <VStack
      spacing={50}
      minH={"100vh"}
      p={10}
      mt={favourites.length > 0 ? 77 : 0}
    >
      {favourites.length > 0 ? (
        favourites
          .filter((item) => item.isFavourite)
          .map((fav) => {
            return (
              <Card
                key={fav.id}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Flex justifyContent={"center"} gap={10} wrap={"wrap"} p={2}>
                  <Image
                    objectFit="contain"
                    src={fav.image}
                    alt={fav.title}
                    width="200px"
                    height="200px"
                  />

                  <Stack w={"80%"}>
                    <CardBody>
                      <Heading size="md">{fav.title}</Heading>

                      <Text py="2">{fav.description}</Text>
                    </CardBody>

                    <CardFooter>
                      <Button onClick={() => handleFavourites(fav.id)}>
                        <span className="button_top">
                          <BsTrash />
                        </span>
                      </Button>
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

export default Favourites;
