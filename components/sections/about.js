import styles from "./about.module.css";
import Link from "next/link";
import Image from "next/image";


const About = () => {


  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Image src="/images/clouds.svg" alt="logo" width={655} height={872} />
        <div className={styles.container}>blah</div>
      </div>
    </div>
  );
};

export default About;
