import { Button, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";
import React, { useState } from "react";
import { useUserSignInContext } from "../StateManagement/SignInUserContext";

interface AddToCartButtonProps {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  quantity: number;
  onClose: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ id, onClose }) => {
  const { increaseCartQuantity } = useNewCartContext();
  const navigate = useNavigate();
  const { userSignIn } = useUserSignInContext();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const addToCart = () => {
    if (userSignIn) {
      increaseCartQuantity(id ?? 0), navigate("/shoppingCartGrid");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsSignedIn(true);
    }
  };

  return (
    <>
      {isSignedIn ? (
        <Text>
          Please{" "}
          <Link
            to="/signin"
            style={{ textDecoration: "underline" }}
            onClick={onClose}
          >
            sign in
          </Link>{" "}
          to add items to your cart.
        </Text>
      ) : (
        <Button onClick={addToCart} variant="solid" colorScheme="orange">
          Add to cart
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
