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

  console.log(newProduct);
  return (
    <>
      {newProduct.map((product, index) => (
        <Card bg={"primary.400"} key={index} maxW="sm" marginBottom={5}>
          <CardBody>
            <Image src={product.image} alt={product.title} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.title}</Heading>
              <Text>Category: {product.category}</Text>
              <Text>{product.description}</Text>
              <Text color="yellow.400" fontSize="2xl">
                ${product.price}
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
    </>
  );
};

export default NewProductPage;
