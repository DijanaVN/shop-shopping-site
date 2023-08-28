import { Flex } from "@chakra-ui/react";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";
import usePoductsByCategory from "../hooks/useProductsByCategory";
import image from "../images/milad-fakurian-HE1_K4_-QT8-unsplash.webp";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTheTopButton";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";

const CategoryGridPage = () => {
  const { selectedCategory } = useSelectedCategoryContext();
  const { onClick } = useSelectedProductContext();

  if (selectedCategory) {
    const { updatedProductsInCategory } =
      usePoductsByCategory(selectedCategory);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [selectedCategory]);

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
                <ProductCard
                  id={m.id}
                  title={m.title}
                  price={m.price}
                  description={m.description}
                  category={m.category}
                  image={m.image}
                  quantity={m.quantity}
                />
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
