import { useState, useEffect, useContext } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { SmoothScrollContext } from "../SmoothScroll.context";
import ToTopButton from "./toTopButton";

const Nav = () => {
  const { scroll } = useContext(SmoothScrollContext);
  const [bg, setBG] = useState("transparent");
  const [shadow, setShadow] = useState("none");

  const [open, setOpen] = useState(false);

  const links = [
    {
      link: "/images/discordBlack.svg",
      ref:
        "https://discord.com/invite/33ssuhguyH?fbclid=IwAR2y41vVI8Cl6KCWLAK-XVSZexuwf_-eVwFhF3lDunWUzUCKlUjG7QzC57k",
    },
    {
      link: "/images/instagramBlack.svg",
      ref: "https://www.instagram.com/rutgerscreativex/",
    },
    {
      link: "/images/facebookBlack.svg",
      ref: "https://www.facebook.com/rutgerscreativex",
    },
    {
      link: "/images/linkedinBlack.svg",
      ref: "https://www.linkedin.com/company/rutgerscreativex/",
    },
  ];

  const handleToggle = () => {
    setOpen(!open);
  };

  scroll &&
    scroll.on("scroll", (data) => {
      if (data.delta.y > window.innerHeight) {
        setBG("white");
        setShadow("0px 1px 1px rgba(0, 0, 0, 0.1)");
      } else {
        setBG("transparent");
        setShadow("none");
      }
    });

  const router = useRouter();

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: bg, boxShadow: shadow }}
        data-scroll
        data-scroll-sticky
        data-scroll-target="#top"
      >
        <div className={styles.desktop}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={139}
                height={71}
              />
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

        {open ? (
          <div className={styles.sidebar}>
            <div className={styles.inner}>
              <a onClick={handleToggle}>
                <Image
                  src="/images/closeIcon.svg"
                  alt="close"
                  width={32}
                  height={32}
                />
              </a>

              <div className={styles.links}>
                <Link href="/">
                  <a>
                    <span
                      className={router.pathname == "/" ? styles.active : ""}
                    >
                      Home
                    </span>
                  </a>
                </Link>
                <Link href="/">
                  <a>Event Details</a>
                </Link>
                <a
                  href="https://3613i9cyvrz.typeform.com/to/CHmHWmuh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </div>
              <div className={styles.icons}>
                {links.map(({ link, ref }, i) => (
                  <li key={i}>
                    <a href={ref} target="_blank" rel="noopener noreferrer">
                      <Image src={link} alt={link} width={24} height={24} />
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.hamburger}>
            <a onClick={handleToggle}>
              <Image
                src="/images/hamburgerIcon.svg"
                alt="hamburger"
                width={32}
                height={32}
              />
            </a>
          </div>
        )}
      </div>

      <ToTopButton />
    </>
  );
};

export default Nav;
