import styles from "./ProductsSlider.module.scss"


const ProductsSlider = () => {
  return (
    <div className={styles.overlay}>
    <div className={styles.arrowLeft}>
      <i className="fa-solid fa-chevron-left "></i>
    </div>

    <div className={styles.imgHolder}>
      <p className={styles.productName}></p>
      <img src="#" alt="#" />
    </div>

    <div className={styles.arrowRight}>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  </div>
  )
}
export default ProductsSlider


