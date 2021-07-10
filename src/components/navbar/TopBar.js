import React,{useState} from 'react'
import styled from 'styled-components'
import {AppBar, Badge,MenuItem,ListItemAvatar,Avatar,ListItemText,Button, FormControl,Select, Toolbar, makeStyles, Grow, IconButton, Menu} from '@material-ui/core'
import { Work as WorkIcon,NotificationsNone as NotificationsNoneIcon, Language as LanguageIcon, Settings as SettingsIcon } from '@material-ui/icons'

const useStyles= makeStyles((theme)=>({
   
    grow:{
        flexGrow:1,
    },
    appBar:{
      position: 'fixed',
      top: 0,
      backgroundColor: '#F8F9FA',
    },

    listItem:{
        padding: '0px 8px 0px',

    },
    
    avatar: {
        height: theme.spacing(4),
        width: theme.spacing(4),
    },
    paperButton:{
        textTransform: 'none',
        textAlign:'left',
    },
  
   
}));



function Topbar() {

    const classes= useStyles();
    const [anchorEl , setAnchorEl]= useState(null);


    return (
        <AppBar className={classes.appBar} elevation={0} shadow='none' >
            <Toolbar>
                <div className={classes.grow} />

                <Avatar className={classes.avatar}> V</Avatar>

                <Button className={classes.paperButton} size="small" variant="text">logout</Button>
                
                <IconButton >
                     <SettingsIcon  />
                </IconButton>

                
                <IconButton
                    aria-controls="notification"
                    onClick={(event) =>{
                        setAnchorEl(event.currentTarget)
                    }}
                >
                    <Badge badgeContent={4} color='secondary' >
                        <NotificationsNoneIcon  />
                    </Badge>
                </IconButton>
                <Menu
                    id="notification"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical:'bottom',
                        horizontal:'bottom'
                    }}
                    transformOrigin={{
                        vertical:'top',
                        horizontal:'right'
                    }}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={()=> setAnchorEl(null)}
                    
                >         
                <MenuItem className={classes.listItem}>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>

                    <ListItemText primary="You have a new order" secondary="Today, 11:53 PM" />
                </MenuItem>

                <MenuItem className={classes.listItem}>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>

                    <ListItemText primary="You have a new order" secondary="Today, 11:53 PM" />
                </MenuItem>
                </Menu>

               
                
            </Toolbar>


        </AppBar>
        // <TopBar >
        //     <TopLeft>
        //         <Logo>KathyFoods</Logo>
        //     </TopLeft>
                
        //     <TopRight>
     
        //         <Notification/>


        //         <IconBadge >
        //             <LanguageIcon />
        //         </IconBadge>

        //         <IconBadge >
        //             <SettingsIcon />
        //         </IconBadge>

 
        //         <AvatarIcon src='https://media.gettyimages.com/photos/beautiful-young-girl-picture-id574253449'/>
                

        //     </TopRight>
            
        // </TopBar>
    )
}

export default Topbar


// import React from "react";
// // @material-ui/core components
// // @material-ui/icons components

// // core components
// import NotificationsDropdown from "components/Dropdowns/NotificationsDropdown.js";

// export default function Example() {
//   return (
//     <>
//       <NotificationsDropdown />
//     </>
//   );
// }