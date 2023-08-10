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

const categorySchema = z.object({
  name: z.string().min(3, "Category name must be at least 3 characters"),
});

type FormData = z.infer<typeof categorySchema>;

const CategoryUpdateForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateCategory } = useCategories();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(categorySchema) });

  const onSubmit = async (data: FieldValues) => {
    try {
      const updatedCategory = {
        id: 9, // Replace with the actual category ID
        name: data.name,
      };

      // Mutate the category data
      updateCategory(updatedCategory);

      // Optionally, you can handle success or navigate to another page
      console.log("Category updated successfully");
      console.log(data);
      onClose();
      reset();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Update Category Name</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Category</ModalHeader>
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

export default CategoryUpdateForm;
