import React from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";

interface ThankYouPopupWindowProps {
  isOpen: boolean;
  onClose: () => void;
  cancelRef: React.RefObject<HTMLButtonElement>;
}

const ThankYouPopup: React.FC<ThankYouPopupWindowProps> = ({
  isOpen,
  onClose,
  cancelRef,
}) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Thank You!</AlertDialogHeader>
          <AlertDialogBody>
            Your order has been successfully placed. Thank you for your
            purchase!
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="green" onClick={onClose}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ThankYouPopup;
