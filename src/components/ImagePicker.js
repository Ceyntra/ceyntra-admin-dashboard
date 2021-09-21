import React,{useState} from 'react'
import {Card,CardMedia,CardContent, Typography, CardActions,ButtonBase,InputLabel,Button } from '@material-ui/core'
import {Remove} from "@material-ui/icons";
import { storage } from "../firebase";
import '../css/addNewPlace.css';




function ImagePicker({setImageURL}) {


    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {

      if(image != null){
        const uploadTask = storage.ref(`place/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("place")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url);
                setImageURL(url);

              });
        }
      );

      }else{
        alert("Image not added");
      }
      
    };
  
    
  
    return (
      <div className="App">
             <div  className="image-upload">

                <input type="file" onChange={handleChange} />
                <div className="image-view">
                  <img id="uploadImg" src={url || "https://firebasestorage.googleapis.com/v0/b/ceyntra-project.appspot.com/o/place?alt=media&token=85dda30f-0719-4c72-865e-84ceaad5fb1a"} alt="firebase-image" />
                </div>
                <progress value={progress} max="100" />
                <button className="upload-btn" onClick={handleUpload}>Upload</button><br/>
                
             </div>
        
        </div>
        );
};

export default ImagePicker
