import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductName } from "../../../Functions/GlobalFunctions";
import useFilteredProducts from "../../../Hooks/useFilteredProducts";
import styles from "./SliderImages.module.scss";

const SliderImages = () => {
  const { sliderCurrentValue, clickedProductSlider } =
    useSelector((state) => state.global);
  const dispatch = useDispatch();
  const sliderImagesRef = useRef();
  const { filteredProductsData, pathName } = useFilteredProducts();

  // console.log(clickedProductSlider);


  useEffect(() => {
    const imagesContainerEle = sliderImagesRef.current;
    
    if (pathName) {
      const productsEle = [...imagesContainerEle.children]
      console.log(productsEle);
      imagesContainerEle.style.transform = `translate(-${sliderCurrentValue * 100}vw, -50%)`
      return 
    }

    imagesContainerEle.style.transform = `translate(-${sliderCurrentValue * 100}vw, -50%)`
  }, [sliderCurrentValue]);


  useEffect(() => {
    const sliderImagesArr = [...sliderImagesRef.current.children];

    sliderImagesArr.forEach(ele => {
      const imgHolderEle = ele.children[0]
      const pEle = ele.children[0].children[0]
      const imgEle = ele.children[0].children[1]
      const productName = getProductName(clickedProductSlider)

      // console.log(imgEle.src);
      // console.log(clickedProductSlider);
      // console.log(imgEle.src === clickedProductSlider);
      if (imgEle.src === clickedProductSlider) {
        imgHolderEle.title = productName
        imgEle.src = clickedProductSlider
        imgEle.alt = productName
        pEle.innerHTML = productName
      }
    })
  }, [])


  return (
    <div className={styles.sliderImages} ref={sliderImagesRef}>
      {filteredProductsData.map(({ productImg, replacementImg, id }) => {
        const productName = getProductName(productImg)
        const replacementName = getProductName(replacementImg)
        return (
          <div className={styles.product} key={id}>
            <div className={styles.imgHolder}>
              <p className={styles.productName}>{productName}</p>
              <img
                src={productImg}
                alt={productName}
              />
            </div>

            <div className={styles.productsContainer}>
              <div
                className={styles.thumbnailHolder}
                title={productName}
                // onClick={(e) => switchProduct(e)}
              >
                <img
                  src={productImg}
                />
              </div>

              {replacementImg && (
                <div
                  className={styles.thumbnailHolder}
                  title={replacementName}
                  // onClick={(e) => switchProduct(e)}
                >
                  <img
                    src={replacementImg}
                    alt={replacementName}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SliderImages;
