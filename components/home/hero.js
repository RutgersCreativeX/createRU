import { useState, useEffect, useContext } from "react";

import styles from "./hero.module.css";
import Link from "next/link";
import { SmoothScrollContext } from "../../SmoothScroll.context";

const Hero = () => {
  const { scroll } = useContext(SmoothScrollContext);
  const [opac, setOpac] = useState(1);

  scroll &&
    scroll.on("scroll", (data) => {
      setOpac((window.innerHeight - data.delta.y) / window.innerHeight);
    });

  return (
    <div className={styles.fixed_wrapper}>
      <div className={styles.fixed_target} id="fixed-target"></div>
      <div
        className={styles.fixed}
        data-scroll
        data-scroll-sticky
        data-scroll-target="#fixed-target"
        style={{ opacity: opac }}
      >
        <div className={styles.background}>
          <div className={styles.layer}>
            <div className={styles.container}>
              <h1 className={styles.header}>
                Design for your local community at createRU
              </h1>
              <div className={styles.subheading}>April 10 - April 11, 2020</div>
              <div className={styles.subheading}>12pm to 12pm EST</div>
              <div className={styles.description}>
                Collaborate with a team for 24-hours to create a digital
                prototyping addressing problems relating to education, business,
                or health in your community.
              </div>
              <Link href="/eventDetails">
                <a className={`blueButton ${styles.button}`}>Event Details</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
