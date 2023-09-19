import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";
import React, { useState } from "react";

import { Product } from "../hooks/useProducts";
import { useUserSignInContext } from "../StateManagement/SignInUserContext";
import SignInPage from "./../pages/SignInSingUp/SignInPage";

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
    } else {
      setIsSignedIn(true);
    }
  };

  return (
    <>
      {isSignedIn ? (
        // Render a sign-in message or redirection logic here
        <p>
          Please{" "}
          <Link
            to="/signin"
            style={{ textDecoration: "underline" }}
            onClick={onClose} // Call onClose when the link is clicked
          >
            sign in
          </Link>{" "}
          to add items to your cart.
        </p>
      ) : (
        // You can also add a redirection logic here if needed
        <Button onClick={addToCart} variant="solid" colorScheme="orange">
          Add to cart
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
