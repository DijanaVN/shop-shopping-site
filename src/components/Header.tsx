import { HStack, Button } from "@chakra-ui/react";
import CreateNewProductForm from "./CreateNewProductForm";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HStack>
      <CreateNewProductForm />
      <Button onClick={() => navigate("/shoppingCart")}>Show All Carts</Button>
    </HStack>
  );
};

export default Header;
