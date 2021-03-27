import React from "react";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import {
  Nav,
  Footer,
  ToTopButton,
  EventAbout,
  Theme,
  HowItWorks,
  Schedule,
  Faq,
  Speaker,
} from "../components";
import { SmoothScrollProvider } from "../SmoothScroll.context";

export default function eventDetails() {
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
        <div id="top">
          <Nav />
          <EventAbout />
          <Theme />
          <HowItWorks />
          <Schedule />
          <Faq />
          <Speaker />
          <Footer />
        </div>
      </SmoothScrollProvider>
    </>
  );
}
