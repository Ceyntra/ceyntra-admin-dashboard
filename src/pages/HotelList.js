import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import axios from "../service/axios";
import '../css/hotelList.css';
import FilterSearchBar from '../components/FilterSearchBar';

function HotelList(){
    const [hotelList, setHotelList] = useState([])

    const [searchedWord, setSearchedWord]=useState("");
    const [searchedResult, setSearchedResult] = useState([]);

    const filterHandler=(term)=>{
        if(term !== ""){
            setSearchedWord(term.toLowerCase());
            const newHotelList= hotelList.filter((hotel) =>{
                return hotel['name'].toLowerCase().startsWith(term)
            })
            setSearchedResult(newHotelList);
        }else{
            setSearchedResult(hotelList);
        }
    }

    var getHotelDetails = () => {
        axios.get(`/getHotelsBriefDetails`).then((result) => {
          setHotelList(result.data);
          setSearchedResult(result.data);
        });
    };
    
    useEffect(() => {
        getHotelDetails();
    }, []);

    return(
        <div className="table-content">
            {
                hotelList.length==0 
                    ? <h1>No hotels to be desplayed yet...</h1>
                    : 
                    <div>
                        <FilterSearchBar
                            filterFunction={filterHandler}
                            term={searchedWord}
                            word='hotel'
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>HOTEL</th>
                                    <th>TELEPHONE</th>
                                    <th>EMAIL</th>
                                    <th>DISTRICT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchedResult.map((hotel) => (
                                    <tr key={hotel['id']}>
                                        <td>{hotel['name']}</td>
                                        <td>{hotel['userContactModel']['telephone']}</td>
                                        <td>{hotel['userContactModel']['email']}</td>
                                        <td>{hotel['district']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
}

export default HotelList;