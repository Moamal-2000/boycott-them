import { useLocation } from "react-router-dom";
import { productsData } from "../../data/productsData";
import Product from "./Product";
import styles from "./Products.module.scss";

const Products = () => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  const filteredProducts = productsData.filter(
    (product) => product.type === pathName
  );
  const data = filteredProducts.length === 0 ? productsData : filteredProducts;

  return (
    <div className={styles.products}>
      {data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};
export default Products;
