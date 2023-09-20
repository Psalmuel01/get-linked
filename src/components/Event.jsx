import classes from "./Event.module.css";

const Event = ({ a, b, c, d }) => {
  return (
    <div className={classes.event}>
      <div className={classes.details}>
        <h4 className={classes.colored}>{a}</h4>
        <p>{b}</p>
      </div>
      <div className={classes.num}>
        <h4>{c}</h4>
      </div>
      <div>
        <h4 className={`${classes.colored} ${classes.time}`}>{d}</h4>
      </div>
    </div>
  );
};

export default Event;
