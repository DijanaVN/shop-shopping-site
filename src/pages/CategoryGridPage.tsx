import { Flex } from "@chakra-ui/react";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";
import usePoductsByCategory from "../hooks/useProductsByCategory";
import image from "../images/milad-fakurian-HE1_K4_-QT8-unsplash.webp";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import { Link } from "react-router-dom";
import CardFunction from "../components/CardFunction";
import ScrollToTopButton from "../components/ScrollToTheTopButton";

const CategoryGridPage = () => {
  const { selectedCategory } = useSelectedCategoryContext();
  const { onClick } = useSelectedProductContext();

  if (selectedCategory) {
    const { updatedProductsInCategory } =
      usePoductsByCategory(selectedCategory);

    return (
      <>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          margin={2}
          backgroundImage={image}
        >
          {updatedProductsInCategory?.map((m) =>
            selectedCategory === m.category ? (
              <Link
                to={`/product/${m.id}`}
                onClick={() => onClick(m)}
                key={m.id}
              >
                <CardFunction m={m} />
              </Link>
            ) : (
              ""
            )
          )}
        </Flex>
        <ScrollToTopButton />
      </>
    );
  }
};

export default CategoryGridPage;
