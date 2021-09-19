import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import axios from "../service/axios";
import '../css/hotelList.css';

function HotelList(){
    const [hotelList, setHotelList] = useState([])

    var getHotelDetails = () => {
        axios.get(`/getHotelsBriefDetails`).then((result) => {
          setHotelList(result.data);
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
                            {hotelList.map((hotel) => (
                                <tr key={hotel['id']}>
                                    <td>{hotel['name']}</td>
                                    <td>{hotel['userContactModel']['telephone']}</td>
                                    <td>{hotel['userContactModel']['email']}</td>
                                    <td>{hotel['district']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            }
        </div>
    );
}

export default HotelList;