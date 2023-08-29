import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { User, useUserContext } from "../../StateManagement/UserInfoContext";
import { zodResolver } from "@hookform/resolvers/zod";
import useScrollToTop from "../../hooks/useScrollToTop";

const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  name: z.object({
    firstname: z.string(),
    lastname: z.string(),
  }),
  address: z.object({
    city: z.string(),
    street: z.string(),
    number: z.string(),
    zipcode: z.number({ invalid_type_error: "Zipcode field is required." }),
  }),
});

type FormData = z.infer<typeof userSchema>;

const SignUpPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const generateRandomUniqueUri = (): number => {
    const timestamp = Date.now(); // Get the current timestamp in milliseconds
    const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    const id = `${timestamp}${randomNum}`; // Concatenate the timestamp and random number
    return Number(id);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
    defaultValues: { id: generateRandomUniqueUri() },
  });

  const { addNewUser } = useUserContext();

  const onSubmit = async (data: FieldValues) => {
    try {
      if (data.password !== data.confirmPassword) {
        console.error("Passwords do not match");
        return;
      }
      const newUserData: User = {
        id: generateRandomUniqueUri(),
        email: data.email,
        username: data.username,
        password: data.password,
        name: {
          firstname: data.name.firstname,
          lastname: data.name.lastname,
        },
        address: {
          city: data.address.city,
          street: data.address.street,
          number: data.address.number,
          zipcode: String(data.address.zipcode),
        },
      };
      addNewUser(newUserData);
      console.log("User created successfully");
      console.log(newUserData);
      onClose();
      reset();
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };
  useScrollToTop();
  return (
    <Box backgroundPosition="center" backgroundRepeat="no-repeat">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="start">
          <Box>
            <Text fontWeight={"bold"} paddingBottom={3} fontSize={"lg"}>
              User:
            </Text>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register("email", { required: true })} />
              {errors.email && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>{" "}
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <Text color={"red"}>Passwords do not match.</Text>
              )}
              {errors.confirmPassword?.type === "validate" && (
                <Text color={"red"}>Passwords do not match</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                {...register("name.firstname", { required: true })}
              />
              {errors.name?.firstname && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                {...register("name.lastname", { required: true })}
              />
              {errors.name?.lastname && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>
          </Box>
          <Box marginBottom={3} fontSize={"sm"}>
            <Text fontWeight={"bold"} paddingBottom={3} fontSize={"lg"}>
              Address:
            </Text>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                {...register("address.city", { required: true })}
              />
              {errors.address?.city && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Street</FormLabel>
              <Input
                type="text"
                {...register("address.street", { required: true })}
              />
              {errors.address?.street && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Number</FormLabel>
              <Input
                type="text"
                {...register("address.number", { required: true })}
              />
              {errors.address?.number && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Zipcode</FormLabel>
              <Input
                type="number"
                {...register("address.zipcode", { valueAsNumber: true })}
              />
              {errors.address?.zipcode && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>
          </Box>
        </VStack>
        <Center mt={2}>
          <Button type="submit" colorScheme="blue">
            Sign Up
          </Button>
        </Center>
      </form>
    </Box>
  );
};

export default SignUpPage;
