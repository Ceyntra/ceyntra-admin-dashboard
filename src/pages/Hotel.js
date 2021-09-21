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
import {TableContainer, Table,TableHead,TableCell,TableBody,TableRow,Paper, makeStyles, Container } from '@material-ui/core';
import ProfileTableView from '../components/ProfileTableView';
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import FilterSearchBar from '../components/FilterSearchBar';

const PROVINCES=['Matara', 'Hambantota', 'Galle', 'Colombo', 'Gampaha', 'Kalutara', 'Badulla', 'Moneragala', 'Kegalle', 'Rathnapura', 'Kurunegala', 'Puttalam', 'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Anuradhapura', 'Polonnaruwa', 'Ampara', 'Batticalo', 'Trincomalee', 'Kandy', 'Matale', 'Nuwara Eliya'];

const useStyles= makeStyles((theme) => ({
  topTopics:{
    fontWeight: 'bold',
    fontSize: '15px',
    paddingLeft: '0px',
  }
}))

function Hotel() {
  const history = useHistory()
  const [hotelCount, setHotelCount]=useState(0);
  const [requestCount, setRequestCount]=useState(0);
  const [topHotelList, setTopHotelList]=useState([]);
  const [bannedHotelList, setBannedHotelList]=useState([]);
  const classes = useStyles();
  const [searchedWord, setSearchedWord]=useState("");
  const [searchedResult, setSearchedResult] = useState([]);

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

  const filterHandler=(term)=>{
    if(term !== ""){
        setSearchedWord(term.toLowerCase());
        const newBannedList= bannedHotelList.filter((hotel) =>{
            return hotel['name'].toLowerCase().startsWith(term)
        })
        setSearchedResult(newBannedList);
    }else{
        setSearchedResult(bannedHotelList);
    }
  }

  var getHotelData = () => {
    axios.get(`/getHotelsCount`).then((res) => {
      setHotelCount(res.data[0]);
      setRequestCount(res.data[1]);
      setTopHotelList(res.data[2]);
      setBannedHotelList(res.data[3]);
      setSearchedResult(res.data[3]);
    });
  };

  useEffect(() => {
    getHotelData();
  }, []);

  return (
    <div>
      <div className="content">
        <div className="left">
          <div className="cardRow">
            <Card text='Hotels' count={hotelCount} icon={<HotelIcon style={{color:"white"}} />} onClick={hotelListHandler}></Card>
            <Card text='New Requests' count={requestCount} icon={<NotificationsIcon style={{color:"white"}} />} onClick={requestListHandler}></Card>
          </div>

          <h3>Hotels</h3>
          <ProvinceButton page='hotels' provinces={PROVINCES} />
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
        </div>
      </div>
      <div className="bannedSection">
        <h3>Banned Hotels</h3>
        {
          bannedHotelList.length==0 
              ? <h2>No hotels to be displayed yet...</h2>
              : 
              <div>
                <FilterSearchBar
                  filterFunction={filterHandler}
                  term={searchedWord}
                />
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.topTopics} align='left' width="30%">HOTEL</TableCell>
                        <TableCell className={classes.topTopics} align='left' width="20%">REGISTRATION NO.</TableCell>
                        <TableCell className={classes.topTopics} align='left' width="15%">CONTACT</TableCell>
                        <TableCell className={classes.topTopics} align='left' width="15%">DISTRICT</TableCell>
                        <TableCell className={classes.topTopics} align='left' width="20%">RATING</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {searchedResult.map((bannedHotel) => (
                        <TableRow key={bannedHotel['number']}>
                          <TableCell align='justify'><ProfileTableView imageUrl={bannedHotel['profile_photo']} username={bannedHotel['name']} useremail={bannedHotel['email']} /></TableCell>
                          <TableCell align='justify'>{bannedHotel['registration_number']}</TableCell>
                          <TableCell align='justify'>{bannedHotel['telephone']}</TableCell>
                          <TableCell align='justify'>{bannedHotel['district']}</TableCell>
                          <TableCell align='justify'>
                            <Box
                              sx={{ 
                                  display: 'flex',  
                              }}
                            >
                              <Rating name="read-only" value={bannedHotel['rating']} size="small" readOnly />
                              <Box sx={{ ml: 0.5 }}>{bannedHotel['rating']}</Box>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
        }
      </div>
    </div>
  );
}

export default Hotel;
