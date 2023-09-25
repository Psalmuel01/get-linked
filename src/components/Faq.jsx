import classes from "./Faq.module.css";
import star from "../assets/star.png";
import starc from "../assets/star-col.png";
import stard from "../assets/star-dead.png";
import qimg from "../assets/questions.png";

const Faq = () => {
  return (
    <div className={classes.faq}>
      <div className={classes.left}>
        <img className={classes.star} src={starc} alt="" />
        <h3>
          Frequently Asked <span className={classes.colored}>Questions</span>
        </h3>
        <p>
          We got answers to the questions that you might want to ask about{" "}
          <b>getlinked Hackathon 1.0</b>
        </p>
        <div className={classes.questions}>
          <div className={classes.question}>
            <div className={classes.quest}>
              <p>Can I work on a project I started before the hackathon?</p>
              <span id="open-faq" className={classes.colored}>
                +
              </span>
            </div>
            <hr />
          </div>
          <div className={classes.question}>
            <div className={classes.quest}>
              <p>What happens if I need help during the hackathon?</p>
              <span id="open-faq" className={classes.colored}>
                +
              </span>
            </div>
            <hr />
          </div>
          <div className={classes.question}>
            <div className={classes.quest}>
              <p>What happens if I don't have an idea for a project?</p>
              <span id="open-faq" className={classes.colored}>
                +
              </span>
            </div>
            <hr />
          </div>
          <div className={classes.question}>
            <div className={classes.quest}>
              <p>Can I join a team or do I have to come with one?</p>
              <span id="open-faq" className={classes.colored}>
                +
              </span>
            </div>
            <hr />
          </div>
          <div className={classes.question}>
            <div className={classes.quest}>
              <p>What happens after the hackathon ends</p>
              <span id="open-faq" className={classes.colored}>
                +
              </span>
            </div>
            <hr />
          </div>
          <div className={classes.question}>
            <div className={classes.quest}>
              <p>Can I work on a project I started before the hackathon?</p>
              <span id="open-faq" className={classes.colored}>
                +
              </span>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <img className={classes.qimg} src={qimg} alt="" />
        <img className={classes.star} src={starc} alt="" />
        <img className={classes.star} src={starc} alt="" />
        <img className={classes.star} src={stard} alt="" />
        <img className={classes.star} src={star} alt="" />
      </div>
    </div>
  );
};

export default Faq;
