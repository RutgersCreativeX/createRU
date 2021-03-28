import styles from "./howItWorks.module.css";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className={styles.background}>
      <div className={styles.header}>How createRU works</div>
      <div className={styles.topContainer}>
        <div className={styles.column}>
          <div className={styles.mobileImg}>
            <Image
              src="/images/research.svg"
              alt="research"
              width={335}
              height={228}
            />
          </div>
          <div className={styles.leftCol}>
            <div className={styles.steps}>| Step 1</div>
            <div className={styles.title}>Research</div>
            <div className={styles.description}>
              After deciding on which challenge you’d like to address, we
              recommend conducting research to understand the problem and your
              end-users. Start brainstorming ideas on how you’ll tackle the
              problem through your app/website design.
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.flexCenter} data-scroll data-scroll-speed="2">
            <Image
              src="/images/research.svg"
              alt="research"
              width={500}
              height={430}
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.flexLeft} data-scroll data-scroll-speed="2">
            <Image
              src="/images/prototype.svg"
              alt="prototype"
              width={520}
              height={417}
            />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.mobileImg}>
            <Image
              src="/images/prototype.svg"
              alt="prototype"
              width={335}
              height={351}
            />
          </div>
          <div className={styles.rightCol}>
            <div className={styles.steps}>| Step 2</div>
            <div className={styles.title}>Prototyping</div>
            <div className={styles.description}>
              Using Figma or any other design tool, prototype your solution for
              the challenge. Work together to create a working,
              click-throughable prototype.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.mobileImg}>
            <Image
              src="/images/presentation.svg"
              alt="presentation"
              width={335}
              height={273}
            />
          </div>
          <div className={styles.leftCol}>
            <div className={styles.steps}>| Step 3</div>
            <div className={styles.title}>Presentation</div>
            <div className={styles.description}>
              Submit a 5-minute max video presentation of your process and work
              via (Dropbox, Youtube, or Google Drive). Submissions are due
              <span className={styles.bold}>
                {" "}
                Sunday 4/11 @ 12:00 PM.{" "}
              </span>{" "}
              After judges review your project, you’ll receive feedback and
              possibly win a prize!
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.flexCenter} data-scroll data-scroll-speed="2">
            <Image
              src="/images/presentation.svg"
              alt="presentation"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
