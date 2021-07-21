import React from "react";
import "../App.css";
import classes from '../css/hotel.module.css';
import HotelIcon from '@material-ui/icons/Hotel';
import Card from "../components/hotel/card";
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ProvinceButton from "../components/hotel/provinceButton";

const PROVINCES=['Matara', 'Hambantota', 'Galle', 'Colombo', 'Gampaha', 'Kalutara', 'Badulla', 'Moneragala', 'Kegalle', 'Rathnapura', 'Kurunegala', 'Puttalam', 'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Anuradhapura', 'Polonnaruwa', 'Ampara', 'Batticalo', 'Trincomalee', 'Kandy', 'Matale', 'Nuwara Eliya'];

function Hotel() {
  return (
    <div className={classes.content}>
      <div className={classes.left}>
        <div className={classes.cardRow}>
          <Card text='Hotels' count='35' icon={<HotelIcon style={{color:"white"}} />}></Card>
          <Card text='Complaints' count='10' icon={<NotificationImportantIcon style={{color:"white"}} />}></Card>
        </div>

        <h3>Hotels</h3>
        <ProvinceButton provinces={PROVINCES} />

        <div className={classes.requestSection}>
          <h3>New Hotel Requests</h3>

          <div className={classes.newRequestItem}>

          </div>
        </div>
      </div>
      
      <div className={classes.right}></div>
    </div>
  );
}

export default Hotel;
