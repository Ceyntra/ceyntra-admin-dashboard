import React from 'react'
import {makeStyles,Paper,Grid,Container, Typography } from '@material-ui/core';
import {Hotel} from '@material-ui/icons'

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



function TravellerActivities() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>

        <Paper className={classes.paper}>

          <Grid container spacing={12}>

            <Grid item lg={2} xs={1} md={2} >
                <Container>
                    <img className={classes.img} alt="Profile img" src="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" />
                    <div className={classes.dataBody}> 
                        <Typography className={classes.userName} align='left' >{'username'}</Typography>
                        <Typography className={classes.userEmail} align='left' variant="subtitle1" color="textSecondary">
                        {'useremail'}
                        </Typography>
                    </div>
                </Container>
            </Grid>

            <Grid item xs={12} md={10} sm container>

              <Grid item xs container direction="column" spacing={2}>
             
                  <Typography gutterBottom variant="subtitle1">
                    Recent Activities
                  </Typography>

                <Paper className={classes.activityRow}>
                    <div>Hilton Hotel</div>
                    <div>12/06/2021</div>
                    <div>5:42 PM</div>
                    <div><Hotel className={classes.icon}/></div>
                </Paper>
                <Paper className={classes.activityRow}>
                    <div>Hilton Hotel</div>
                    <div>12/06/2021</div>
                    <div>5:42 PM</div>
                    <div><Hotel className={classes.icon}/></div>
                </Paper>
                <Paper className={classes.activityRow}>
                    <div>Hilton Hotel</div>
                    <div>12/06/2021</div>
                    <div>5:42 PM</div>
                    <div><Hotel className={classes.icon}/></div>
                </Paper>
                <Paper className={classes.activityRow}>
                    <div>Hilton Hotel</div>
                    <div>12/06/2021</div>
                    <div>5:42 PM</div>
                    <div><Hotel className={classes.icon}/></div>
                </Paper>
                <Paper className={classes.activityRow}>
                    <div>Hilton Hotel</div>
                    <div>12/06/2021</div>
                    <div>5:42 PM</div>
                    <div><Hotel className={classes.icon}/></div>
                </Paper>

              </Grid>
             
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
}

export default TravellerActivities
