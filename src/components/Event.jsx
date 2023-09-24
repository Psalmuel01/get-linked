import classes from "./Event.module.css";

const Event = ({ title, text, id, date }) => {
  return (
    <div className={classes.event}>
      <div className={classes.details}>
        <h4 className={classes.colored}>{title}</h4>
        <p className={classes.text}>{text}</p>
      </div>
      <div className={classes.num}>
        <h4>{id}</h4>
      </div>
      <div className={classes.extra}>
        <div className={classes.num2}>
          <h4>{id}</h4>
        </div>
        <h4 className={`${classes.colored} ${classes.time}`}>{date}</h4>
      </div>
    </div>
  );
};

export default Event;
