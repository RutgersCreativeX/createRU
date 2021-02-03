import Head from "next/head";
import styles from "../styles/Home.module.css";
import LandingPresents from "../components/landing/LandingPresents.js";
import LandingAbout from "../components/landing/LandingAbout.js";
import LandingRegister from "../components/landing/LandingRegister.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Secular+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div style={{ height: "650px" }}>
          <LandingPresents />
          <div className={styles.notice}>Sign up for priority registration</div>
          <LandingRegister />
        </div>

        <LandingAbout />
      </main>
    </div>
  );
}
