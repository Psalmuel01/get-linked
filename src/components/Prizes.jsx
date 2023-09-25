import classes from "./Prizes.module.css";
import star from "../assets/star.png";
import starc from "../assets/star-col.png";
import stard from "../assets/star-dead.png";
import prize from "../assets/prize.png";
import silver from "../assets/silver-medal.png";
import gold from "../assets/gold-medal.png";
import bronze from "../assets/bronze-medal.png";

const Prizes = () => {
  return (
    <div className={classes.prizes}>
      <div className={classes.left}>
        <img src={prize} alt="" />
        <img className={classes.star} src={starc} alt="" />
        <img className={classes.star} src={star} alt="" />
      </div>
      <div className={classes.right}>
        <img className={classes.star} src={star} alt="" />
        <img className={classes.star} src={starc} alt="" />
        <img className={classes.star} src={star} alt="" />
        <img className={classes.star} src={stard} alt="" />
        <div className={classes.about}>
          <h3>
            Prizes and <span className={classes.colored}>Rewards</span>
          </h3>
          <p>
            Highlight of the prizes or rewards for winners and for participants
          </p>
        </div>
        <div className={classes.collection}>
          <div className={classes.box}>
            <img src={silver} alt="" />
            <h2>2nd</h2>
            <h4>Runner</h4>
            <h3 className={classes.colored}>N300,000</h3>
          </div>
          <div className={classes.box}>
            <img className={classes.gold} src={gold} alt="" />
            <h2>1st</h2>
            <h4>Runner</h4>
            <h3 className={classes.colored2}>N400,000</h3>
          </div>
          <div className={classes.box}>
            <img src={bronze} alt="" />
            <h2>3rd</h2>
            <h4>Runner</h4>
            <h3 className={classes.colored}>N150,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
