import { formatCurrency } from "../utilities/formatCurrency";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Button,
  Image,
  Text,
  HStack,
  Center,
  Box,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import "../index.css";
import useScrollToTop from "../hooks/useScrollToTop";
import { useNavigate } from "react-router-dom";
import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({
  id,
  title,
  image,
  category,
  price,
  quantity,
  description,
  onClose,
}: Product) => {
  const navigate = useNavigate();

  useScrollToTop();
  return (
    <Box className={`product-card`}>
      <Card
        height="720px"
        key={id}
        bg={`rgba(247, 215, 238,0.8)`}
        marginBottom={5}
      >
        <CardBody>
          <Image boxSize={"xs"} src={image} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text fontWeight={"bold"}>Category: {category}</Text>

            <Text fontWeight={"extrabold"} color="primary.300" fontSize="2xl">
              {formatCurrency(Number(price))}
            </Text>
          </Stack>
        </CardBody>{" "}
        <Divider />
        <Center>
          <CardFooter>
            <HStack justifyContent={"space-between"} spacing={10}>
              <AddToCartButton
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                quantity={quantity}
                onClose={onClose}
              />
              <Button
                onClick={() => {
                  navigate(`/product/${id}`);
                }}
                variant="solid"
                colorScheme="yellow"
              >
                Details
              </Button>
            </HStack>
          </CardFooter>
        </Center>
      </Card>
    </Box>
  );
};

export default ProductCard;
