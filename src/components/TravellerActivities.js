import React from 'react'
import {makeStyles,Paper,Container, Typography } from '@material-ui/core';
import {Hotel,LocalTaxi,EmojiPeople} from '@material-ui/icons'
import "../css/travellerActivities.css";

const useStyles = makeStyles((theme) => ({
    
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
    },

    img: {
      height: 'inherit',
      borderRadius:'10px',
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  
      userName:{
        fontWeight:'bold',
      },
      
      userEmail:{
        fontSize:'14px',
      },
      activity:{
        display: 'inline',
        padding: '0',
        margin: '0',
      },
      activityRow:{
          margin: '5px 0px 10px 0px',
          display: 'flex',
          justifyContent:'space-between',
          alignItems: 'center',
          padding: '5px',
      },
      icon:{
          padding: '3px',
          margin: '0',
          width: theme.spacing(3),
          height: theme.spacing(3),
          backgroundColor:'#CB0C9F',
          color: 'white',
          borderRadius:'8px',
      },
  }));



function TravellerActivities({activityList,image,name,email}) {

    const classes = useStyles();

    
    
    return (
        <div className={classes.root}>

        {/* <Paper className={classes.paper}> */}

          <div  className="flexBoxContainer">

            <div className="userBox">
                <Container>
                    <img className={classes.img} alt="Profile img" src={image} />
                    <div className={classes.dataBody}> 
                        <Typography className={classes.userName} align='left' >{name}</Typography>
                        <Typography className={classes.userEmail} align='left' variant="subtitle1" color="textSecondary">
                        {email}
                        </Typography>
                    </div>
                </Container>
            </div>

            <div className="activityBox">
             
                  <Typography gutterBottom variant="subtitle1">
                    Recent Activities
                  </Typography>

                  {activityList.map((activity) => {                                    
                      return (<Paper className={classes.activityRow}>
                                      <div>{activity['spName']}</div>
                                      <div>{activity['date']}</div>
                                      <div>{activity['time']}</div>
                                      <div> { activity['packageType'] == "taxi" ? <LocalTaxi className={classes.icon}/> : activity['packageType'] == "hotel" ? <Hotel className={classes.icon}/> : <EmojiPeople className={classes.icon}/>   } </div>
                        </Paper>);
                    })}

              </div>
             
        
          </div>
        {/* </Paper> */}
      </div>
    )
}

export default TravellerActivities
