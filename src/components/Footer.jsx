import classes from "./Footer.module.css";
import star from "../assets/star.png";
import starc from "../assets/star-col.png";
import stard from "../assets/star-dead.png";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img className={classes.star} src={star} alt="" />
      <img className={classes.star} src={starc} alt="" />
      <img className={classes.star} src={star} alt="" />
      <img className={classes.star} src={stard} alt="" />
      <div className={classes.grid}>
        <div>
          <div className={classes.top}>
            <h4>
              get<span className={classes.colored}>linked</span>
            </h4>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className={classes.terms}>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className={classes.other}>
          <h6 className={classes.colored}>Useful Links</h6>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div className={classes.links}>
            <div>
              <p className={classes.colored}>Follow us</p>
            </div>
            <div className={classes.socials}>
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.other}>
          <h6 className={classes.colored}>Contact Us</h6>
          <div className={classes.contact}>
            <img src={phone} alt="" />
            <p>+234 679 81819</p>
          </div>
          <div className={classes.contact}>
            <img src={location} alt="" />
            <p> 27, Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <p className={classes.footnote}>All rights reserved. © getlinked Ltd.</p>
    </div>
  );
};

export default Footer;
