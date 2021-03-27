import styles from "./eventAbout.module.css";
import Image from "next/image";

const EventAbout = () => {
  return (
    <div className={styles.background}>
      <div className={styles.topContainer}>
        <div className={styles.column}>
          <div className={styles.flexCenter}>
            <Image
              className={styles.vidReplace}
              src="/images/videoplacehold.svg"
              alt="videoplacehold"
              width={615}
              height={349}
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.rightCol}>
            <div className={styles.header}>createRU — Designathon</div>
            <div className={styles.date}>
              April 10 - April 11, 2020 <br /> 12pm to 4pm EST
            </div>
            <div className={styles.description}>
              Calling on students interested in product design, UI/UX, design
              thinking, or related fields.
            </div>
            <div className={styles.description}>Hosted by Creative X</div>
          </div>
        </div>
        <div className={styles.mobileImg}>
          <Image
            src="/images/noVideo.svg"
            alt="noVideo"
            width={615}
            height={439}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.leftCol}>
            <div className={styles.title}>About</div>
            <div className={styles.description}>
              createRU is a free,
              <span className={styles.bold}> virtual 2-day event </span>
              where college students can design for social impact. It’s the
              first designathon hosted at Rutgers, but its
              <span className={styles.bold}>
                {" "}
                open to students from any college.{" "}
              </span>
            </div>
            <div className={styles.subtitle}>During the event</div>
            <div className={styles.description}>
              They'll be a <span className={styles.bold}>keynote speaker </span>
              and a series of
              <span className={styles.bold}> workshops </span>
              to help inspire ideas and provide guidance with design.
            </div>
            <div className={styles.description}>
              No experience is necessary and no building of the final product
              (coding) is required.
            </div>
            <div className={styles.subtitle}>After the event</div>
            <div className={styles.description}>
              Judges will assess each team’s prototype at the end of the design
              period. Select projects will be rewarded with small prizes, and
              <span className={styles.bold}>
                {" "}
                we'll be sure to provide constructive feedback for every
                project.{" "}
              </span>
            </div>
            <div className={styles.description}>
              We hope this experience helps encourages meaningful ways to apply
              design while also providing an opportunity to practice
              collaboration and skills!
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div
            className={`${styles.flexCenter} ${styles.puzzlePeople}`}
            data-scroll
            data-scroll-speed="2"
          >
            <Image
              src="/images/puzzlepeople.svg"
              alt="puzzlepeople"
              width={565}
              height={470}
            />
          </div>

          <div className={styles.mobileImg}>
            <Image
              src="/images/puzzlepeople.svg"
              alt="puzzlepeople"
              width={264}
              height={213}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAbout;
