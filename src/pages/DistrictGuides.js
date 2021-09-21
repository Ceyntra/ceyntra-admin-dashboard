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

function DistrictGuides(props) {
    const { data } = props.location.state;
    const [guides, setGuides] = useState([]);
    const classes = useStyles();

    const [searchedWord, setSearchedWord]=useState("");
    const [searchedResult, setSearchedResult] = useState([]);

    function bannedHandler(id){
        axios.post(`/bannedGuide/${id}`).then((result) => {
            if(result.data==1){
                Swal.fire({
                    icon: 'success',
                    text: 'Guide Banned Successfully!',
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
            const newGuideList= guides.filter((guide) =>{
                return guide['guide']['first_name'].toLowerCase().startsWith(term)
            })
            setSearchedResult(newGuideList);
        }else{
            setSearchedResult(guides);
        }
    }

    var getGuides = () => {
        axios.get(`/getGuides/${data}`).then((result) => {
          setGuides(result.data);
          setSearchedResult(result.data);
        });
    };
    
    useEffect(() => {
        getGuides();
    }, []);

    return(
        <div className="table-content">
            {
                guides.length==0 
                    ? <h2>No guides to be displayed yet...</h2>
                    : 
                    <div>
                        <FilterSearchBar
                            filterFunction={filterHandler}
                            term={searchedWord}
                            word='guide'
                        />
                        <TableContainer classes={{root: classes.customTableContainer}}>
                            <Table  aria-label="simple table" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.headingTopics} align='left' width="30%">GUIDE</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="15%">GUIDE ID</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="17%">NIC</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="13%">CONTACT</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="5%">CHARGE/DAY</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="5%">STATE</TableCell>
                                        <TableCell className={classes.headingTopics} align='left' width="10%">RATING</TableCell>
                                        <TableCell className={classes.headingTopics} align='center' width="5%">ACTION</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                {searchedResult.map((guide) => (
                                    <TableRow key={guide['guide']['guide_id']}>
                                        <TableCell align='justify'><ProfileTableView imageUrl={guide['guide']['profile_photo']} username={guide['guide']['first_name']+' '+guide['guide']['last_name']} useremail={guide['contact']['email']} /></TableCell>
                                        <TableCell align='justify'>{guide['guide']['guide_id']}</TableCell>
                                        <TableCell align='justify'>{guide['guide']['nic']}</TableCell>
                                        <TableCell align='justify'>{guide['contact']['telephone']}</TableCell>
                                        <TableCell align='justify'>{guide['guide']['per_day_price']} LKR</TableCell>
                                        <TableCell align='justify'>{guide['guide']['vehicle_state']} vehicle</TableCell>
                                        <TableCell align='justify'>
                                            <Box
                                                sx={{ 
                                                    display: 'flex',
                                                }}
                                            >
                                                <Rating name="read-only" value={guide['guide']['rating']} size="small" readOnly />
                                                <Box sx={{ ml: 0.5 }}>{guide['guide']['rating']}</Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell align='center'><button className="ban-button" onClick={() => bannedHandler(guide['guide']['guide_id'])}>Ban</button></TableCell>
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

export default DistrictGuides;