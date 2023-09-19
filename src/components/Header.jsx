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
          <p>Timeline</p>
          <p>Overview</p>
          <p>FAQs</p>
          <p>Contact</p>
        </div>
        <Button>Register</Button>
      </div>
      <hr className={classes.line} />
    </div>
  );
};

export default Header;
