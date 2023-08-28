import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
};

export default useScrollToTop;
