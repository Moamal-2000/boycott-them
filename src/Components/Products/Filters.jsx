import styles from "./Filters.module.scss"

const Filters = () => {
  return (
    <div className={styles.filterButtons}>
      <button className={styles.filterButton} data-filter=".companies">
        الشركات
      </button>
      <button className={styles.filterButton} data-filter=".restaurants">
        المطاعم
      </button>
      <button className={styles.filterButton} data-filter=".luxuries">
        الكماليات
      </button>
      <button className={styles.filterButton} data-filter=".detergents">
        المنظفات
      </button>
      <button className={styles.filterButton} data-filter=".dairy">
        الألبآن
      </button>
      <button className={styles.filterButton} data-filter=".drinks">
        المشروبات
      </button>
      <button className={styles.filterButton} data-filter="all">
        الجميع
      </button>
    </div>
  );
};
export default Filters;
