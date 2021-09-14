import "../../css/newRequestPlace.css";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ForwardIcon from "@material-ui/icons/Forward";
import placePic from "../../assets/images/sigiriya.jpg";

function NewRequestPlace() {
  return (
    <div className="newRequestItem">
      <div className="details-cnt">
        <div className="newReq-details">
          <div className="newReq-details-row">
            <div className="newReq-col">place ID :</div>
            <div className="newReq-col-ans">Thalpe Beach</div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Place Name :</div>
            <div className="newReq-col-ans">Thalpe Beach</div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Description :</div>
            <div className="newReq-col-ans">
              Thalpe Besddd ddddd ddddddd dddd dddd dd dsfsdf sdfsd fsdfds dsfs
              fdsdfs ach
            </div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Added Date :</div>
            <div className="newReq-col-ans">Thalpe Beach</div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Latitude :</div>
            <div className="newReq-col-ans">Thalpe Beach</div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Longitude :</div>
            <div className="newReq-col-ans">Thalpe Beach</div>
          </div>
        </div>
      </div>

      <div>
        <img src={placePic} className="newReq-img" />
      </div>
      <div className="newReq-btn-cnt">
        <div className="newReq-btn approve">Approve</div>
        <div className="newReq-btn delete">Delete</div>
      </div>
      {/* <div className="forwardIcon">
        <ForwardIcon></ForwardIcon>
      </div> */}
    </div>
  );
}

export default NewRequestPlace;
