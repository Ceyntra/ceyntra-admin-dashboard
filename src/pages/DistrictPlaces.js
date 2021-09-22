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

function DistrictPlaces(props) {
    const { data } = props.location.state;
    const [places, setPlaces] = useState([]);
    const classes = useStyles();

    const [searchedWord, setSearchedWord]=useState("");
    const [searchedResult, setSearchedResult] = useState([]);

    function deleteHandler(id){
        axios.delete(`/deletePlace/${id}`).then((result) => {
            if(result.data==1){
                Swal.fire({
                    icon: 'success',
                    text: 'Place Deleted Successfully!',
                })
                // window.location.reload(false);
            }else{
                Swal.fire({
                    icon: 'error',
                    text: 'Delete Failed!',
                })
            }
        });
    }

    const filterHandler=(term)=>{
        if(term !== ""){
            setSearchedWord(term.toLowerCase());
            const newPlaceList= places.filter((place) =>{
                return place['place_name'].toLowerCase().startsWith(term)
            })
            setSearchedResult(newPlaceList);
        }else{
            setSearchedResult(places);
        }
    }

    var getPlaces = () => {
        axios.get(`/getPlaces/${data}`).then((result) => {
          setPlaces(result.data);
          setSearchedResult(result.data);
        });
    };
    
    useEffect(() => {
        getPlaces();
    }, []);

    return(
        <div className="table-content">
            {
                places.length==0 
                    ? <h2>No places to be displayed yet...</h2>
                    : 
                    <div>
                        <FilterSearchBar
                            filterFunction={filterHandler}
                            term={searchedWord}
                            word='place'
                        />
                        <TableContainer classes={{root: classes.customTableContainer}}>
                            <Table  aria-label="simple table" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.headingTopics} align='left' width="30%">PLACE</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="15%">PLACE ID</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="15%">LATITUDE</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="15%">LONGITUDE</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="15%">RATING</TableCell>
                                        <TableCell className={classes.headingTopics} align='center' width="10%">ACTION</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                {searchedResult.map((place) => (
                                    <TableRow key={place['place_id']}>
                                        <TableCell align='justify'><ProfileTableView imageUrl={place['photo']} username={place['place_name']} useremail={place['number_of_votes']+' votes'} /></TableCell>
                                        <TableCell align='justify'>{place['place_id']}</TableCell>
                                        <TableCell align='justify'>{place['latitude']}</TableCell>
                                        <TableCell align='justify'>{place['longitude']}</TableCell>
                                        <TableCell align='justify'>
                                            <Box
                                                sx={{ 
                                                    display: 'flex',  
                                                }}
                                            >
                                                <Rating name="read-only" value={place['rating']} size="small" readOnly />
                                                <Box sx={{ ml: 0.5 }}>{place['rating']}</Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell align='center'><button className="ban-button" onClick={() => deleteHandler(place['place_id'])}>Delete</button></TableCell>
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

export default DistrictPlaces;