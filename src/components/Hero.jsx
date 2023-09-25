import Button from "./Button";
import Header from "./Header";
import classes from "./Hero.module.css";
import star from "../assets/star.png";
import stard from "../assets/star-dead.png";
import creative from "../assets/creative.png";
import chain from "../assets/chain-9365116-7621444.png";
import fire from "../assets/1f4a5.png";
import glow from "../assets/Image.png";
import man from "../assets/man-wearing-smart-glasses-touching-virtual-screen.png";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Header />
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
      <div className={classes["hero-body"]}>
        <img className={classes.star} src={star} alt="" />
        <img className={classes.star} src={stard} alt="" />
        <img className={classes.star} src={stard} alt="" />

        <div className={classes.left}>
          <div>
            <h1>
              <div className={classes.up}>
                getlinked Tech
                <img className={classes.bulb} src={creative} alt="" />
              </div>
              <div className={classes.down}>
                Hackathon <span className={classes.colored}>1.0</span>
                <img src={chain} alt="" />
                <img src={fire} alt="" />
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
          <img className={classes.image} src={glow} alt="" />
          <img className={classes["man-img"]} src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
