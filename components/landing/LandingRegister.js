import styles from "./landing.module.css";
import Link from "next/link";

const LandingRegister = () => {
  return (
    <a
      href="https://3613i9cyvrz.typeform.com/to/CHmHWmuh"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.landingRegister}>
        <div className={styles.registerContainer}>REGISTER NOW</div>
      </div>
    </a>
  );
};

export default LandingRegister;
