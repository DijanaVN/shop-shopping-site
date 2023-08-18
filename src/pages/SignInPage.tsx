import React from "react";
import { useForm } from "react-hook-form";
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
} from "@chakra-ui/react";
import img from "../images/jungwoo-hong-cYUMaCqMYvI-unsplash.webp";

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  name: z.object({
    firstname: z.string(),
    lastname: z.string(),
  }),
  address: z.object({
    city: z.string(),
    street: z.string(),
    number: z.string(),
    zipcode: z.string(),
  }),
  phone: z.string(),
});

type FormData = z.infer<typeof userSchema>;

const SignInPage: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // You can perform further actions with the user data here
  };

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
                {...register("address.zipcode", { required: true })}
              />
              {errors.address?.zipcode && (
                <Text color={"red"}>This field is required</Text>
              )}
            </FormControl>
          </Box>
        </VStack>
        <Center mt={2}>
          <Button type="submit" colorScheme="blue">
            Sign In
          </Button>
        </Center>
      </form>
    </Box>
  );
};

export default SignInPage;
