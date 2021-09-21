import React, {useState, useEffect} from 'react';
import axios from "../service/axios";
import {TableContainer, Table,TableHead,TableCell,TableBody,TableRow,Paper, makeStyles, Container } from '@material-ui/core'
import ProfileTableView from '../components/ProfileTableView';
import '../css/districtHotels.css';
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import FilterSearchBar from '../components/FilterSearchBar';
import Swal from 'sweetalert2';

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

function DistrictTaxis(props) {
    const { data } = props.location.state;
    const [taxis, setTaxis] = useState([]);
    const classes = useStyles();

    const [searchedWord, setSearchedWord]=useState("");
    const [searchedResult, setSearchedResult] = useState([]);

    function bannedHandler(id){
        axios.post(`/bannedTaxi/${id}`).then((result) => {
            if(result.data==1){
                Swal.fire({
                    icon: 'success',
                    text: 'Driver Banned Successfully!',
                })
                // window.location.reload(false);
            }else{
                Swal.fire({
                    icon: 'error',
                    text: 'Ban Failed!',
                })
            }
        });
    }

    const filterHandler=(term)=>{
        if(term !== ""){
            setSearchedWord(term.toLowerCase());
            const newTaxiList= taxis.filter((taxi) =>{
                return taxi['taxiDriver']['first_name'].toLowerCase().startsWith(term)
            })
            setSearchedResult(newTaxiList);
        }else{
            setSearchedResult(taxis);
        }
    }

    var getTaxis = () => {
        axios.get(`/getTaxis/${data}`).then((result) => {
          setTaxis(result.data);
          setSearchedResult(result.data);
        });
    };
    
    useEffect(() => {
        getTaxis();
    }, []);

    return(
        <div className="table-content">
            {
                taxis.length==0 
                    ? <h2>No taxis to be displayed yet...</h2>
                    : 
                    <div>
                        <FilterSearchBar
                            filterFunction={filterHandler}
                            term={searchedWord}
                            word='driver'
                        />
                        <TableContainer classes={{root: classes.customTableContainer}}>
                            <Table  aria-label="simple table" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.headingTopics} align='left' width="30%">DRIVER</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="12%">DRIVER ID</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="20%">LICENSE NO.</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="15%">CONTACT</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="5%">CHARGE/KM</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="13%">RATING</TableCell>
                                        <TableCell className={classes.headingTopics} align='center' width="5%">ACTION</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                {searchedResult.map((taxi) => (
                                    <TableRow key={taxi['taxiDriver']['taxi_driver_id']}>
                                        <TableCell align='justify'><ProfileTableView imageUrl={taxi['taxiDriver']['profile_photo']} username={taxi['taxiDriver']['first_name']+' '+taxi['taxiDriver']['last_name']} useremail={taxi['contact']['email']} /></TableCell>
                                        <TableCell align='justify'>{taxi['taxiDriver']['taxi_driver_id']}</TableCell>
                                        <TableCell align='justify'>{taxi['taxiDriver']['driver_license']}</TableCell>
                                        <TableCell align='justify'>{taxi['contact']['telephone']}</TableCell>
                                        <TableCell align='justify'>{taxi['taxiDriver']['per_km_price']} LKR</TableCell>
                                        <TableCell align='justify'>
                                            <Box
                                                sx={{ 
                                                    display: 'flex',  
                                                }}
                                            >
                                                <Rating name="read-only" value={taxi['taxiDriver']['rating']} size="small" readOnly />
                                                <Box sx={{ ml: 0.5 }}>{taxi['taxiDriver']['rating']}</Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell align='center'><button className="ban-button" onClick={() => bannedHandler(taxi['taxiDriver']['taxi_driver_id'])}>Ban</button></TableCell>
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

export default DistrictTaxis;