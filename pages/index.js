import React, { useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Hero, Nav, About } from "../components";
import { SmoothScrollProvider } from "../SmoothScroll.context";

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
      <SmoothScrollProvider options={{ smooth: true }}>
        <main className={styles.container}>
          <div data-scroll-section>
            <Nav />
            <Hero />
            <About />
          </div>
        </main>
      </SmoothScrollProvider>
    </>
  );
}
