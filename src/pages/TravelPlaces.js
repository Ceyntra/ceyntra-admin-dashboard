import React from "react";
import "../App.css";
import '../css/travelPlaces.css';
import ProvinceButton from "../components/hotel/provinceButton";
import NewRequestPlace from "../components/places/newRequestPlace";
import RightSectionPlace from "../components/places/rightSectionPlace";
import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "../service/axios";

const DISTRICTS=['Matara', 'Hambantota', 'Galle', 'Colombo', 'Gampaha', 'Kalutara', 'Badulla', 'Moneragala', 'Kegalle', 'Rathnapura', 'Kurunegala', 'Puttalam', 'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Anuradhapura', 'Polonnaruwa', 'Ampara', 'Batticalo', 'Trincomalee', 'Kandy', 'Matale', 'Nuwara Eliya'];

// const DUMMY=[{name:'Thalpe', addedby:'A.B.Perera'}, {name:'Hummanaya', addedby:'A.B.Silva'}];

function TravelPlaces(){
    const [placeCount, setPlaceCount]=useState(0);
    const [topPlaceList, setTopPlaceList]=useState([]);

    var getPlaceData = () => {
        axios.get(`/getPlaceData`).then((res) => {
            setPlaceCount(res.data[0]);
            setTopPlaceList(res.data[1]);
        });
    };

    useEffect(() => {
        getPlaceData();
    }, []);

    return(
        <div className="content">
            <div className="left">
                <h3>Places - {placeCount}</h3>
                <ProvinceButton page='places' provinces={DISTRICTS} />
            </div>
            <div className="right">
                <div className="rightSection">
                <h3>Top Rated Places</h3>
                {
                topPlaceList.length==0
                    ? <p>No places yet</p>
                    : topPlaceList.map((topPlace) => (
                        <RightSectionPlace name={topPlace[0]} rating={topPlace[1]} photo={topPlace[2]}></RightSectionPlace>
                    ))
                }
            </div>
            </div>
        </div>
    );
}

export default TravelPlaces;