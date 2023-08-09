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
import usePoducts from "../hooks/useProducts";
import { Product } from "../hooks/useProducts";
import React from "react";

const ProductGrid = () => {
  const { searchQuery } = usePoducts();

  if (!searchQuery.data) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Flex
        flexWrap="wrap" // Use flexWrap to wrap the cards in a row when there's enough space
        justifyContent="space-between" // Adjust the space between cards
        margin={2} // Adjust the margin for better spacing
      >
        {searchQuery.data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((product) => (
              <Card
                bg={"primary.500"}
                key={product.id}
                maxW="sm"
                marginBottom={5}
              >
                <CardBody>
                  <Image
                    src={product.images[2]} // Assuming the third image is the main image
                    alt={product.title}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{product.title}</Heading>
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
          </React.Fragment>
        ))}
      </Flex>
      {searchQuery.hasNextPage && (
        <Button
          onClick={() => searchQuery.fetchNextPage()}
          disabled={searchQuery.isFetchingNextPage}
        >
          {searchQuery.isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default ProductGrid;
