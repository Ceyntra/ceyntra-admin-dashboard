import "../../css/card.css";
import React from "react";

function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <div>
        <p>{props.text}</p>
        {
          props.text==="New Requests"
            ? <p className="heading-request">{props.count}</p>
            : <p className="heading">{props.count}</p>
        }
      </div>
      <div className="iconCard">{props.icon}</div>
    </div>
  );
}

export default Card;
