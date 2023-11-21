import { NavLink } from "react-router-dom";
import styles from "./Filters.module.scss";
import { filterData } from "../../data/filtersData";

const Filters = () => {
  return (
    <div className={styles.filterButtons}>
      {filterData.map((filter) => (
        <button className={styles.filterButton} key={filter.id}>
          <NavLink to={filter.name}>{filter.text}</NavLink>
        </button>
      ))}
    </div>
  );
};
export default Filters;
