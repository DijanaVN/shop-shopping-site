import {
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import { useSearchText } from "../StateManagement/SearchTextContext";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  searchText: z
    .string()
    .min(3, { message: "Search input must be at least 3 characters." }),
});

interface FormData {
  searchText: string;
}

const SearchDrawer = () => {
  const { setSearchText, searchText } = useSearchText();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    setSearchText(data.searchText);
    console.log(data);
    reset();
    navigate("/");
  };
  console.log(searchText);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" />

        <Input
          paddingLeft={10}
          {...register("searchText")}
          borderRadius={5}
          placeholder="Search..."
          variant={"filled"}
        />
        <InputRightElement width="2.5rem">
          <Button type="submit" h="100%" size="sm" borderRadius="5"></Button>
        </InputRightElement>
      </InputGroup>
      {errors.searchText && (
        <Text paddingLeft={2} color={"yellow"}>
          {errors.searchText.message}
        </Text>
      )}
    </form>
  );
};

export default SearchDrawer;
