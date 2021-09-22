import "../../css/rightSectionHotel.css";
import React from "react";
import placePic from "../../assets/images/sigiriya.jpg";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Avatar, makeStyles} from '@material-ui/core';

const useStyles= makeStyles((theme) => ({
  hotelPhoto:{
    minHeight: '50px',
    minWidth: '50px',
  }
}))

function RightSectionPlace(props) {
  const classes = useStyles();

  return (
    <div className="topRatedHotel">
      <div>
        <Box component="fieldset" mb={0} borderColor="transparent">
          <Typography component="legend">{props.name}</Typography>
          <Rating name="read-only" value={props.rating} readOnly />
        </Box>
      </div>
      <div>
        <Avatar className={classes.hotelPhoto} alt="profile" variant="rounded" src={props.photo} />
      </div>
    </div>
  );
}

export default RightSectionPlace;
