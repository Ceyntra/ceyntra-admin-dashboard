import React, {useState,useEffect} from 'react'
import {TableContainer, Table,TableHead,TableCell,TableBody,TableRow,Paper, makeStyles, Container } from '@material-ui/core'
import ProfileTableView from '../components/ProfileTableView';
import TravellerActivities from '../components/TravellerActivities';
import "../css/traveller.css";
import SearchTraveller from '../components/traveller/SearchTraveller';
import TravellerRow from '../components/traveller/travellerRow';
import axios from "../service/axios";


function Traveller() {

    const [activeIndex, setActiveIndex]=useState(0);
    const [activityList,setActivityList]=useState([]);

    const [searchTerm, setSearchTerm]=useState("");
    const [travellerList, setTravellerList] = useState([])
    const [searchResult, setSearchResult] = useState([])

    //Activity User states
    const [image,setImage]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const searchHandler=(term)=>{
        setSearchTerm(term.toLowerCase());
        if(term !== ""){
            const newTravellerList= travellerList.filter((traveller) =>{
                return traveller['user']['email'].toLowerCase().startsWith(term)
            })
            setSearchResult(newTravellerList);
        }else{
            setSearchResult(travellerList);
        }
    }

    const setActive=(n,image,name,email)=>{
        setActiveIndex(n);
        getActivities(n);

        setImage(image);
        setName(name);
        setEmail(email);
    }


    useEffect(() => {
        getPageData();
      }, []);

    
      var getPageData = () => {
         axios.get(`/getTravellersForAdmin`).then((res) => {

         console.log(res.data);

          setTravellerList(res.data);
          setSearchResult(res.data);
          getActivities(res.data[0]['user']['userID']);

          setActiveIndex(res.data[0]['user']['userID']);
          setImage(res.data[0]['traveller']['photo']);
          setName(res.data[0]['traveller']['firstName'] +' '+ res.data[0]['traveller']['lastName']);
          setEmail(res.data[0]['user']['email']);
        });
      };

      var getActivities = (activeIndex) => {
          console.log(activeIndex);
         axios.get(`/getActivities/${activeIndex}`).then((res) => {
            console.log(res.data);
            setActivityList(res.data);
        });
      };

     

    return (
        <div className="container">

            {/* Search */}
            <div className="searchBox">
                <SearchTraveller 
                    searchFunction={searchHandler} 
                    term={searchTerm}
                />
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
                            {searchResult.map((traveller) => {
                                    return (<TravellerRow 
                                        userID={traveller['user']['userID']}
                                        image={traveller['traveller']['photo']}
                                        name={traveller['traveller']['firstName'] +' '+traveller['traveller']['lastName'] } 
                                        email={traveller['user']['email']}
                                        nic={traveller['traveller']['nic']}
                                        telephone={traveller['user']['telephone']}
                                        country="Sri Lanka"
                                        isLoggedIn={traveller['user']['isLoggedIn'] }
                                        active ={setActive}
                                        activeItem={activeIndex}
                                    />);
                            })}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </div>
                    
                    {/* Details of a traveller */}
                    <div className="tile" >
                        <TravellerActivities activityList={activityList} image={image} name={name} email={email} />
                    </div>

        </div>
    )
}

export default Traveller
