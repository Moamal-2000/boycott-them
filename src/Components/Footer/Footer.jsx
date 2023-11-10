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
        تم التطوير بواسطة
        <a href="https://www.facebook.com/S3eedKh3led">سعيد خالد</a>
      </p>
    </footer>
  );
};
export default Footer;
