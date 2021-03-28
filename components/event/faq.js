import { useState } from "react";
import styles from "./faq.module.css";
import Image from "next/image";
import SlideToggle from "react-slide-toggle";

const Faq = () => {
  const renderQuestion = (question, answer) => {
    return (
      <div style={{ marginBottom: "32px" }}>
        <SlideToggle
          collapsed
          render={({
            toggle,
            setCollapsibleElement,
            toggleState,
            progress,
          }) => (
            <div className="my-collapsible">
              <a
                className={`${styles.questionContainer} my-collapsible__toggle`}
                onClick={toggle}
              >
                <div
                  className={styles.question}
                  style={{
                    color: toggleState == "COLLAPSED" ? "black" : "#e36c52",
                    fontWeight: toggleState == "COLLAPSED" ? "400" : "700",
                  }}
                >
                  {question}
                </div>
                <div style={{ marginLeft: "24px" }}>
                  {toggleState == "COLLAPSED" ? (
                    <Image
                      src="/images/plusIcon.svg"
                      alt="icons_plus"
                      width={30}
                      height={30}
                      layout="fixed"
                    />
                  ) : (
                    <Image
                      layout="fixed"
                      src="/images/minusIcon.svg"
                      alt="icons_minus"
                      width={30}
                      height={30}
                    />
                  )}
                </div>
              </a>
              <div
                className={`my-collapsible__content`}
                ref={setCollapsibleElement}
                style={{
                  fontWeight: "400",
                }}
              >
                <div className={styles.answer}>{answer}</div>
              </div>
            </div>
          )}
        />
      </div>
    );
  };

  return (
    <div className={styles.background}>
      <div className={styles.title}>Frequently Asked Questions</div>
      <div className={styles.faq}>FAQ</div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftInner}>
            {renderQuestion(
              "What if I don't have a team?",
              <div>
                No sweat, check out our&nbsp;
                <a
                  href="https://www.figma.com/file/TulF7EpRXYEcGu5ozurVwq/Find-a-Team!?node-id=0%3A1"
                  target="_blank"
                  className={styles.link}
                >
                  Figma file
                </a>
                &nbsp;to meet other participants. We will also have a team
                formation channel in our createRU slack.
              </div>
            )}

            {renderQuestion(
              "Can my team be with students from other colleges?",
              "Absolutely! Go on and mingle."
            )}

            {renderQuestion(
              "Can I participate if I don’t know anything about design?",
              "Yes yes yes, everyone is encouraged to apply. We'll have workshops in the first day to help everyone get started!"
            )}

            {renderQuestion(
              "What is a Design-A-Thon?",
              "At it's core, it's a chance for designers to come together to solve a problem with design. This can a range of things, ranging from modifying an existing product, to creating your own unique app!"
            )}

            {renderQuestion(
              "Do I need to know how to code?",
              "Nope, not at all!"
            )}

            {renderQuestion(
              "How much does it cost to participate?",
              "Free, free, free (free)."
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightInner}>
            {renderQuestion(
              "Is this event open to high school students or alumni?",
              "While we are limiting entries to college students only (undergraduate and graduate), you are more than welcome to attend workshops and presentations!"
            )}

            {renderQuestion(
              "How can I register?",
              <div>
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
            )}

            {renderQuestion(
              "Who can I contact if I have questions/concerns?",
              "Email us at rutgerscreateru@gmail.com, or connect on Discord, IG, or LinkedIn!"
            )}

            {renderQuestion(
              "Does it have to be for the New Brunswick community?",
              "Nope! While we are (biased) based in New Brunswick, our objective is for you to reach into your own community and find ways to reach out and support people. Go out, talk to people (safely or via Zoom), see what their needs are, and what the best way is to help them! However, keep in mind that this is only a competition, and you are not designing real apps (but you are more than welcome to go ahead and do so after!), so be mindful of what you ask of others."
            )}

            {renderQuestion(
              "What prizes can I win?",
              "Gift cards, (and clout)."
            )}

            {renderQuestion(
              "Where will this event take place?",
              "All online! Workshops will be held on Zoom!"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
