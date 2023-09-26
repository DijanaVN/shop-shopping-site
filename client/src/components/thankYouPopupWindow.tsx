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
            Thank you for signing up! We're delighted to welcome you as a valued
            member of our community. Please sign in to start your shopping
            journey with us!
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="green" onClick={onClose} ref={cancelRef}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ThankYouPopup;
