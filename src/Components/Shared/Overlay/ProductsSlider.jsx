import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductName } from "../../../Functions/GlobalFunctions";
import { productsData } from "../../../data/productsData";
import {
  changeSliderProduct,
  toggleProductsSlider,
} from "../../../features/globalSlice";
import styles from "./ProductsSlider.module.scss";


const ProductsSlider = () => {
  const { sliderCurrentValue, isProductsSliderActive } = useSelector(
    (state) => state.global
  );
  const productImg = productsData[sliderCurrentValue]?.imgUrl;
  const productName = getProductName(productImg);
  const dispatch = useDispatch();


  function closeSlider(e) {
    const sliderEle = e.currentTarget;
    const clickedEle = e.target;
    if (clickedEle === sliderEle) dispatch(toggleProductsSlider(false));
  }


  function nextProduct() {
    const isNotLastItem = sliderCurrentValue !== productsData.length - 1;
    if (isNotLastItem) dispatch(changeSliderProduct(sliderCurrentValue + 1));
  }


  function previousProduct() {
    const isNotFirstItem = sliderCurrentValue !== 0;
    if (isNotFirstItem) dispatch(changeSliderProduct(sliderCurrentValue - 1));
  }


  function changeProductsByKeys(e) {
    const pressedKey = e.key;
    const isLeftArrow = pressedKey === "ArrowLeft";
    const isRightArrow = pressedKey === "ArrowRight";

    if (isRightArrow) nextProduct();
    if (isLeftArrow) previousProduct();
  }


  useEffect(() => {
    const handleKeyDown = (e) => changeProductsByKeys(e);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sliderCurrentValue]);


  return (
    <div
      className={`${styles.slider} ${isProductsSliderActive ? "active" : ""}`}
      onClick={(e) => closeSlider(e)}
    >
      <div className={styles.arrowLeft} onClick={() => previousProduct()}>
        <i className="fa-solid fa-chevron-left "></i>
      </div>

      <div className={styles.imgHolder}>
        <p className={styles.productName}>{productName}</p>
        <img src={productImg} alt={productName} title={productName} />
      </div>

      <div className={styles.arrowRight} onClick={() => nextProduct()}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};
export default ProductsSlider;
