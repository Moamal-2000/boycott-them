import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <div className={styles.icon}>
          <i className="uil uil-facebook-f"></i>
        </div>
        <div className={styles.icon}>
          <i className="uil uil-instagram-alt"></i>
        </div>
        <div className={styles.icon}>
          <i className="uil uil-dribbble"></i>
        </div>
      </div>

      <p>
        <span> تم التطوير بواسطة</span>
        <a href="https://www.facebook.com/S3eedKh3led" target="_blank">
          سعيد خالد
        </a>
        <span>و</span>
        <a href="https://www.facebook.com/MoamalAlaa109" target="_blank">
          مؤمل علاء
        </a>
      </p>
    </footer>
  );
};
export default Footer;
