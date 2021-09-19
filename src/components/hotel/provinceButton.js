import "../../css/provinceButton.css";
import React from "react";
import { Link } from "react-router-dom";

function ProvinceButton(props) {
  return (
    <div className="hotelsSection">
      {props.provinces.map((province) => (
        <Link
          to={{
            pathname: `/home/hotels/${province}`,
            state: {
              data: province
            }
          }}
        >
          <button>{province}</button>
        </Link>
      ))}
    </div>
  );
}

export default ProvinceButton;
