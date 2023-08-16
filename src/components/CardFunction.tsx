import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

const CardFunction = ({ m }: any) => {
  return (
    <Card key={m.id} bg={"primary.50"} maxW="sm" marginBottom={5}>
      <CardBody>
        <Image src={m.image} alt={m.title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{m.title}</Heading>
          <Text fontWeight={"bold"}>Category: {m.category}</Text>
          <Text>{m.title}</Text>
          <Text fontWeight={"extrabold"} color="primary.300" fontSize="2xl">
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
  );
};

export default CardFunction;
