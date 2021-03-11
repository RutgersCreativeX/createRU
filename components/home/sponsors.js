import styles from "./sponsors.module.css";
import Link from "next/link";
import Image from "next/image";

const Sponsors = () => {
  const sponsors = ["link1", "link2", "link3", "link4"];

  return (
    <div className={styles.background}>
      <div className={styles.header}>Our sponsors</div>
      <div className={styles.grid}>
        {sponsors
          ? sponsors.map((sponsor) => (
              <div className={styles.card}>sponsor</div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Sponsors;
