import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFilteredProducts from "../../../Hooks/useFilteredProducts";
import {
  changeSliderProduct,
  toggleProductsSlider,
} from "../../../features/globalSlice";
import styles from "./ProductsSlider.module.scss";
import SliderImages from "./SliderImages";

const ProductsSlider = () => {
  const { sliderCurrentValue } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const { filteredProductsData } = useFilteredProducts();

  function closeSlider(e) {
    const sliderEle = e.currentTarget;
    const clickedEle = e.target;
    if (clickedEle === sliderEle) dispatch(toggleProductsSlider(false));
  }

  function nextProduct() {
    const isNotLastItem =
      sliderCurrentValue !== filteredProductsData.length - 1;
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

  // function switchProduct(e) {
  //   const target = e.currentTarget;
  //   const imgEle = target.children[0];
  //   const imgSrcUrl = imgEle.src;
  //   const thumbnailHolderEle = imgEle.parentElement;
  //   const sliderImgEle = sliderImgRef.current;

  //   dispatch(changeClickedProductSlider(imgSrcUrl));
  //   // sliderImgEle.src = imgSrcUrl;

  //   // thumbnailHolderEle.style.cssText = `
  //   //   border-color: blue;
  //   // `
  // }

  useEffect(() => {
    const handleKeyDown = (e) => changeProductsByKeys(e);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sliderCurrentValue]);

  return (
    <div className={`${styles.slider}`} onClick={(e) => closeSlider(e)}>
      <div className={styles.arrowLeft} onClick={() => previousProduct()}>
        <i className="fa-solid fa-chevron-left "></i>
      </div>

      <SliderImages />

      <div className={styles.arrowRight} onClick={() => nextProduct()}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};
export default ProductsSlider;
