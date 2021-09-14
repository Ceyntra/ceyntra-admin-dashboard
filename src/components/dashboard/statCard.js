import "../../css/statcard.css";
import React from "react";
function StatCard(props) {
  return (
    <div className="crd">
      <div className="crd-box">
        <div className="crd-text">{props.text}</div>
        <div className="crd-cnt">{props.count}</div>
      </div>
      <div className="icnCard">{props.icon}</div>
    </div>
  );
}

export default StatCard;
