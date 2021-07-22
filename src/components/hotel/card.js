import classes from "../../css/card.module.css";
import React from "react";
function Card(props) {
  return (
    <div className={classes.card}>
      <div>
        <p>{props.text}</p>
        <p className={classes.heading}>{props.count}</p>
      </div>
      <div className={classes.iconCard}>{props.icon}</div>
    </div>
  );
}

export default Card;
