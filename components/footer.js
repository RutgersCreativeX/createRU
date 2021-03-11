import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const links = [
    {
      link: "/images/discordIcon.svg",
      ref:
        "https://discord.com/invite/33ssuhguyH?fbclid=IwAR2y41vVI8Cl6KCWLAK-XVSZexuwf_-eVwFhF3lDunWUzUCKlUjG7QzC57k",
    },
    {
      link: "/images/instagramIcon.svg",
      ref: "https://discord.com/",
    },
    {
      link: "/images/facebookIcon.svg",
      ref: "https://www.facebook.com/rutgerscreativex",
    },
    {
      link: "/images/linkedinIcon.svg",
      ref: "https://www.linkedin.com/company/rutgerscreativex/",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>Contact Us</div>
      <div className={styles.inner}>
        <div>
          If you have any other questions/concerns, feel free to <br />
          reach out to us via email: <a>rutgerscreativex@gmail.com</a>
        </div>

        <div>
          <div>
            <a
              href="https://www.rutgers.design/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.center}
            >
              <Image
                src="/images/linkIcon.svg"
                alt="link"
                width={20}
                height={20}
              />
              <div> Rutgers Creative X Website</div>
            </a>
          </div>
          <div>
            <a
              href="https://www.rutgers.design/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.center}
            >
              <Image
                src="/images/mailIcon.svg"
                alt="mail"
                width={20}
                height={20}
              />

              <div>Subscribe to the Creative X Newsletter</div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.icons}>
        {links.map(({ link, ref }, i) => (
          <li key={i}>
            <a href={ref} target="_blank" rel="noopener noreferrer">
              <Image src={link} alt={link} width={20} height={20} />
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Footer;
