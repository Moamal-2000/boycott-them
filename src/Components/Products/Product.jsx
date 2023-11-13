import { memo } from "react";
import { useDispatch } from "react-redux";
import {
  changeSliderProduct,
  toggleProductsSlider,
} from "../../features/globalSlice";
import styles from "./Product.module.scss";

const Product = ({
  productName,
  productImg,
  replacementImg,
  type,
  scale,
  replacementScale,
  id,
}) => {
  const dispatch = useDispatch();

  function activeProductsSlider() {
    dispatch(toggleProductsSlider(true));
    dispatch(changeSliderProduct(id - 1));
  }

  return (
    <div className={`${styles.product} mix ${type}`} title={productName}>
      <div className={styles.imgHolder} onClick={() => activeProductsSlider()}>
        <img
          src={productImg}
          alt={productName}
          style={{ transform: `scale(${scale ? scale : 1})` }}
        />
      </div>

      <span className={styles.dividingLine}></span>

      <div className={styles.imgHolder}>
        <img
          src={replacementImg}
          alt={productName}
          style={{
            transform: `scale(${replacementScale ? replacementScale : 1})`,
          }}
          onClick={() => activeProductsSlider()}
        />
      </div>

      <i className={`fa-solid fa-check ${styles.checkMark}`}></i>
      <i className={`fa-solid fa-xmark ${styles.axeMark}`}></i>
    </div>
  );
};
export default memo(Product);
