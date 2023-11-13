import { memo } from "react";
import { useDispatch } from "react-redux";
import { getProductName } from "../../Functions/GlobalFunctions";
import { globalUrl } from "../../data/productsData";
import {
  changeSliderProduct,
  toggleProductsSlider,
} from "../../features/globalSlice";
import styles from "./Product.module.scss";

const Product = ({
  productImg,
  replacementImg,
  type,
  scale,
  replacementScale,
  id,
}) => {
  const dispatch = useDispatch();
  const productName = getProductName(productImg);
  const replacementName = getProductName(replacementImg);

  function activeProductsSlider() {
    dispatch(toggleProductsSlider(true));
    dispatch(changeSliderProduct(id - 1));
  }

  return (
    <div className={`${styles.product} mix ${type}`}>
      <div
        className={styles.imgHolder}
        title={productName}
        onClick={() => activeProductsSlider()}
      >
        <img
          src={productImg}
          alt={productName}
          loading="lazy"
          style={{ transform: `scale(${scale ? scale : 1})` }}
        />
      </div>

      <span className={styles.dividingLine}></span>

      <div className={styles.imgHolder} title={replacementName}>
        <img
          src={
            replacementImg
              ? replacementImg
              : `${globalUrl}/placeholder-image.webp`
          }
          alt={replacementName}
          loading="lazy"
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
