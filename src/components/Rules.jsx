import classes from "./Rules.module.css";
import star from "../assets/star.png";
import lady from "../assets/lady-sitting.png";

const Rules = () => {
  return (
    <div className={classes.rules}>
      <div className={classes.left}>
        <img className={classes.star} src={star} alt="" />
        <h3>
          Rules and <span className={classes.colored}>Guidelines</span>
        </h3>
        <img className={classes.star2} src={star} alt="" />
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className={classes.right}>
        <img src={lady} alt="" />
      </div>
    </div>
  );
};

export default Rules;
