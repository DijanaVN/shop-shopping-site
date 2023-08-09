import {
  Text,
  Image,
  ListItem,
  Box,
  Button,
  Center,
  Flex,
  List,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import useCategories from "../hooks/useUpdateCategories";
import { GrMenu } from "react-icons/gr";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const { searchQuery } = useCategories();
  const { setSelectedCategory } = useSelectedCategoryContext();

  if (!searchQuery.data) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <HStack color={"yellow.600"} fontSize={"3xl"} align="center">
        <IconButton
          color="yellow.600"
          icon={<GrMenu />}
          aria-label="menu button"
        ></IconButton>
        <Text>Categories</Text>
      </HStack>
      <Box>
        {searchQuery.isLoading && (
          <Center minHeight="100vh">
            <Button
              isLoading
              colorScheme="teal"
              variant="unstyled"
              loadingText="Loading..."
            />
          </Center>
        )}
        <List>
          {searchQuery.data.map((m) => (
            <ListItem key={m.id}>
              <Link to={"/category"}>
                <Flex padding={1}>
                  <Button
                    bg={"primary.50"}
                    padding={8}
                    onClick={() => {
                      setSelectedCategory(m);
                    }}
                    variant={"solid"}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="left"
                    backgroundColor="light"
                    width="100%"
                    borderRadius="none"
                  >
                    <Box
                      width="14"
                      borderRadius="50%"
                      overflow="hidden"
                      marginRight={5}
                    >
                      <Image
                        boxSize="100%"
                        objectFit="cover"
                        src={m.image}
                        alt={m.name}
                      />
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection="column"
                      fontSize={{ base: "xs", md: "md", lg: "lg" }}
                    >
                      <Text>{m.name}</Text>
                    </Box>
                  </Button>
                </Flex>
              </Link>
            </ListItem>
          ))}
        </List>{" "}
      </Box>
    </>
  );
};

export default ProductCategories;
