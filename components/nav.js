import styles from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link href="#4">
        <a>
          <Image src="/images/logo.svg" alt="logo" width={139} height={71} />
        </a>
      </Link>
      <div className={styles.right}>
        <Link href="/">
          <a className={styles.tab}>Home</a>
        </Link>
        <Link href="#">
          <a className={styles.tab}>Event Details</a>
        </Link>
        <Link href="#">
          <a className="blueButton">Register</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
