import React from 'react';
import '../css/hotel.css';
import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "../service/axios";
import {TableContainer, Table,TableHead,TableCell,TableBody,TableRow,Paper, makeStyles, Container } from '@material-ui/core';
import ProfileTableView from '../components/ProfileTableView';
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import FilterSearchBar from '../components/FilterSearchBar';
import NotificationsIcon from '@material-ui/icons/NotificationsActive';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import Card from "../components/hotel/card";
import ProvinceButton from "../components/hotel/provinceButton";
import RightSectionHotel from "../components/hotel/rightSectionHotel";

const PROVINCES=['Matara', 'Hambantota', 'Galle', 'Colombo', 'Gampaha', 'Kalutara', 'Badulla', 'Moneragala', 'Kegalle', 'Rathnapura', 'Kurunegala', 'Puttalam', 'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Anuradhapura', 'Polonnaruwa', 'Ampara', 'Batticalo', 'Trincomalee', 'Kandy', 'Matale', 'Nuwara Eliya'];

const useStyles= makeStyles((theme) => ({
    topTopics:{
      fontWeight: 'bold',
      fontSize: '15px',
      paddingLeft: '0px',
    }
}))

function Taxi() {
    const history = useHistory();
    const [driverCount, setDriverCount]=useState(0);
    const [driverRequestCount, setDriverRequestCount]=useState(0);
    const [topDriverList, setTopDriverList]=useState([]);
    const [bannedDriverList, setBannedDriverList]=useState([]);
    const classes = useStyles();
    const [searchedWord, setSearchedWord]=useState("");
    const [searchedResult, setSearchedResult] = useState([]);

    function driverListHandler(){
        history.push('taxis/list');
    }

    function requestListHandler(){
        history.push({
          pathname:'taxis/requests',
          state:{
            data: 2,
            newCount: driverRequestCount
          }
        }
        );
    }

    const filterHandler=(term)=>{
        if(term !== ""){
            setSearchedWord(term.toLowerCase());
            const newBannedList= bannedDriverList.filter((driver) =>{
                return driver['first_name'].toLowerCase().startsWith(term)
            })
            setSearchedResult(newBannedList);
        }else{
            setSearchedResult(bannedDriverList);
        }
    }

    var getTaxiData = () => {
        axios.get(`/getTaxiData`).then((res) => {
            setDriverCount(res.data[0]);
            setDriverRequestCount(res.data[1]);
            setTopDriverList(res.data[2]);
            setBannedDriverList(res.data[3]);
            setSearchedResult(res.data[3]);
        });
    };

    useEffect(() => {
        getTaxiData();
    }, []);
    

    return (
        <div>
            <div className="content">
                <div className="left">
                    <div className="cardRow">
                        <Card text='Taxi Drivers' count={driverCount} icon={<LocalTaxiIcon style={{color:"white"}} />} onClick={driverListHandler}></Card>
                        <Card text='New Requests' count={driverRequestCount} icon={<NotificationsIcon style={{color:"white"}} />} onClick={requestListHandler}></Card>
                    </div>

                    <h3>Taxi Drivers</h3>
                    <ProvinceButton page='taxis' provinces={PROVINCES} />
                </div>
                
                <div className="right">
                    <div className="rightSection">
                        <h3>Top Rated Drivers</h3>
                        {
                        topDriverList.length==0
                            ? <p>No drivers yet</p>
                            : topDriverList.map((topDriver) => (
                                <RightSectionHotel name={topDriver[0]+' '+topDriver[1]} rating={topDriver[2]} photo={topDriver[3]}></RightSectionHotel>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="bannedSection">
                <h3>Banned Drivers</h3>
                {
                bannedDriverList.length==0 
                    ? <h2>No drivers to be displayed yet...</h2>
                    : 
                    <div>
                        <FilterSearchBar
                            filterFunction={filterHandler}
                            term={searchedWord}
                            word='driver'
                        />
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.topTopics} align='left' width="30%">TAXI DRIVER</TableCell>
                                        <TableCell className={classes.topTopics} align='left' width="20%">DRIVER LICENSE NO.</TableCell>
                                        <TableCell className={classes.topTopics} align='left' width="15%">CONTACT</TableCell>
                                        <TableCell className={classes.topTopics} align='left' width="15%">DISTRICT</TableCell>
                                        <TableCell className={classes.topTopics} align='left' width="20%">RATING</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {searchedResult.map((bannedHotel) => (
                                        <TableRow key={bannedHotel['number']}>
                                        <TableCell align='justify'><ProfileTableView imageUrl={bannedHotel['profile_photo']} username={bannedHotel['first_name']+' '+bannedHotel['last_name']} useremail={bannedHotel['email']} /></TableCell>
                                        <TableCell align='justify'>{bannedHotel['driver_license']}</TableCell>
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

export default Taxi
