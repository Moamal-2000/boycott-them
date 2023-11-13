import { globalUrl } from "../../data/productsData";
import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.introductionBackground}>
          <img
            src={`${globalUrl}/headimg.webp`}
            alt="palestine flag"
          />
        </div>

        <div className={styles.introductionContent}>
          <div className="container">
            <h1>لا تدفع ثمن رصاصهم !</h1>
            <p>
              عندما نتحد معًا لنقاطع هذه الشركات، نضع ضغطًا على القوى القائمة
              على الظلم ونساهم في تغيير الواقع. لا تقلق إذا كنت تشعر بأن قرار
              المقاطعة قد يكون صغيرًا. فالتغيير يبدأ دائمًا بخطوة صغيرة، وهذه
              الخطوة تأتي من قلب شخص واحد يؤمن بالحق والعدل.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Introduction;
