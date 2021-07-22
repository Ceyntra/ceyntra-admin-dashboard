import React from "react";
import "../App.css";
import '../css/travelPlaces.css';
import ProvinceButton from "../components/hotel/provinceButton";
import NewRequestPlace from "../components/places/newRequestPlace";
import RightSectionPlace from "../components/places/rightSectionPlace";

const DISTRICTS=['Matara', 'Hambantota', 'Galle', 'Colombo', 'Gampaha', 'Kalutara', 'Badulla', 'Moneragala', 'Kegalle', 'Rathnapura', 'Kurunegala', 'Puttalam', 'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Anuradhapura', 'Polonnaruwa', 'Ampara', 'Batticalo', 'Trincomalee', 'Kandy', 'Matale', 'Nuwara Eliya'];

// const DUMMY=[{name:'Thalpe', addedby:'A.B.Perera'}, {name:'Hummanaya', addedby:'A.B.Silva'}];

function TravelPlaces(){
    return(
        <div className="content">
            <div className="left">
                <h3>Places</h3>
                <ProvinceButton provinces={DISTRICTS} />

                <div className="requestSection">
                    <h3>New Place Requests</h3>
                    <NewRequestPlace></NewRequestPlace>
                    <NewRequestPlace></NewRequestPlace>
                    <NewRequestPlace></NewRequestPlace>
                </div>
            </div>
            <div className="right">
                <div className="rightSection">
                <h3>Top Rated Places</h3>

                <RightSectionPlace></RightSectionPlace>
                <RightSectionPlace></RightSectionPlace>
                <RightSectionPlace></RightSectionPlace>
                <RightSectionPlace></RightSectionPlace>
                <RightSectionPlace></RightSectionPlace>
            </div>
            </div>
        </div>
    );
}

export default TravelPlaces;