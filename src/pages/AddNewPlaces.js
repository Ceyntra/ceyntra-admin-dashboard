import React,{useRef} from "react";
import "../App.css";
import '../css/addNewPlace.css';
import {FormHelperText,Paper,Input, makeStyles, TextField,Card,ButtonBase,InputLabel,Button } from '@material-ui/core';
import {useState, useEffect} from 'react';
import axios from "../service/axios";
import ImagePicker from "../components/ImagePicker";

const Districts=['Matara', 'Hambantota', 'Galle', 'Colombo', 'Gampaha', 'Kalutara', 'Badulla', 'Moneragala', 'Kegalle', 'Rathnapura', 'Kurunegala', 'Puttalam', 'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Anuradhapura', 'Polonnaruwa', 'Ampara', 'Batticalo', 'Trincomalee', 'Kandy', 'Matale', 'Nuwara Eliya'];

function AddNewPlaces() {


    const [selectedDistrict, setSelectedDistrict]=useState(0);

    const [image1, setImage1]=useState('');
    const [image2, setImage2]=useState("");
    const [image3, setImage3]=useState("");

    const [placeName, setPlaceName]=useState('');
    const [placeDesc, setPlaceDesc]=useState('');
    const [placeLon, setPlaceLon]=useState('');
    const [placeLat, setPlaceLat]=useState('');

    const [error, setError]=useState(false);
    const [success, setSuccess]=useState(false);
    
    const setImage1URL = image => {
        setImage1(image);
        console.log(image);
      };

      const setImage2URL = image => {
        setImage2(image);
      };
    

      const setImage3URL = image => {
        setImage3(image);
      };



      const savePlace=()=>{

    
        if(placeName ==='' || placeDesc ==='' || placeLon==='' || placeLat==='' || image1==='' || image2==='' || image3===''){
            setError(true);
        }else{
           
            const place = { 
                place_name: placeName,
                description: placeDesc,
                latitude:placeLat,
                longitude:placeLon,
                district:Districts[selectedDistrict],
                image1:image1,
                image2:image2,
                image3:image3
            };
            

            axios.post(`/addPlaceByAdmin`, place)
                .then((response) =>{
                    if(response.status==200){
                        setSuccess(true);
                        setPlaceName('');
                        setPlaceDesc('');
                        setPlaceLat('');
                        setPlaceLon('')
                    }
                } 
            );
            
        }
    }
     
    
    

    return (
    <div className="content">
        <div >
            <h3>Select the District</h3>
            <div className="districts">
                {Districts.map((district,index) => (
                    <div className={selectedDistrict===index ? 'oneDistrict activeDistrict': 'oneDistrict'}
                    onClick={()=>{
                        setSelectedDistrict(index);
                    }}>
                        {district}
                    </div>
                ))}
            </div>

    
            <div className="place-form">
                <div>
                        { error ? <h3 className="error">All Fields are rqeuired!</h3> : ''}
                        { success ? <h3 className="success">Place Added success!</h3> : ''}
                    <form>
                        <h3>Place Name</h3>
                        <TextField className="input-field" id="placeName" label="Place Name"  value={placeName} variant="outlined" onChange={(e)=>{ setPlaceName(e.target.value) }}/>
                
                        <h3>Place Description</h3>
                        <TextField className="input-field"  multiline rows={4} id="placeDesc" value={placeDesc} label="Description" variant="outlined" onChange={(e)=>{ 
                            console.log(e.target.value);
                            setPlaceDesc(e.target.value) 
                            }}/>
                
                        <h3>Location Latitude</h3>
                        <TextField className="input-field" id="LocationLat" label="Location Latitude" value={placeLat}  variant="outlined" onChange={(e)=>{ setPlaceLat(e.target.value) }}/>
                
                        <h3>Location Longitude</h3>
                        <TextField className="input-field" id="LocationLon" label="Location Longitude" value={placeLon} variant="outlined" onChange={(e)=>{ setPlaceLon(e.target.value) }}/>
                

                        <h3>Add Place</h3>
                        <Button  className="input-field" variant="contained" color="primary"  
                                onClick={() => {
                                    savePlace();
                                }}>
                        Add Place</Button>
                      
                
                    </form>
                </div>

                <div className="uploader-container">

                <h3>Images</h3>
                    <ImagePicker setImageURL={setImage1URL} isSubmit={success}/>
                    
           
       
                    <ImagePicker setImageURL={setImage2URL} isSubmit={success}/>

              
                    <ImagePicker setImageURL={setImage3URL} isSubmit={success}/>

                </div>
            </div>
      </div>  
    </div>
    );
}

export default AddNewPlaces
