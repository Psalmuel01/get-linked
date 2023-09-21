import classes from "./Partners.module.css";

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
        <div className={classes.sponsors}>
          <img src="src/assets/liberty.png" alt="" />
        </div>
        <div className={classes.sponsors}>
          <img src="src/assets/libertypay.png" alt="" />
        </div>
        <div className={classes.sponsors}>
          <img src="src/assets/winwise.png" alt="" />
        </div>
        <div className={classes.sponsors}>
          <img src="src/assets/wisper.png" alt="" />
        </div>
        <div className={classes.sponsors}>
          {/* <h1>
            pay<span className={classes.blue}>box</span>
          </h1> */}
          <img src="src/assets/paybox.png" alt="" />
          {/* <img src="src/assets/box.png" alt="" /> */}
        </div>
        <div className={classes.sponsors}>
          {/* <h1>
            Vuzual <span className={classes.red}>Plus</span>
          </h1> */}
          <img style={{ width: "75%"}} src="src/assets/vuzualplus.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
