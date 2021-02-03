import styles from "./landing.module.css";

const LandingPresents = () => {
  return (
    <div className={styles.landingPresents}>
      <div className={styles.presentsContainer}>
        <p
          className={styles.noto}
          style={{ fontSize: "20px", letterSpacing: "3px" }}
        >
          CREATIVE X PRESENTS
        </p>
        {/* make font size responsive */}
        <div style={{ fontSize: "96px", letterSpacing: "3px" }}>createRU</div>
        <div
          className={styles.noto}
          style={{ fontSize: "24px", fontWeight: "700" }}
        >
          <p>April 10 - April 11</p>
          <p>Design for the community.</p>
          <p style={{ color: "#3A9BEC" }}>Open to students at any college!</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPresents;
