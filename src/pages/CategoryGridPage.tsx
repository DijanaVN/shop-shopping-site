import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";
import usePoductsByCategory from "../hooks/useProductsByCategory";
import DeleteCategoryButton from "../components/DeleteProduct";

const CategoryGridPage = () => {
  const { selectedCategory } = useSelectedCategoryContext();

  if (selectedCategory) {
    const { searchQuery } = usePoductsByCategory(selectedCategory);

    return (
      <>
        {searchQuery.data?.length === 0 ? (
          <Center paddingTop={10}>
            <Text color={"primary.600"} fontSize={18} fontWeight={"bold"}>
              No items in this category.
            </Text>
          </Center>
        ) : (
          <Flex
            flexWrap="wrap" // Use flexWrap to wrap the cards in a row when there's enough space
            justifyContent="space-between" // Adjust the space between cards
            margin={2} // Adjust the margin for better spacing
          >
            {searchQuery.data?.map((m) => (
              <Card key={m.id} bg={"primary.500"} maxW="sm" marginBottom={5}>
                <CardBody>
                  <Image
                    src={m.image} // Assuming the third image is the main image
                    alt={m.title}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{m.title}</Heading>
                    <Text fontWeight={"bold"}>Category: {m.category}</Text>
                    <Text>{m.title}</Text>
                    <Text color="yellow.400" fontSize="2xl">
                      ${m.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </Flex>
        )}
      </>
    );
  }
};

export default CategoryGridPage;
