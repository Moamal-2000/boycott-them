import useFilteredProducts from "../../Hooks/useFilteredProducts";
import Product from "./Product";
import styles from "./Products.module.scss";

const Products = () => {
  const { filteredProductsData } = useFilteredProducts();

  return (
    <div className={styles.products}>
      {filteredProductsData.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};
export default Products;
