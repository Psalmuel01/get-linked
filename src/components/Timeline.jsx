import Event from "./Event";
import classes from "./Timeline.module.css";

const Timeline = () => {
  return (
    <div className={classes.timeline}>
      <div className={classes.about}>
        <h3>Timeline</h3>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className={classes.schedule}>
        <img className={classes.star} src="src/assets/star-col.png" alt="" />
        <img className={classes.star} src="src/assets/star.png" alt="" />
        <img className={classes.star} src="src/assets/star-dead.png" alt="" />
        <Event
          title="Hackathon Announcement"
          text="The getlinked tech hackathon 1.0 is formally announced to the general
          public and teams begin to get ready to register"
          id="1"
          date="November 18, 2023"
        />
        <Event
          title="Teams Registration begins"
          text="Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register"
          id="2"
          date="November 18, 2023"
        />
        <Event
          title="Teams Registration ends"
          text="Interested Participants are no longer allowed to register now"
          id="3"
          date="November 18, 2023"
        />
        <Event
          title=" Announcement of the accepted teams and ideas"
          text="All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced"
          id="4"
          date="November 18, 2023"
        />
        <Event
          title="Getlinked Hackathon 1.0 Offically Begins"
          text="Accepted teams can now proceed to build their ground breaking
              skill driven solutions"
          id="5"
          date="November 18, 2023"
        />
        <Event
          title="Demo Day"
          text="Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day"
          id="6"
          date="November 18, 2023"
        />
      </div>
    </div>
  );
};

export default Timeline;
