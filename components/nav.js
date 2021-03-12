import { useState, useEffect, useContext } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { SmoothScrollContext } from "../SmoothScroll.context";

const Nav = () => {
  const { scroll } = useContext(SmoothScrollContext);
  const [bg, setBG] = useState("transparent");

  scroll &&
    scroll.on("scroll", (data) => {
      if (data.delta.y > window.innerHeight) {
        setBG("white");
      } else {
        setBG("transparent");
      }
    });

  const router = useRouter();

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: bg }}
      data-scroll
      data-scroll-sticky
      data-scroll-target="#top"
    >
      <Link href="/">
        <a>
          <Image src="/images/logo.svg" alt="logo" width={139} height={71} />
        </a>
      </Link>
      <div className={styles.right}>
        <Link href="/">
          <a className={styles.tab}>
            <span className={router.pathname == "/" ? styles.active : ""}>
              Home
            </span>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.tab}>Event Details</a>
        </Link>

        <a
          className="blueButton"
          href="https://3613i9cyvrz.typeform.com/to/CHmHWmuh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Nav;
