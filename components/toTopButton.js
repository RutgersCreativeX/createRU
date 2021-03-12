import { useContext } from "react";
import styles from "./toTopButton.module.css";
import { SmoothScrollContext } from "../SmoothScroll.context";

const toTopButton = () => {
  const { scroll } = useContext(SmoothScrollContext);

  const goToTop = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo(0);
  };

  return (
    <a
      className={styles.container}
      onClick={goToTop}
      data-scroll
      data-scroll-sticky
      data-scroll-target="#top"
  
    >
      <img
        src="/images/toTop.svg"
        alt="toTop"
        width="64"
        height="64"
        className={styles.shadow}
      />
    </a>
  );
};

export default toTopButton;
