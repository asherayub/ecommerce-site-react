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
} from "@chakra-ui/react";
const Favourites = () => {
  const { favourites, handleFavourites } = useContext(Context);

  return (
    <VStack spacing={50} mt={90} p={10}>
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

                  <Stack w={"80%"}>
                    <CardBody>
                      <Heading size="md">{fav.title}</Heading>

                      <Text py="2">{fav.description}</Text>
                    </CardBody>

                    <CardFooter>
                      <button onClick={() => handleFavourites(fav.id)}>
                        <span className="button_top">Remove Favourite</span>
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
          No Favourites
        </Heading>
      )}
    </VStack>
  );
};

export default Favourites;
