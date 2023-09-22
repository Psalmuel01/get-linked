import Button from "./Button";
import Header from "./Header";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Header />
      <div className={classes["hero-body"]}>
        <img className={classes.star} src="src/assets/star.png" alt="" />
        <img className={classes.star} src="src/assets/star-dead.png" alt="" />
        <img className={classes.star} src="src/assets/star-dead.png" alt="" />
        <div className={classes.left}>
          <div>
            <h1>
              <div className={classes.up}>
                getlinked Tech
                <img
                  className={classes.bulb}
                  src="src/assets/creative.png"
                  alt=""
                />
              </div>
              <div className={classes.down}>
                Hackathon <span className={classes.colored}>1.0</span>
                <img src="src/assets/chain-9365116-7621444.png" alt="" />
                <img src="src/assets/1f4a5.png" alt="" />
              </div>
            </h1>
          </div>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button>Register</Button>
          <div className={classes.time}>
            <p>
              00<span>H</span>
            </p>
            <p>
              00<span>M</span>
            </p>
            <p>
              00<span>S</span>
            </p>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.underline}>
            <p className={classes.participate}>
              Igniting a Revolution in HR Innovation
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="185"
              height="10"
              viewBox="0 0 255 17"
              fill="none"
            >
              <path
                d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                stroke="#FF26B9"
                strokeWidth="5"
              />
            </svg>
          </div>

          <img className={classes.image} src="src/assets/Image.png" alt="" />
          <img
            className={classes["man-img"]}
            src="src/assets/man-wearing-smart-glasses-touching-virtual-screen.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
