import styles from "./landing.module.css";

const LandingPresents = () => {
  return (
    <div className={styles.landingPresents}>
      <div className={styles.presentsContainer}>
        <div className={styles.presentsHeader}>CREATIVE X PRESENTS</div>

        <div className={styles.presentsCreateRU}>createRU</div>
        <div className={styles.presentsDescription}>
          <div>April 10 - April 11</div>
          <div>Design for the community.</div>
          <div style={{ color: "#3A9BEC" }}>
            Open to students at any college!
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPresents;
