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
        <Event
          a="Hackathon Announcement"
          b="The getlinked tech hackathon 1.0 is formally announced to the general
          public and teams begin to get ready to register"
          c="01"
          d="November 18, 2023"
        />
        <Event
          a="Teams Registration begins"
          b="Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register"
          c="02"
          d="November 18, 2023"
        />
        <Event
          a="Teams Registration ends"
          b="Interested Participants are no longer Allowed to register"
          c="03"
          d="November 18, 2023"
        />
        <Event
          a=" Announcement of the accepted teams and ideas"
          b="All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced"
          c="04"
          d="November 18, 2023"
        />
        <Event
          a="Getlinked Hackathon 1.0 Offically Begins"
          b="Accepted teams can now proceed to build their ground breaking
              skill driven solutions"
          c="05"
          d="November 18, 2023"
        />
        <Event
          a="Demo Day"
          b="Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day"
          c="06"
          d="November 18, 2023"
        />
      </div>
    </div>
  );
};

export default Timeline;
