import Button from "./Button";
import classes from "./Judging.module.css";
import star from "../assets/star.png";
import starc from "../assets/star-col.png";
import stard from "../assets/star-dead.png";
import ellipse from "../assets/ellipse.svg";
import judging from "../assets/judging.png";

const Judging = () => {
  return (
    <div className={classes.judging}>
      <div className={classes.left}>
        <img className={classes.star} src={starc} alt="" />
        <img className={classes.star} src={stard} alt="" />
        <img className={classes.star} src={star} alt="" />
        <img className={classes.ellipse} src={ellipse} alt="" />
        <img src={judging} alt="" />
      </div>
      <div className={classes.right}>
        <h3>
          Judging Criteria <br />
          <span className={classes.colored}>Key attributes</span>
        </h3>
        {/* <img className={classes.star} src={star} alt="" /> */}
        <div className={classes.attributes}>
          <div>
            <p>
              <span className={classes.colored2}>
                Innovation and Creativity:
              </span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
          </div>
          <div>
            <p>
              <span className={classes.colored2}>Functionality:</span> Assess
              how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
          </div>
          <div>
            <p>
              <span className={classes.colored2}>Technical Complexity:</span>{" "}
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
          </div>
          <div>
            <p>
              <span className={classes.colored2}>
                Adherence to Hackathon Rules:
              </span>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </div>
          <div>
            <p>
              <span className={classes.colored2}>
                Innovation and Creativity:
              </span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
          </div>
        </div>
        <Button>Read More</Button>
      </div>
    </div>
  );
};

export default Judging;
