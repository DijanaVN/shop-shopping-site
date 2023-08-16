import { Divider, Text } from "@chakra-ui/react";
import CreateNewCategoryForm from "../components/CreateNewProductForm";
const Footer = () => {
  return (
    <>
      <Divider />
      <Text>
        <CreateNewCategoryForm />
      </Text>
    </>
  );
};

export default Footer;
