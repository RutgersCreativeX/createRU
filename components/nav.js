import styles from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Image src="/images/logo.svg" alt="logo" width={139} height={71} />
        <div className={styles.right}>
          <Link href="#">
            <a className={styles.event}>Event Information</a>
          </Link>
          <Link href="#">
            <a className="blueButton">Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
