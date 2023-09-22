// import classes from "./Flare.module.css";

const Flare = ({ path, color, hor, ver, width, height, mode }) => {
  const styles = {
    // width: "951px",
    // height: "994px",
    background: `url(${path}), ${color} ${hor}px ${ver}px / ${width}% ${height}% no-repeat`,
    backgroundBlendMode: mode,
  };

  return <div style={styles}>{props.children}</div>;
};

export default Flare;
