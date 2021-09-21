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
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
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

function Guide() {
    const history = useHistory();
    const [guideCount, setGuideCount]=useState(0);
    const [guideRequestCount, setGuideRequestCount]=useState(0);
    const [topGuideList, setTopGuideList]=useState([]);
    const [bannedGuideList, setBannedGuideList]=useState([]);
    const classes = useStyles();
    const [searchedWord, setSearchedWord]=useState("");
    const [searchedResult, setSearchedResult] = useState([]);

    function guideListHandler(){
        history.push('guides/list');
    }

    function requestListHandler(){
        history.push({
          pathname:'guides/requests',
          state:{
            data: 3,
            newCount: guideRequestCount
          }
        }
        );
    }

    const filterHandler=(term)=>{
        if(term !== ""){
            setSearchedWord(term.toLowerCase());
            const newBannedList= bannedGuideList.filter((guide) =>{
                return guide['first_name'].toLowerCase().startsWith(term)
            })
            setSearchedResult(newBannedList);
        }else{
            setSearchedResult(bannedGuideList);
        }
    }

    var getGuideData = () => {
        axios.get(`/getGuideData`).then((res) => {
            setGuideCount(res.data[0]);
            setGuideRequestCount(res.data[1]);
            setTopGuideList(res.data[2]);
            setBannedGuideList(res.data[3]);
            setSearchedResult(res.data[3]);
        });
    };

    useEffect(() => {
        getGuideData();
    }, []);

    return (
        <div>
            <div className="content">
                <div className="left">
                    <div className="cardRow">
                        <Card text='Guides' count={guideCount} icon={<EmojiPeopleIcon style={{color:"white"}} />} onClick={guideListHandler}></Card>
                        <Card text='New Requests' count={guideRequestCount} icon={<NotificationsIcon style={{color:"white"}} />} onClick={requestListHandler}></Card>
                    </div>

                    <h3>Guides</h3>
                    <ProvinceButton page='guides' provinces={PROVINCES} />
                </div>
                
                <div className="right">
                    <div className="rightSection">
                        <h3>Top Rated Guides</h3>
                        {
                        topGuideList.length==0
                            ? <p>No guides yet</p>
                            : topGuideList.map((topGuide) => (
                                <RightSectionHotel name={topGuide[0]+' '+topGuide[1]} rating={topGuide[2]} photo={topGuide[3]}></RightSectionHotel>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="bannedSection">
                <h3>Banned Guides</h3>
                {
                bannedGuideList.length==0 
                    ? <h2>No guides to be displayed yet...</h2>
                    : 
                    <div>
                        <FilterSearchBar
                            filterFunction={filterHandler}
                            term={searchedWord}
                            word='guide'
                        />
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.topTopics} align='left' width="30%">GUIDE</TableCell>
                                        <TableCell className={classes.topTopics} align='left' width="20%">NIC</TableCell>
                                        <TableCell className={classes.topTopics} align='left' width="15%">CONTACT</TableCell>
                                        <TableCell className={classes.topTopics} align='left' width="15%">DISTRICT</TableCell>
                                        <TableCell className={classes.topTopics} align='left' width="20%">RATING</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {searchedResult.map((bannedGuide) => (
                                        <TableRow key={bannedGuide['number']}>
                                        <TableCell align='justify'><ProfileTableView imageUrl={bannedGuide['profile_photo']} username={bannedGuide['first_name']+' '+bannedGuide['last_name']} useremail={bannedGuide['email']} /></TableCell>
                                        <TableCell align='justify'>{bannedGuide['nic']}</TableCell>
                                        <TableCell align='justify'>{bannedGuide['telephone']}</TableCell>
                                        <TableCell align='justify'>{bannedGuide['district']}</TableCell>
                                        <TableCell align='justify'>
                                            <Box
                                            sx={{ 
                                                display: 'flex',  
                                            }}
                                            >
                                            <Rating name="read-only" value={bannedGuide['rating']} size="small" readOnly />
                                            <Box sx={{ ml: 0.5 }}>{bannedGuide['rating']}</Box>
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

export default Guide
