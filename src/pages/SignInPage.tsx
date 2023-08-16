import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Card,
  Center,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import img from "../images/etienne-girardet-Ai6WKLEakak-unsplash.webp";

const schema = z.object({
  email: z.string().email("Invalid email address").min(1),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Record<string, any>) => {
    // Implement your sign-in logic here
    console.log("Signing in with data:", data);
  };

  return (
    <Center h="100vh">
      <Box width={"50%"} backgroundImage={img} backgroundSize={"cover"}>
        <Center h="100vh">
          <Card
            backgroundColor={`rgba(243, 243, 243, 0.7)`}
            backdropBlur={"lg"}
            boxSize={"lg"}
            p={10}
          >
            <Heading paddingTop={10} textAlign="center" size="lg">
              Sign In
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} mt={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" {...register("email")} />
                  {errors.email && (
                    <Text color="red">{(errors.email as any).message}</Text>
                  )}
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...register("password")} />
                  {errors.password && (
                    <Text color="red">{(errors.password as any)?.message}</Text>
                  )}
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  Sign In
                </Button>
              </Stack>
            </form>
          </Card>
        </Center>
      </Box>
    </Center>
  );
};

export default SignInPage;
