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
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import useCategories from "../hooks/useUpdateCategories";
import useCreateNewCategory from "./../hooks/useCreateNewCategory";

const categorySchema = z.object({
  name: z.string().min(3, "Category name must be at least 3 characters"),
  image: z.string(),
});

type FormData = z.infer<typeof categorySchema>;

const CreateNewCategoryForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { updatedCategoryName, setUpdatedCategoryName, handleUpdateCategory } =
  //   useCategoryContext();
  const { createNewCategory } = useCreateNewCategory();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: { image: "https://placeimg.com/640/480/any" },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const newCategory = {
        name: data.name,
        image: "https://placeimg.com/640/480/any",
      };

      // Mutate the category data
      createNewCategory(newCategory);

      // Optionally, you can handle success or navigate to another page
      console.log("Category updated successfully");
      console.log(data);
      onClose();
      reset();
    } catch (error) {
      console.error("Error creating new category:", error);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Create New Category</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Category Name</FormLabel>
                <Input type="text" {...register("name", { required: true })} />
                <FormErrorMessage>
                  {errors?.name && (
                    <Text color="red">{errors.name.message}</Text>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl visibility={"hidden"} isInvalid={!!errors.name}>
                <FormLabel>Category Image</FormLabel>
                <Input type="text" {...register("image", { required: true })} />
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

export default CreateNewCategoryForm;
