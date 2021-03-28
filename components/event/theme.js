import styles from "./theme.module.css";
import Image from "next/image";

const Theme = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.title}>Theme</div>
          {/* <div className={styles.description}>
            This year’s theme revolves around{" "}
            <span className={styles.bold}>
              {" "}
              supporting your local community.{" "}
            </span>
            Under this overarching theme, your project can address one of the
            following three prompts.
          </div> */}
        </div>

        <div className={styles.card}>
          <div className={styles.flexCenter}>
            <Image
              src="/images/education.svg"
              alt="videoplacehold"
              width={448}
              height={448}
            />
          </div>
          <div className={styles.cardDescription}>
            {/* <div className={styles.prompt}>PROMPT 1</div> */}
            <div className={styles.subtitle}>
              Design for your local community
            </div>
            <div className={styles.blurb}>
              This year’s theme revolves around{" "}
              <span className={styles.bold}>
                supporting your local community.
              </span>
            </div>
          </div>
        </div>
        {/* <div className={styles.card}>
        <div className={styles.flexCenter}>
          <Image
            src="/images/business.svg"
            alt="videoplacehold"
            width={192}
            height={192}
          />
        </div>
        <div className={styles.cardDescription}>
          <div className={styles.prompt}>PROMPT 2</div>
          <span className={styles.bold}>Business</span>
          <br />
          Design a service for your library that supports students, homeless
          people, teachers, employees, and more
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.flexCenter}>
          <Image
            src="/images/health.svg"
            alt="videoplacehold"
            width={192}
            height={192}
          />
        </div>
        <div className={styles.cardDescription}>
          <div className={styles.prompt}>PROMPT 3</div>
          <span className={styles.bold}>Health</span>
          <br />
          Design a service for your library that supports students, homeless
          people, teachers, employees, and more
        </div>
      </div> */}
      </div>
    </div>
  );
};
export default Theme;
