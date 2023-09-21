import classes from "./Prizes.module.css";

const Prizes = () => {
  return (
    <div className={classes.prizes}>
      <div className={classes.left}>
        <img src="src/assets/prize.png" alt="" />
      </div>
      <div className={classes.right}>
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
            <img src="src/assets/silver-medal.png" alt="" />
            <h2>2nd</h2>
            <h4>Runner</h4>
            <h3 className={classes.colored}>N300,000</h3>
          </div>
          <div className={classes.box}>
            <img className={classes.gold} src="src/assets/gold-medal.png" alt="" />
            <h2>1st</h2>
            <h4>Runner</h4>
            <h3 className={classes.colored2}>N400,000</h3>
          </div>
          <div className={classes.box}>
            <img src="src/assets/bronze-medal.png" alt="" />
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
