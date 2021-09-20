import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ForwardIcon from "@material-ui/icons/Forward";
import placePic from "../../assets/images/h4.jpg";
import {Avatar, makeStyles} from '@material-ui/core';
import axios from "../../service/axios";
import Swal from 'sweetalert2';

const useStyles= makeStyles((theme) => ({
  profilePhoto:{
    minHeight: '150px',
    minWidth: '150px'
  }
}))

function NewRequestHotel(props) {
  const classes = useStyles();

  function approveRequestHandler() {
    axios.put(`/approveHotelRequest/${props.id}`).then((result) => {
      if(result.data==1){
        Swal.fire({
          icon: 'success',
          text: 'Approve Success!',
        })
        // window.location.reload(false);
      }else{
        Swal.fire({
          icon: 'error',
          text: 'Approving Failed!',
        })
      }
    });
  }

  function rejectRequestHandler(){
    axios.delete(`/rejectHotelRequest/${props.id}`).then((result) => {
      if(result.data==1){
        Swal.fire({
          icon: 'success',
          text: 'Account Rejected!',
        })
        // window.location.reload(false);
      }else{
        Swal.fire({
          icon: 'error',
          text: 'Rejection Failed!',
        })
      }
    });
  }

  return (
    <div className="request-card">
      <div>
        <Avatar className={classes.profilePhoto} alt="profile" variant="rounded" src={props.photo} />
      </div>
      <div>
        <p>Hotel Name: <span className="span-value">{props.name}</span></p>
        <p>Registration NO.: <span className="span-value">{props.register}</span></p>
        <p>District: <span className="span-value">{props.district}</span></p>
        <p>Email: <span className="span-value">{props.email}</span></p>
        <p>Telephone: <span className="span-value">{props.telephone}</span></p>
      </div>
      <div>
        <button className="approve-button" onClick={approveRequestHandler}>
          Approve
        </button>
        <button className="reject-button" onClick={rejectRequestHandler}>
          Reject
        </button>
      </div>
    </div>
  );
}

export default NewRequestHotel;
