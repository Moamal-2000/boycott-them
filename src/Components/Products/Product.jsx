import { memo } from "react";
import { useDispatch } from "react-redux";
import { getProductName } from "../../Functions/GlobalFunctions";
import { globalUrl } from "../../data/productsData";
import {
  changeClickedProductSlider,
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

  function activeProductsSlider(e) {
    const imgEle = e.currentTarget.children[0];
    dispatch(toggleProductsSlider(true));
    dispatch(changeSliderProduct(id - 1));
    dispatch(changeClickedProductSlider(imgEle.src));
  }

  return (
    <div className={`${styles.product} mix ${type}`}>
      <div
        className={styles.imgHolder}
        title={productName}
        onClick={(e) => activeProductsSlider(e)}
      >
        <img
          src={productImg}
          alt={productName}
          loading="lazy"
          style={{ transform: `scale(${scale ? scale : 1})` }}
        />
      </div>

      <span className={styles.dividingLine}></span>

      <div
        className={styles.imgHolder}
        title={replacementName}
        onClick={(e) => activeProductsSlider(e)}
      >
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
        />
      </div>

      <i className={`fa-solid fa-check ${styles.checkMark}`}></i>
      <i className={`fa-solid fa-xmark ${styles.axeMark}`}></i>
    </div>
  );
};
export default memo(Product);
