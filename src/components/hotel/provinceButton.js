import classes from "../../css/provinceButton.module.css";
import React from "react";
function ProvinceButton(props) {
  return (
    <div className={classes.hotelsSection}>
      {props.provinces.map((province) => (
        <button>{province}</button>
      ))}
    </div>
  );
}

export default ProvinceButton;
