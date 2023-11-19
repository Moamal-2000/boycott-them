import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductName } from "../../../Functions/GlobalFunctions";
import { productsData } from "../../../data/productsData";
import {
  changeClickedProductSlider,
  changeSliderProduct,
  toggleProductsSlider,
} from "../../../features/globalSlice";
import styles from "./ProductsSlider.module.scss";

const ProductsSlider = () => {
  const { sliderCurrentValue, isProductsSliderActive, clickedProductSlider } =
    useSelector((state) => state.global);
  const product = productsData[sliderCurrentValue];
  const productImg = product?.productImg;
  const [productName, setProductName] = useState(getProductName(productImg));
  const replacementImg = product?.replacementImg;
  const replacementName = getProductName(replacementImg);
  const sliderImgRef = useRef();
  const dispatch = useDispatch();
  const clickedProduct = productsData.filter(
    ({ productImg, replacementImg }) =>
      productImg === clickedProductSlider ||
      replacementImg === clickedProductSlider
  )[0];

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

  function switchProduct(e) {
    const target = e.currentTarget;
    const imgEle = target.children[0];
    const thumbnailHolderEle = imgEle.parentElement;
    const sliderImgEle = sliderImgRef.current;
    sliderImgEle.src = imgEle.src;

    // thumbnailHolderEle.style.cssText = `
    //   border-color: blue;
    // `
  }

  useEffect(() => {
    const handleKeyDown = (e) => changeProductsByKeys(e);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sliderCurrentValue]);

  useEffect(() => {
    const { productImg, replacementImg } = clickedProduct;
    if (productImg === clickedProductSlider)
      setProductName(getProductName(clickedProductSlider));
    if (replacementImg === clickedProductSlider)
      setProductName(getProductName(clickedProductSlider));

    sliderImgRef.current.src = clickedProductSlider;
  }, [productName]);

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
        <img
          src={productImg}
          alt={productName}
          title={productName}
          ref={sliderImgRef}
        />
      </div>

      <div className={styles.productsContainer}>
        <div
          className={styles.thumbnailHolder}
          title={productName}
          onClick={(e) => switchProduct(e)}
        >
          <img src={productImg} alt={productName} />
        </div>

        {replacementImg && (
          <div
            className={styles.thumbnailHolder}
            title={replacementName}
            onClick={(e) => switchProduct(e)}
          >
            <img src={replacementImg} alt={replacementName} />
          </div>
        )}
      </div>

      <div className={styles.arrowRight} onClick={() => nextProduct()}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};
export default ProductsSlider;
