import React from "react";
import "../App.css";
import '../css/hotel.css';
import HotelIcon from '@material-ui/icons/Hotel';
import Card from "../components/hotel/card";
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ProvinceButton from "../components/hotel/provinceButton";
import NewRequestHotel from "../components/hotel/newRequestHotel";
import RightSection from "../components/hotel/rightSectionHotel";
import RightSectionHotel from "../components/hotel/rightSectionHotel";

const PROVINCES=['Matara', 'Hambantota', 'Galle', 'Colombo', 'Gampaha', 'Kalutara', 'Badulla', 'Moneragala', 'Kegalle', 'Rathnapura', 'Kurunegala', 'Puttalam', 'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Anuradhapura', 'Polonnaruwa', 'Ampara', 'Batticalo', 'Trincomalee', 'Kandy', 'Matale', 'Nuwara Eliya'];

function Hotel() {
  return (
    <div className="content">
      <div className="left">
        <div className="cardRow">
          <Card text='Hotels' count='35' icon={<HotelIcon style={{color:"white"}} />}></Card>
          <Card text='Complaints' count='10' icon={<NotificationImportantIcon style={{color:"white"}} />}></Card>
        </div>

        <h3>Hotels</h3>
        <ProvinceButton provinces={PROVINCES} />

        <div className="requestSection">
          <h3>New Hotel Requests</h3>

          <NewRequestHotel></NewRequestHotel>
          <NewRequestHotel></NewRequestHotel>
          <NewRequestHotel></NewRequestHotel>
        </div>
      </div>
      
      <div className="right">
        <div className="rightSection">
          <h3>Top Rated Hotels</h3>

          <RightSectionHotel></RightSectionHotel>
          <RightSectionHotel></RightSectionHotel>
          <RightSectionHotel></RightSectionHotel>
          <RightSectionHotel></RightSectionHotel>
          <RightSectionHotel></RightSectionHotel>
        </div>

        <div className="rightSection">
          <h3>Banned Hotels</h3>

          <RightSectionHotel></RightSectionHotel>
          <RightSectionHotel></RightSectionHotel>
          <RightSectionHotel></RightSectionHotel>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
