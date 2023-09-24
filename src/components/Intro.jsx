import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.left}>
        <img className={classes.star} src="src/assets/star-col.png" alt="" />
        <img className={classes.idea} src="src/assets/big-idea.png" alt="" />
        <img className={classes.arrow} src="src/assets/arrow.png" alt="" />
      </div>
      <div className={classes.right}>
        <h3>
          Introduction to getlinked{" "}
          <span className={classes.colored}>tech Hackathon 1.0</span>
        </h3>
        <img className={classes.star} src="src/assets/star-col.png" alt="" />
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
