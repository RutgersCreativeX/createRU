import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Hero,Nav } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>createRU</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Secular+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.container}>
        <Nav/>
        <Hero />
      </main>
    </>
  );
}
