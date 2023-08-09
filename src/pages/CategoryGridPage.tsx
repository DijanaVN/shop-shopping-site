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
} from "@chakra-ui/react";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";

const CategoryGridPage = () => {
  const { selectedCategory } = useSelectedCategoryContext();

  console.log(selectedCategory);

  return (
    <>
      <Flex
        flexWrap="wrap" // Use flexWrap to wrap the cards in a row when there's enough space
        justifyContent="space-between" // Adjust the space between cards
        margin={2} // Adjust the margin for better spacing
      >
        {selectedCategory && (
          <Card
            bg={"primary.500"}
            key={selectedCategory.id}
            maxW="sm"
            marginBottom={5}
          >
            <CardBody>
              <Image
                src={selectedCategory.image} // Assuming the third image is the main image
                alt={selectedCategory.name}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{selectedCategory.name}</Heading>
                <Text>{selectedCategory.name}</Text>
                <Text color="yellow.400" fontSize="2xl">
                  ${selectedCategory.id}
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
        )}
      </Flex>
    </>
  );
};

export default CategoryGridPage;
