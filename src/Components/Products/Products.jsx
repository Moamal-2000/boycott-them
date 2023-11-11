import { productsData } from "../../data/productsData";
import Product from "./Product";
import styles from "./Products.module.scss";

const Products = () => {
  return (
    <div className={styles.products}>
      {productsData.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};
export default Products;
