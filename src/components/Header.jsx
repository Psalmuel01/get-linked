// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={classes.header}>
        <h2 className={classes.logo}>
          get<span className={classes.colored}>linked</span>
        </h2>
        <div className={classes.navigate}>
          <Link className={classes.link} to={"/"}>Timeline</Link>
          <Link className={classes.link}>Overview</Link>
          <Link className={classes.link}>FAQs</Link>
          <Link className={classes.link} to={"/contact"}>Contact</Link>
        </div>
        <Button>Register</Button>
      </div>
      <hr className={classes.line} />
    </div>
  );
};

export default Header;
