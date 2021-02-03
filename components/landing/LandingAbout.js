import styles from "./landing.module.css";

const LandingAbout = () => {
  return (
    <div className={styles.landingAbout}>
      <div className={styles.aboutContainer}>
        <p style={{ fontSize: "28px" }}>Register ASAP to get your spot!</p>
        <div className={styles.aboutHeading}>WHEN</div>
        <span className={styles.aboutDescription}>Apr 10 - Apr 11</span>
        <div className={styles.aboutHeading}>PRIORITY REGISTRATION</div>
        <span className={styles.aboutDescription}>Feb 4 - Mar 4</span>
        <div className={styles.aboutHeading}>THEME</div>
        <span className={styles.aboutDescription}>
          Supporting your local community.
        </span>
        <div className={styles.aboutHeading}>TEAMS</div>
        <span className={styles.aboutDescription}>
          2-4 people
          <br />
          If you don't have a team yet, don't worry you should still
          pre-register.
        </span>
      </div>
    </div>
  );
};

export default LandingAbout;
