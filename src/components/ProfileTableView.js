import React from 'react'
import {makeStyles,Avatar,TableContainer, Table,Container, Card,CardContent,Typography,IconButton,CardMedia } from '@material-ui/core';
import styled from 'styled-components';


const useStyles= makeStyles((theme) => ({
    profileBox:{
      position: 'relative',
      display: 'flex',
      height: '50px',
      // border: "4px solid black",
    },
    profilePic:{
      height: 'inherit',
      borderRadius:'10px',
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    dataBody:{
      height: 'inherit',
      paddingLeft:'10px',
    },
    userName:{
      fontWeight:'bold',
    },
    userEmail:{

      
      fontSize:'14px',
    },
}))




function ProfileTableView({imageUrl,username,useremail}) {

  const classes = useStyles();
    return (
  
        <div className={classes.profileBox}> 
             <Avatar className={classes.profilePic}  alt="profile" variant="rounded" src={imageUrl} />
            <div className={classes.dataBody}> 
                <Typography className={classes.userName} align='left' >{username}</Typography>
                <Typography className={classes.userEmail} align='left' variant="subtitle1" color="textSecondary">
                  {useremail}
                </Typography>
            </div>
        </div>
    )
}

export default ProfileTableView
