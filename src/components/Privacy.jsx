import classes from "./Privacy.module.css";
import Button from "./Button";
import star from "../assets/star.png";
import starc from "../assets/star-col.png";
import stard from "../assets/star-dead.png";
import mark from "../assets/checkmark.svg";
import lock from "../assets/padlock.png";

const Privacy = () => {
  return (
    <div className={classes.privacy}>
      <img className={classes.star} src={starc} alt="" />
      <img className={classes.star} src={stard} alt="" />
      <img className={classes.star} src={starc} alt="" />
      <img className={classes.star} src={star} alt="" />
      <img className={classes.star} src={star} alt="" />
      <img className={classes.star} src={starc} alt="" />
      <img className={classes.star} src={stard} alt="" />
      <div>
        <div className={classes.about}>
          <h3>
            Privacy Policy and <span className={classes.colored}>Terms</span>
          </h3>
          <p>Last updated on September 12, 2023</p>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        <div className={classes.box}>
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className={classes.licensing}>
            <div>
              <h5 className={classes.colored}>Licensing Policy</h5>
              <p>Here are the terms and conditions</p>
            </div>
            <div className={classes.license}>
              <div>
                <img src={mark} alt="" />
              </div>
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className={classes.license}>
              <div>
                <img src={mark} alt="" />
              </div>
              <p>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
          </div>
          <Button>Read More</Button>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="530"
          height="648"
          viewBox="0 0 530 648"
          fill="none"
        >
          <path
            d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z"
            fill="url(#paint0_linear_110_134)"
            fillOpacity="0.14"
          />
          <defs>
            <linearGradient
              id="paint0_linear_110_134"
              x1="265"
              y1="0"
              x2="265"
              y2="648"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#903AFF" />
              <stop offset="1" stopColor="#FF26B9" />
            </linearGradient>
          </defs>
        </svg>
        <img className={classes.padlock} src={lock} alt="" />
      </div>
    </div>
  );
};

export default Privacy;
