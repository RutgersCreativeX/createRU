import styles from "./speaker.module.css";
import Image from "next/image";

const Speaker = () => {
  const sponsors = ["link1", "link2", "link3", "link4", "link5"];
  return (
    <div className={styles.background}>
      <div className={styles.title}>Keynote Speaker</div>
      <div className={styles.container}>
        <div className={styles.keynote}>
          <div className={styles.speakerPhoto}></div>
          <div className={styles.speakerDescription}>
            <div className={styles.name}>Name of Spaker</div>
            <div className={styles.blurb}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              tristique tellus turpis molestie mauris, amet. Egestas placerat
              malesuada tortor volutpat quis. Eleifend senectus phasellus in
              elit turpis molestie ac. Cursus eleifend dapibus rhoncus id sed
              dis ac.
            </div>
          </div>
        </div>
        <div className={styles.header}>Judges</div>
        <div className={styles.judgeGrid}>
          <div className={styles.judges}>
            <div className={styles.judgePhoto}></div>
            <div className={styles.detail}>
              <div className={styles.judgeName}>Name</div>
              <div className={styles.judgeOrg}>Organization</div>
            </div>
          </div>
          <div className={styles.judges}>
            <div className={styles.judgePhoto}></div>
            <div className={styles.detail}>
              <div className={styles.judgeName}>Name</div>
              <div className={styles.judgeOrg}>Organization</div>
            </div>
          </div>
          <div className={styles.judges}>
            <div className={styles.judgePhoto}></div>
            <div className={styles.detail}>
              <div className={styles.judgeName}>Name</div>
              <div className={styles.judgeOrg}>Organization</div>
            </div>
          </div>
          <div className={styles.judges}>
            <div className={styles.judgePhoto}></div>
            <div className={styles.detail}>
              <div className={styles.judgeName}>Name</div>
              <div className={styles.judgeOrg}>Organization</div>
            </div>
          </div>
          <div className={styles.judges}>
            <div className={styles.judgePhoto}></div>
            <div className={styles.detail}>
              <div className={styles.judgeName}>Name</div>
              <div className={styles.judgeOrg}>Organization</div>
            </div>
          </div>
          <div className={styles.judges}>
            <div className={styles.judgePhoto}></div>
            <div className={styles.detail}>
              <div className={styles.judgeName}>Name</div>
              <div className={styles.judgeOrg}>Organization</div>
            </div>
          </div>
          <div className={styles.judges}>
            <div className={styles.judgePhoto}></div>
            <div className={styles.detail}>
              <div className={styles.judgeName}>Name</div>
              <div className={styles.judgeOrg}>Organization</div>
            </div>
          </div>
          <div className={styles.judges}>
            <div className={styles.judgePhoto}></div>
            <div className={styles.detail}>
              <div className={styles.judgeName}>Name</div>
              <div className={styles.judgeOrg}>Organization</div>
            </div>
          </div>
        </div>
        <div className={styles.thank}>Thank you to our sponsors</div>
        <div className={styles.sponsorGrid}>
          {sponsors
            ? sponsors.map((sponsor) => <div className={styles.card}>LOGO</div>)
            : null}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
