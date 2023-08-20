import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { User, useUserContext } from "../StateManagement/UserInfoContext";
import { z } from "zod";
import { useUserSignInContext } from "../StateManagement/SignInUserContext";
import { useNavigate } from "react-router-dom";
const schema = z.object({
  emailOrUsername: z.string().min(1),
  password: z.string().min(1),
});
type FormData = z.infer<typeof schema>;

const SignInPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const { setUserSignIn } = useUserSignInContext();
  const navigate = useNavigate();

  const users: User[] = JSON.parse(localStorage.getItem("UserStorage") || "[]");

  const onSubmit = (data: FieldValues) => {
    try {
      schema.parse(data);

      const matchedUser = users.find(
        (user: User) =>
          (user.email === data.emailOrUsername ||
            user.username === data.emailOrUsername) &&
          user.password === data.password
      );
      console.log(matchedUser);

      if (!matchedUser) {
        setErrorMessage("Wrong email address/username or password.");
      } else if (matchedUser.password === data.password) {
        console.log("User exists:", matchedUser);
        setErrorMessage("");
        setUserSignIn(matchedUser);
        onClose();
        navigate("/userPage");
      }
      reset();
    } catch (error) {
      console.error("Validation error:", error);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errorMessage && <Text color="red">{errorMessage}</Text>}
        <FormControl>
          <FormLabel>Email or Username</FormLabel>
          <Input
            type="text"
            {...register("emailOrUsername", { required: true })}
          />
          {errors.emailOrUsername && (
            <Text color="red">This field is required</Text>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <Text color="red">This field is required</Text>}
        </FormControl>
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
