import classes from "./Intro.module.css";

import starc from "../assets/star-col.png";
import idea from "../assets/big-idea.png";
import arrow from "../assets/arrow.png";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.left}>
        <img className={classes.star} src={starc} alt="" />
        <img className={classes.idea} src={idea} alt="" />
        <img className={classes.arrow} src={arrow} alt="" />
      </div>
      <div className={classes.right}>
        <h3>
          Introduction to getlinked{" "}
          <span className={classes.colored}>tech Hackathon 1.0</span>
        </h3>
        <img className={classes.star} src={starc} alt="" />
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
};

export default Intro;
