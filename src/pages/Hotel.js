import React from "react";
import "../App.css";
import '../css/hotel.css';
import HotelIcon from '@material-ui/icons/Hotel';
import Card from "../components/hotel/card";
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import NotificationsIcon from '@material-ui/icons/NotificationsActive';
import ProvinceButton from "../components/hotel/provinceButton";
import NewRequestHotel from "../components/hotel/newRequestHotel";
import RightSection from "../components/hotel/rightSectionHotel";
import RightSectionHotel from "../components/hotel/rightSectionHotel";
import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "../service/axios";

const PROVINCES=['Matara', 'Hambantota', 'Galle', 'Colombo', 'Gampaha', 'Kalutara', 'Badulla', 'Moneragala', 'Kegalle', 'Rathnapura', 'Kurunegala', 'Puttalam', 'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Anuradhapura', 'Polonnaruwa', 'Ampara', 'Batticalo', 'Trincomalee', 'Kandy', 'Matale', 'Nuwara Eliya'];

function Hotel() {
  const history = useHistory()
  const [hotelCount, setHotelCount]=useState(0);
  const [requestCount, setRequestCount]=useState(0);
  const [topHotelList, setTopHotelList]=useState([]);

  function hotelListHandler(){
    history.push('hotels/list');
  }

  function requestListHandler(){
    history.push({
      pathname:'hotels/requests',
      state:{
        data: 1,
        newCount: requestCount
      }
    }
    );
  }

  var getHotelData = () => {
    axios.get(`/getHotelsCount`).then((res) => {
      setHotelCount(res.data[0]);
      setRequestCount(res.data[1]);
      setTopHotelList(res.data[2]);
    });
  };

  useEffect(() => {
    getHotelData();
  }, []);

  return (
    <div className="content">
      <div className="left">
        <div className="cardRow">
          <Card text='Hotels' count={hotelCount} icon={<HotelIcon style={{color:"white"}} />} onClick={hotelListHandler}></Card>
          <Card text='New Requests' count={requestCount} icon={<NotificationsIcon style={{color:"white"}} />} onClick={requestListHandler}></Card>
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
          {
            topHotelList.length==0
              ? <p>No hotels yet</p>
              : topHotelList.map((topHotel) => (
                  <RightSectionHotel name={topHotel[0]} rating={topHotel[1]} photo={topHotel[2]}></RightSectionHotel>
              ))
          }
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
