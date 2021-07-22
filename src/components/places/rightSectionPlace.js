import classes from "../../css/rightSectionHotel.module.css";
import React, { Component } from "react";
import placePic from "../../assets/images/sigiriya.jpg";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function RightSectionPlace() {
  return (
    <div className={classes.topRatedHotel}>
      <div>
        <Box component="fieldset" mb={0} borderColor="transparent">
          <Typography component="legend">Chariot Path</Typography>
          <Rating name="read-only" value="2" readOnly />
        </Box>
      </div>
      <div>
        <img src={placePic} width="60px" height="60px" />
      </div>
    </div>
  );
}

export default RightSectionPlace;
