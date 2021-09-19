import React, {useState, useEffect} from 'react';
import axios from "../service/axios";
import {TableContainer, Table,TableHead,TableCell,TableBody,TableRow,Paper, makeStyles, Container } from '@material-ui/core'
import ProfileTableView from '../components/ProfileTableView';
import '../css/districtHotels.css';
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import FilterSearchBar from '../components/FilterSearchBar';

const useStyles= makeStyles((theme) => ({
    headingTopics:{
        fontWeight: 'bold',
        fontSize: '15px',
        paddingLeft: '0px',
        top: '60px',
        backgroundColor: 'white'
    },

    customTableContainer: {
        overflowX: "initial",
    }
}))

function DistrictHotels(props) {
    const { data } = props.location.state;
    const [hotels, setHotels] = useState([]);
    const classes = useStyles();

    const [searchedWord, setSearchedWord]=useState("");
    const [searchedResult, setSearchedResult] = useState([]);

    const filterHandler=(term)=>{
        if(term !== ""){
            setSearchedWord(term.toLowerCase());
            const newHotelList= hotels.filter((hotel) =>{
                return hotel['hotel']['name'].toLowerCase().startsWith(term)
            })
            setSearchedResult(newHotelList);
        }else{
            setSearchedResult(hotels);
        }
    }

    var getHotels = () => {
        axios.get(`/getHotels/${data}`).then((result) => {
          setHotels(result.data);
          setSearchedResult(result.data);
        });
    };
    
    useEffect(() => {
        getHotels();
    }, []);

    return(
        <div className="table-content">
            {
                hotels.length==0 
                    ? <h2>No hotels to be displayed yet...</h2>
                    : 
                    <div>
                        <FilterSearchBar
                            filterFunction={filterHandler}
                            term={searchedWord}
                        />
                        <TableContainer classes={{root: classes.customTableContainer}}>
                            <Table  aria-label="simple table" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.headingTopics} align='left' width="30%">HOTEL</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="13%">HOTEL ID</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="20%">REGISTRATION NO.</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="15%">CONTACT</TableCell>
                                        {/* <TableCell className={classes.headingTopics} align='center'>HOTEL DESCRIPTION</TableCell> */}
                                        <TableCell className={classes.headingTopics} align='left' width="17%">RATING</TableCell>
                                        <TableCell className={classes.headingTopics} align='center' width="5%">ACTION</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                {searchedResult.map((hotel) => (
                                    <TableRow key={hotel['hotel']['hotel_id']}>
                                        <TableCell align='justify'><ProfileTableView imageUrl={hotel['hotel']['profile_photo']} username={hotel['hotel']['name']} useremail={hotel['contact']['email']} /></TableCell>
                                        <TableCell align='justify'>{hotel['hotel']['hotel_id']}</TableCell>
                                        <TableCell align='justify'>{hotel['hotel']['registration_number']}</TableCell>
                                        <TableCell align='justify'>{hotel['contact']['telephone']}</TableCell>
                                        {/* <TableCell align='center'>{hotel['hotel']['description']}</TableCell> */}
                                        <TableCell align='justify'>
                                            <Box
                                                sx={{ 
                                                    display: 'flex',  
                                                }}
                                            >
                                                <Rating name="read-only" value={hotel['hotel']['rating']} size="small" readOnly />
                                                <Box sx={{ ml: 0.5 }}>{hotel['hotel']['rating']}</Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell align='center'><button className="ban-button">Ban</button></TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
            }
        </div>
    );
}

export default DistrictHotels;