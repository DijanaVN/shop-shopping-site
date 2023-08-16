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
    <Card
      height="720px"
      key={m.id}
      bg={`rgba(247, 215, 238, 0.5)`}
      maxW="sm"
      marginBottom={5}
    >
      <CardBody>
        <Image boxSize="sm" src={m.image} alt={m.title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{m.title}</Heading>
          <Text fontWeight={"bold"}>Category: {m.category}</Text>

          <Text fontWeight={"extrabold"} color="primary.300" fontSize="2xl">
            ${m.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup justifyContent={"center"} spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="solid" colorScheme="yellow">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardFunction;
