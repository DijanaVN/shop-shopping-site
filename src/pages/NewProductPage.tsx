import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNewProductContext } from "./../StateManagement/NewProductContext";

const NewProductPage = () => {
  const { newProduct } = useNewProductContext();
  return (
    <>
      {newProduct && (
        <Card bg={"primary.400"} key="newProduct" maxW="sm" marginBottom={5}>
          <CardBody>
            <Image
              src={newProduct.image}
              alt={newProduct.title}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{newProduct.title}</Heading>
              <Text>Category: {newProduct.category}</Text>
              <Text>{newProduct.description}</Text>
              <Text color="yellow.400" fontSize="2xl">
                ${newProduct.price}
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
    </>
  );
};

export default NewProductPage;
