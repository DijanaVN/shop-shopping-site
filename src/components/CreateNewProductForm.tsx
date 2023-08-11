import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Flex,
  Select,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import useCreateNewProduct, { NewProduct } from "../hooks/useCreateNewProduct";
import shoes from "../images/alexandra-gorn-CJ6SJO_yR5w-unsplash.webp";
import { useNewProductContext } from "../StateManagement/NewProductContext";
import useCategories from "../hooks/useCategories";
import { useNavigate } from "react-router-dom";

// const categorySchema = z.object({
//   name: z.string().min(3, "Category name must be at least 3 characters"),
//   image: z.string(),
// });

const productSchema = z.object({
  title: z.string().min(3, "Product name must be at least 3 characters"),
  price: z.number({ invalid_type_error: "Price field is required." }),
  description: z.string(),
  image: z.string(),
  category: z.enum([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]),
});

type FormData = z.infer<typeof productSchema>;

const CreateNewProductForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { createNewProduct } = useCreateNewProduct();
  const { setNewProduct } = useNewProductContext();
  const { searchQuery } = useCategories();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(productSchema),
    defaultValues: { image: shoes },
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    try {
      const newProduct = {
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image || shoes, // Use the form data or a default image
        category: data.category,
      };

      // Mutate the category data
      createNewProduct(newProduct);
      setNewProduct(newProduct);

      // Optionally, you can handle success or navigate to another page
      console.log("Product created successfully");
      console.log(data);
      navigate("/newProduct");
      onClose();
      reset();
    } catch (error) {
      console.error("Error creating new product:", error);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Create New Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.title}>
                <FormLabel>Product</FormLabel>
                <Input type="text" {...register("title", { required: true })} />
                <FormErrorMessage>
                  {errors?.title && (
                    <Text color="red">{errors.title.message}</Text>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.description}>
                <FormLabel>Description</FormLabel>
                <Input type="text" {...register("description")} />
                <FormErrorMessage>
                  {errors?.description && (
                    <Text color="red">{errors.description.message}</Text>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.price}>
                <FormLabel>Price: $</FormLabel>
                <Flex align="center">
                  <Input
                    type="number"
                    {...register("price", { valueAsNumber: true })}
                  />
                </Flex>
                <FormErrorMessage>
                  {errors?.price && (
                    <Text color="red">{errors.price.message}</Text>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.category}>
                <FormLabel>Category</FormLabel>
                <Select
                  {...register("category", { required: true })}
                  placeholder="Select a category"
                >
                  {searchQuery.data?.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors?.category && (
                    <Text color="red">{errors.category.message}</Text>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl visibility={"hidden"} isInvalid={!!errors.image}>
                <FormLabel> Image</FormLabel>
                <Input
                  defaultValue={shoes}
                  type="hidden"
                  {...register("image")}
                />
                <FormErrorMessage>
                  {errors?.image && (
                    <Text color="red">{errors.image.message}</Text>
                  )}
                </FormErrorMessage>
              </FormControl>
              <ModalFooter>
                <Button type="submit" colorScheme="blue" mr={3}>
                  Create
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateNewProductForm;
