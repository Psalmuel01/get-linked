import classes from "./Partners.module.css";
import star from "../assets/star.png";
import starc from "../assets/star-col.png";
import liberty from "../assets/liberty.png";
import libertypay from "../assets/libertypay.png";
import winwise from "../assets/winwise.png";
import wisper from "../assets/wisper.png";
import paybox from "../assets/paybox.png";
import vuzual from "../assets/vuzualplus.png";

const Partners = () => {
  return (
    <div className={classes.partners}>
      <div className={classes.about}>
        <h3>Partners and Sponsors</h3>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className={classes.box}>
        <img className={classes.star} src={starc} alt="" />
        <img className={classes.star} src={starc} alt="" />
        <img className={classes.star} src={star} alt="" />
        <div className={classes.sponsors}>
          <img src={liberty} alt="" />
        </div>
        <div className={classes.sponsors}>
          <img src={libertypay} alt="" />
        </div>
        <div className={classes.sponsors}>
          <img src={winwise} alt="" />
        </div>
        <div className={classes.sponsors}>
          <img src={wisper} alt="" />
        </div>
        <div className={classes.sponsors}>
          <img style={{ width: "60%" }} src={paybox} alt="" />
        </div>
        <div className={classes.sponsors}>
          <img style={{ width: "75%" }} src={vuzual} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
