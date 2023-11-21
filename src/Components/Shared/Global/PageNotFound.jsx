import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <main className={styles.Container}>
      <div>
        <h2>Page not found</h2>
        <button type="button">
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </main>
  );
};
export default PageNotFound;
