import "../../css/provinceButton.css";
import React from "react";
function ProvinceButton(props) {
  return (
    <div className="hotelsSection">
      {props.provinces.map((province) => (
        <button>{province}</button>
      ))}
    </div>
  );
}

export default ProvinceButton;
