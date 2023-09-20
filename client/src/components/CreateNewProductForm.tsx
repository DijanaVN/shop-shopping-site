import React, { useRef, useState } from "react";
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
import { useNewProductContext } from "../StateManagement/NewProductContext";
import useCategories from "../hooks/useCategories";
import { useNavigate } from "react-router-dom";
import { generateRandomUniqueUri } from "./GenerateRandomNumberForId";
import PopupWindow from "./Popupwindow";

const productSchema = z.object({
  id: z.number({ invalid_type_error: "Field is required." }),
  title: z.string().min(3, "Product name must be at least 3 characters"),
  price: z.number({ invalid_type_error: "Price field is required." }),
  description: z.string(),
  image: z.any(),
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
  const { addNewProduct } = useNewProductContext();
  const { searchQuery } = useCategories();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(productSchema),
    defaultValues: { id: generateRandomUniqueUri() },
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const newProductData = {
        id: generateRandomUniqueUri(),
        title: data.title,
        price: data.price,
        description: data.description,
        image: imagePreview || "",
        category: data.category,
        quantity: 0,
      };
      addNewProduct(newProductData);

      console.log("Product created successfully");
      console.log(data);
   
    } catch (error) {
      console.error("Error creating new product:", error);
    }
    setPopupOpen(true);
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
              <FormControl visibility={"hidden"} isInvalid={!!errors.id}>
                <FormLabel> Id</FormLabel>
                <Input
                  defaultValue={generateRandomUniqueUri()}
                  type="hidden"
                  {...register("id")}
                />
                <FormErrorMessage>
                  {errors?.id && <Text color="red">{errors.id.message}</Text>}
                </FormErrorMessage>
              </FormControl>
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
              <FormControl
                marginBottom={2}
                marginTop={2}
                isInvalid={!!errors.image}
              >
                <FormLabel>Image</FormLabel>
                <Input
                  type="file"
                  {...register("image")}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        const base64String = event.target?.result as string;
                        setImagePreview(base64String);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  style={{
                    border: "none",
                    margin: "1",
                    paddingTop: "2",
                  }}
                />
                {imagePreview && (
                  <img
                    src={imagePreview} 
                    alt="Selected"
                    style={{ marginTop: "10px", maxWidth: "100px" }}
                  />
                )}
              </FormControl>
              <ModalFooter>
                <Button type="submit" colorScheme="blue" mr={3}>
                  Create
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
              <PopupWindow
                isOpen={popupOpen}
                onClose={() => {
                  setPopupOpen(false);
                  onClose(); 
                  setImagePreview(null);
                  reset(); 
                }}
                state="product"
                action="added"
                cancelRef={cancelRef}
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateNewProductForm;
