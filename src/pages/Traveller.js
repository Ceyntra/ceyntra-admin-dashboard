import React, {useState,useEffect} from 'react'
import {TableContainer, Table,TableHead,TableCell,TableBody,TableRow,Paper, makeStyles, Container } from '@material-ui/core'
import ProfileTableView from '../components/ProfileTableView';
import TravellerActivities from '../components/TravellerActivities';
import "../css/traveller.css";
import SearchTraveller from '../components/traveller/SearchTraveller';
import axios from "../service/axios";


function Traveller() {

    const [activeIndex, setactiveIndex]=useState(0);
    const [activityList,setactivityList]=useState([]);
    const [searchTerm, setSearchTerm]=useState("");
    

    const [travellerList, setTravellerList] = useState([])

    useEffect(() => {
        getPageData();
      }, []);
    
      var getPageData = () => {
        axios.get(`/getTravellersForAdmin`).then((res) => {
        //   setTravellerList(res.data);
          setTravellerList(res.data);
        //   console.log(travellerList[0]['traveller']['userID']);
        });
      };



    return (
        <div className="container">

            {/* Search */}
            <div className="searchBox">
                <SearchTraveller />
            </div>

            {/* Traveller List */}
            <div  className="tile">
                <TableContainer>
                    <Table  aria-label="simple table">
                        <TableHead>
                        <TableRow >
                            <TableCell align='center'>TRAVELLER</TableCell>
                            <TableCell align='center'>NIC/PASSPORT</TableCell>
                            <TableCell align='center'>CONTACT</TableCell>
                            <TableCell align='center'>COUNTRY</TableCell>
                            <TableCell align='center'>STATUS</TableCell>
                        </TableRow>
                        </TableHead>

                        <TableBody>
                            {/* <TableRow selected={true }>
                                <TableCell align='center'><ProfileTableView imageUrl="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" username="Michal John" useremail="micheal@gmail.com" /></TableCell>
                                <TableCell align='center'>7529964030V</TableCell>
                                <TableCell align='center'>+947529960</TableCell>
                                <TableCell align='center'>SriLanka</TableCell>
                                <TableCell align='center'>Active</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell align='center'><ProfileTableView imageUrl="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" username="Michal John" useremail="micheal@gmail.com" /></TableCell>
                                <TableCell align='center'>7529964030V</TableCell>
                                <TableCell align='center'>+947529960</TableCell>
                                <TableCell align='center'>SriLanka</TableCell>
                                <TableCell align='center'>Active</TableCell>
                            </TableRow>
                         */}
                       
                            
                        {travellerList.map((traveller) => (
                            <TableRow key={traveller['user']['userID']}>
                                  <TableCell align='center'><ProfileTableView imageUrl={traveller['traveller']['photo']} username={traveller['traveller']['firstName'] +' '+traveller['traveller']['lastName'] } useremail={traveller['user']['email']} /></TableCell>
                                <TableCell align='center'>{traveller['traveller']['nic']}</TableCell>
                                <TableCell align='center'>{traveller['user']['telephone']}</TableCell>
                                <TableCell align='center'>SriLanka</TableCell>
                                <TableCell align='center'>{traveller['user']['isLoggedIn'] == 0 ? 'Online' : 'Offline'}</TableCell>
                            </TableRow>
                        ))}

                        </TableBody>
                    </Table>
                    </TableContainer>
                    </div>
                    
                    {/* Details of a traveller */}
                    <div className="tile" >
                        <TravellerActivities />
                    </div>

        </div>
    )
}

export default Traveller
