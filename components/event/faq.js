import styles from "./faq.module.css";
import Image from "next/image";

const Faq = () => {
  return (
    <div className={styles.background}>
      <div className={styles.title}>Frequently Asked Questions</div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.question}>What if I don't have a team?</div>
          <Image
            src="/images/akar-icons_plus.svg"
            alt="icons_plus"
            width={30}
            height={30}
          />
          <div className={styles.answer + ` ` + styles.hidden}>
            No sweat, check out our
            <a
              href="https://www.figma.com/file/TulF7EpRXYEcGu5ozurVwq/Find-a-Team!?node-id=0%3A1"
              target="_blank"
              className={styles.link}
            >
              {" "}
              Figma file{" "}
            </a>
            to meet other participants. We will also have a team formation
            channel in our createRU slack.
          </div>
          <div className={styles.question}>
            Can my team be with students from other colleges?
          </div>
          <div className={styles.answer + ` ` + styles.hidden}>
            Absolutely! Go on and mingle.
          </div>
          <div className={styles.question}>
            Can I participate if I don’t know anything about design?
          </div>
          <div className={styles.answer + ` ` + styles.hidden}>
            Yes yes yes, everyone is encouraged to apply. We'll have workshops
            in the first day to help everyone get started!
          </div>
          <div className={styles.question}>What is a Design-A-Thon?</div>
          <div className={styles.answer + ` ` + styles.hidden}>
            At it's core, it's a chance for designers to come together to solve
            a problem with design. This can a range of things, ranging from
            modifying an existing product, to creating your own unique app!
          </div>
          <div className={styles.question}>Do I need to know how to code?</div>
          <div className={styles.answer + ` ` + styles.hidden}>
            Nope, not at all!{" "}
          </div>
          <div className={styles.question}>
            How much does it cost to participate?
          </div>
          <div className={styles.answer + ` ` + styles.hidden}>
            Free, free, free (free).{" "}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.question}>
            Is this event open to high school students or alumni?
          </div>
          <div className={styles.answer + ` ` + styles.hidden}>
            While we are limiting entries to college students only
            (undergraduate and graduate), you are more than welcome to attend
            workshops and presentations!
          </div>
          <div className={styles.question}>How can I register?</div>
          <div className={styles.answer + ` ` + styles.hidden}>
            Register by 11:59 on Friday, April 9th at
            <a
              href="https://createru.com/"
              target="_blank"
              className={styles.link}
            >
              {" "}
              createru.com
            </a>
            !
          </div>
          <div className={styles.question}>
            Who can I contact if I have questions/concerns?
          </div>
          <div className={styles.answer + ` ` + styles.hidden}>
            Email us at rutgerscreateru@gmail.com, or connect on Discord, IG, or
            LinkedIn!{" "}
          </div>
          <div className={styles.question}>
            Does it have to be for the New Brunswick community?
          </div>
          <div className={styles.answer + ` ` + styles.hidden}>
            Nope! While we are (biased) based in New Brunswick, our objective is
            for you to reach into your own community and find ways to reach out
            and support people. Go out, talk to people (safely or via Zoom), see
            what their needs are, and what the best way is to help them!
            However, keep in mind that this is only a competition, and you are
            not designing real apps (but you are more than welcome to go ahead
            and do so after!), so be mindful of what you ask of others.{" "}
          </div>
          <div className={styles.question}>What prizes can I win?</div>
          <div className={styles.answer + ` ` + styles.hidden}>
            Gift cards, (and clout).
          </div>
          <div className={styles.question}>
            Where will this event take place?
          </div>
          <div className={styles.answer + ` ` + styles.hidden}>
            Gift cards, (and clout).
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
