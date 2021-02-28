import styles from "./hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.background}>
      <div className={styles.layer}>
        <div className={styles.container}>
          <h1 className={styles.header}>
            design for your local community at createRU
          </h1>
          <div className={styles.description}>
            collaborate with a team for 24-hours to address problems relating to
            education, business, or health in your community.
          </div>
          <Link href="#">
            <a className={`blueButton ${styles.button}`}>Register now</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
