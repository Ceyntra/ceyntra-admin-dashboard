import React from 'react'
import "../css/places.css";
import sigiriya from "../assets/images/sigiriya.jpg";

function Places() {
    return (
        <div>
            
            <div className = "places1">
                <div className = "places1Topic">
                    <p>
                        Places - Matale District
                    </p>
                </div>
                <div className = "placesImage">
                    <div className = "placesigiriya">
                        <img className="sigiriya-img" src={sigiriya} alt="" srcset="" height="60px" width="60px"/>
                    </div>
                    <div className = "placetext">
                        <p>Sigiriya</p>
                    </div>
                </div>
                <div className = "placesImage">
                    <div className = "placesigiriya">
                        <img className="sigiriya-img" src={sigiriya} alt="" srcset="" height="60px" width="60px"/>
                    </div>
                    <div className = "placetext"><p>Sigiriya</p></div>
                </div>
                <div className = "placesImage">
                    <div className = "placesigiriya">
                        <img className="sigiriya-img" src={sigiriya} alt="" srcset="" height="60px" width="60px"/>
                    </div>
                    <div className = "placetext"><p>Sigiriya</p></div>
                </div>
                <div className = "placesImage">
                    <div className = "placesigiriya">
                        <img className="sigiriya-img" src={sigiriya} alt="" srcset="" height="60px" width="60px" />
                    </div>
                    <div className = "placetext"><p>Sigiriya</p></div>
                </div>
                <div className = "placesImage">
                    <div className = "placesigiriya">
                        <img className="sigiriya-img" src={sigiriya} alt="" srcset="" height="60px" width="60px"/>
                    </div>
                    <div className = "placetext"><p>Sigiriya</p></div>
                </div>
            </div>
            <div className = "places2">
                <div className = "places2images">
                    <div className = "places2image1">
                        <img className="sigiriya-img" src={sigiriya} alt="" srcset="" height="75px" width="75px"/>
                    </div>
                    <div className = "places2image1">
                        <img className="sigiriya-img" src={sigiriya} alt="" srcset="" height="75px" width="75px"/>
                    </div>
                    <div className = "places2image1">
                        <img className="sigiriya-img" src={sigiriya} alt="" srcset="" height="75px" width="75px"/>
                    </div>
                    <div className = "place2button">
                        <button className = "place2plus"> <h2>+</h2> </button>
                    </div>
                    
                </div>
                
                    
                       <div className = "place2name">
                           <p> Name : Sigiriya</p>
                       </div>
                    
                    <div className = "places2description2">
                       <div className = "place2descriptiontopic">
                           <p>Description: </p>
                       </div>
                       <div className = "place2descriptionsigiriya">
                           <p>Sigiriya is an ancient rock firtress and palace built by King Kashyapa during the reign of 473 - 495 
                               which is standing majestically 660 feet straigth up. It is located i the nothern Matale
                                district near the town of Dambulla in central province of Sri Lanka</p>
                       </div>
                       <div className = "placce2rating">
                           <p>4.8 *****</p>
                       </div>
                    </div>
                    <div className = "place2button">
                        
                            <button className = "places2save">Save Changes</button>
                        
                            <button className = "places2cancel">Cancel</button>
                            
                    </div>
                    
            </div>
        </div>
    )
}

export default Places
