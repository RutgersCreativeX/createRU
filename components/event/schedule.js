import styles from "./schedule.module.css";
import Image from "next/image";

const Schedule = () => {
  return (
    <div className={styles.background}>
      <div className={styles.title}>Schedule</div>
      <div className={styles.container}>
        <div className={styles.dates}>
          <div className={styles.selectedDay}>Saturday, April 10</div>
          <div className={styles.day}>Sunday, April 11</div>
        </div>
        <div className={styles.schedule}>
          <div className={styles.line}></div>
          <div className={styles.circle + ` ` + styles.one}></div>
          <div className={styles.circle + ` ` + styles.two}></div>
          <div className={styles.circle + ` ` + styles.three}></div>
          <div className={styles.smallLine + ` ` + styles.lineOne}></div>
          <div className={styles.smallLine + ` ` + styles.lineTwo}></div>
          <div className={styles.smallLine + ` ` + styles.lineThree}></div>

          <div className={styles.card + ` ` + styles.cardOne}>
            <div className={styles.eventName}>Event Name 1</div>
            <div className={styles.details}>
              Event details describing the speaker, workshop, ceremony, etc.
            </div>
            <a
              className="blueButton"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoom
            </a>
          </div>
          <div className={styles.card + ` ` + styles.cardTwo}>
            <div className={styles.eventName}>Event Name 2</div>
            <div className={styles.details}>
              Event details describing the speaker, workshop, ceremony, etc.
            </div>
            <a
              className="blueButton"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoom
            </a>
          </div>
          <div className={styles.card + ` ` + styles.cardThree}>
            <div className={styles.eventName}>Event Name 3</div>
            <div className={styles.details}>
              Event details describing the speaker, workshop, ceremony, etc.
            </div>
            <a
              className="blueButton"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoom
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
