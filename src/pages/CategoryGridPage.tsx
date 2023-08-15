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
import image from "../images/milad-fakurian-HE1_K4_-QT8-unsplash.webp";

const CategoryGridPage = () => {
  const { selectedCategory } = useSelectedCategoryContext();

  if (selectedCategory) {
    const { updatedProductsInCategory } =
      usePoductsByCategory(selectedCategory);

    return (
      <>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          margin={2}
          backgroundImage={image}
        >
          {updatedProductsInCategory?.map((m) =>
            selectedCategory === m.category ? (
              <Card key={m.id} bg={"primary.50"} maxW="sm" marginBottom={5}>
                <CardBody>
                  <Image src={m.image} alt={m.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{m.title}</Heading>
                    <Text fontWeight={"bold"}>Category: {m.category}</Text>
                    <Text>{m.title}</Text>
                    <Text
                      fontWeight={"extrabold"}
                      color="primary.300"
                      fontSize="2xl"
                    >
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
            ) : (
              ""
            )
          )}
        </Flex>
      </>
    );
  }
};

export default CategoryGridPage;
