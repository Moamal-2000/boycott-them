import { useLocation } from "react-router-dom";
import { productsData } from "../data/productsData";

const useFilteredProducts = () => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  const filteredProducts = productsData.filter(
    (product) => product.type === pathName
  );
  const filteredProductsData =
    filteredProducts.length === 0 ? productsData : filteredProducts;

  return { filteredProductsData, pathName };
};
export default useFilteredProducts;
