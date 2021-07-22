import "../../css/newRequestPlace.css";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ForwardIcon from "@material-ui/icons/Forward";
import placePic from "../../assets/images/sigiriya.jpg";

function NewRequestPlace() {
  return (
    <div className="newRequestItem">
      <div>
        Place Name: <br />
        Traveller ID: <br />
        Added Date: <br />
      </div>
      <div>
        Thalpe Beach <br />
        T621 <br />
        2021.05.23 <br />
      </div>
      <div>
        <img src={placePic} width="60px" height="60px" />
      </div>
      <div>
        <button>
          <CheckCircleIcon style={{ color: "green" }}></CheckCircleIcon> Approve
        </button>
        <button className="clrSpan">
          <DeleteForeverIcon style={{ color: "red" }}></DeleteForeverIcon>{" "}
          Delete
        </button>
      </div>
      <div className="forwardIcon">
        <ForwardIcon></ForwardIcon>
      </div>
    </div>
  );
}

export default NewRequestPlace;
