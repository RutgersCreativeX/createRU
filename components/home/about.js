import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.leftCol}>
            <div className={styles.title}>
              Why should we design for our community?
            </div>
            <div className={styles.description}>
              <span className={styles.bold}>
                Whether or not you’re a student at Rutgers,
              </span>
              it’s likely that your university has made a significant impact on
              the town it’s located in. As student designers, we can try to
              address some of the social, political, and economic issues beyond
              our campuses by exploring problem spaces, working through the
              design thinking process, and building with empathy.
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.flexCenter} data-scroll data-scroll-speed="2">
            <Image
              src="/images/buildingGroup.svg"
              alt="buildingGroup"
              width={565}
              height={430}
            />
          </div>

          <div className={styles.mobileImg}>
            <Image
              src="/images/buildingGroup.svg"
              alt="buildingGroup"
              width={565}
              height={430}
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.flexCenter} data-scroll data-scroll-speed="2">
            <Image src="/images/city.svg" alt="city" width={520} height={315} />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.rightCol}>
            <div className={styles.description}>
              At Rutgers, our flagship campus is located in New Brunswick, NJ.
              The city is a diverse ecosystem of students, faculty, and
              administration. Small businesses such as restaurants and shopping
              malls populate New Brunswick and contribute to a vibrant culture
              and landscape for Rutgers students.
            </div>
          </div>
        </div>
        <div className={styles.mobileImg}>
          <Image src="/images/city.svg" alt="city" width={520} height={315} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.flexCenter} data-scroll data-scroll-speed="2">
            <Image
              src="/images/studying.svg"
              alt="studying"
              width={450}
              height={315}
            />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.rightCol}>
            <div className={styles.description}>
              However, there are noticeable disconnects between students and
              locals in New Brunswick. 12.2% and 7.82% of students enrolled at
              Rutgers-New Brunswick are Hispanic/Latino and Black, respectively.
              Yet New Brunswick itself consists of 46.8% and 16.2% of
              Hispanic/Latino and Black families, respectively. <br />
              <br />
              In addition to being underrepresented, local families also face
              challenges such as food insecurity, lack of access to affordable
              housing, and disparities in education.
            </div>
          </div>
        </div>
        <div className={styles.mobileImg}>
          <Image
            src="/images/studying.svg"
            alt="studying"
            width={450}
            height={315}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.flexCenter} data-scroll data-scroll-speed="2">
            <Image
              src="/images/phoneAndComp.svg"
              alt="phoneAndComp"
              width={550}
              height={500}
            />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.rightCol}>
            <div className={styles.title}>
              How can we use design to support the communities that surround our
              universities?
            </div>
            <div className={styles.description}>
              What are some challenges facing your local community? How can
              design be leveraged to support families, individuals, and
              organizations? <br /> <br />
              For more information on the event, topics to explore, and event
              logistics, head over to our Event Information page.
            </div>
            <div className={styles.button}>
              <a
                className={`blueButton`}
                href="https://3613i9cyvrz.typeform.com/to/CHmHWmuh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div className={styles.mobileImg}>
          <Image
            src="/images/phoneCompMobile.svg"
            alt="phoneAndComp"
            width={550}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
