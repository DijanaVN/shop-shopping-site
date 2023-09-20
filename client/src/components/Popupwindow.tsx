import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";

interface PopupWindowProps {
  isOpen: boolean;
  onClose: () => void;
  state: string;
  action: string;
  cancelRef: React.RefObject<HTMLButtonElement>;
}

const PopupWindow: React.FC<PopupWindowProps> = ({
  isOpen,
  onClose,
  state,
  action,
  cancelRef,
}) => {
  const handleConfirm = () => {
    onClose();
  };
  const capitalizedState = state.charAt(0).toUpperCase() + state.slice(1);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            {capitalizedState} {`${action}:`}
          </AlertDialogHeader>
          <AlertDialogBody>
            Your {state} was successfully {action}.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="blue" ref={cancelRef} onClick={handleConfirm}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default PopupWindow;
