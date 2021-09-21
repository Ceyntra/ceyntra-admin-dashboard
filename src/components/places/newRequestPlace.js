import "../../css/newRequestPlace.css";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ForwardIcon from "@material-ui/icons/Forward";
import placePic from "../../assets/images/sigiriya.jpg";
import axios from "../../service/axios";
function NewRequestPlace(props) {
  var approvePlace = () => {
    // props.getPageData();
    axios.get(`/approvePlace/${props.placeId}`).then((res) => {
      if (res.data == 1) {
        props.getPageData();
        alert("Place approved");
      } else {
        alert("Place not approved");
      }
    });
  };

  var deletePlace = () => {
    axios.get(`/deletePlace/${props.placeId}`);

    setTimeout(() => {
      alert("place deleted");
      props.getPageData();
    }, 1000);
  };
  return (
    <div className="newRequestItem">
      <div className="details-cnt">
        <div className="newReq-details">
          <div className="newReq-details-row">
            <div className="newReq-col">place ID :</div>
            <div className="newReq-col-ans">{props.placeId}</div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Place Name :</div>
            <div className="newReq-col-ans">{props.placeName}</div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Description :</div>
            <div className="newReq-col-ans">{props.desc}</div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Added Date :</div>
            <div className="newReq-col-ans">
              {props.addedDate.substring(0, 10)}
            </div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">District :</div>
            <div className="newReq-col-ans">{props.district}</div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Latitude :</div>
            <div className="newReq-col-ans">{props.latitude}</div>
          </div>

          <div className="newReq-details-row">
            <div className="newReq-col">Longitude :</div>
            <div className="newReq-col-ans">{props.longitude}</div>
          </div>
        </div>
      </div>

      <div>
        <img src={props.photo} className="newReq-img" />
      </div>
      <div className="newReq-btn-cnt">
        <div className="newReq-btn approve" onClick={approvePlace}>
          Approve
        </div>
        <div className="newReq-btn delete" onClick={deletePlace}>
          Delete
        </div>
      </div>
      {/* <div className="forwardIcon">
        <ForwardIcon></ForwardIcon>
      </div> */}
    </div>
  );
}

export default NewRequestPlace;
