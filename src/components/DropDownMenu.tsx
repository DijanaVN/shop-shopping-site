import React from "react";
import {
  Menu,
  MenuList,
  MenuItem,
  HStack,
  Button,
  MenuButton,
  IconButton,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";
import useCategories from "../hooks/useCategories";

const DropDownMenu = () => {
  const { searchQuery } = useCategories();
  const { selectedCategory, onClick } = useSelectedCategoryContext();
  const [isAccordionOpen, setIsAccordionOpen] = React.useState(false);

  if (!searchQuery.data) {
    return <Text>Loading...</Text>;
  }

  return (
    <Menu>
      <MenuButton
        variant={"ghost"}
        position="fixed"
        borderRadius="full"
        top="50px"
        left="100px"
        transform="translateY(-50%)"
        as={IconButton}
        aria-label="Options"
        icon={<MdMenu fontSize={"40"} />}
        _hover={{ backgroundColor: "transparent", color: "blue.500" }}
        display={{ base: "block", lg: "none" }}
      />
      <MenuList>
        <MenuItem as={Link} to={"/"}>
          Home
        </MenuItem>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              >
                Categories
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {searchQuery.data.map((category, index) => (
                <MenuItem
                  key={index}
                  _hover={{ bg: "primary.500" }}
                  onClick={() => {
                    onClick(category);
                  }}
                >
                  <Link to={`/category`}>
                    <Text
                      color={selectedCategory === category ? "blue" : "black"}
                    >
                      {category}
                    </Text>
                  </Link>
                </MenuItem>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <MenuItem as={Link} to={"/contactus"}>
          Contact
        </MenuItem>
        <MenuItem as={Link} to={"/aboutus"}>
          About Us
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropDownMenu;
