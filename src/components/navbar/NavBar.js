import React, {useState} from 'react'
import {List,ListItem,Divider,ListItemIcon, makeStyles } from '@material-ui/core'
import CeyntraLogo from '../../ceyntra1.png'
import menuItems from './MenuItems';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBarWrapper=styled.div `
   
    height: 90%;
    width: 250px;
    position: fixed;
    top: 70px;
    margin-left: 10px;
    border-radius: 20px;
    background-color: #ffffff;
    font-size: 14px;
    box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
    -webkit-box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
    -moz-box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
`

const ItemIcon=styled.div `
    margin: 0;
    padding: 3px;
    border-radius: 8px; 
    box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
    -webkit-box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
    -moz-box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);

`
const NavItem =styled(ListItem)`
    height: 50px;
    margin: 10px 0px !important;
    color: #67748E;
`
const AvatarIcon = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
    vertical-align: middle;
    border-radius: 50%;   
    background-color : black ;
`

const useStyles = makeStyles({
  
    active:{
        backgroundColor: '#CB0C9F',
        color: 'white',
        transform: 'scale(0.8)',

    },
    activeText:{
        color: '#252F40',
    },
    icon:{
        color: 'black',
        transform: 'scale(0.8)',
    },
    routerLink:{
        textDecoration: 'none',
        color: 'inherit',
    }
});


function NavBar({url}) {

    const classes = useStyles();
    const [path, setPath] = useState(url);

    return (
        <SideBarWrapper>
        <ListItem >
            <AvatarIcon color='black' src={CeyntraLogo}/>
                Ceyntra Dashboard
            </ListItem>
            <Divider/>

        <List component="nav" aria-label="main mailbox folders">
            { 
                menuItems.slice(0,menuItems.length-1).map((item,index)=>(
                <Link className={classes.routerLink} to={item.link}>
                 <NavItem  button key={index} onClick={(e)=>{
                        setPath(item.link);
                    }}>
                    <ListItemIcon>
                        <ItemIcon className={ path == item.link ? classes.active : classes.icon }>
                            {item.icon}
                        </ItemIcon>
                    </ListItemIcon>
                    <span className={ path == item.link  ? classes.activeText : null} > {item.title} </span>
                 </NavItem>
                 </Link>
                ))
            }

            <ListItem >
                {'Account Pages'.toUpperCase()}
            </ListItem>
            <Divider/>
            <Link className={classes.routerLink} to={menuItems[menuItems.length-1].link}>
            <NavItem button  key={menuItems.length-1} onClick={(e)=>{
                        setPath(menuItems[menuItems.length-1].link);
                    }}>
                <ListItemIcon>
                    <ItemIcon className={ path == menuItems[menuItems.length-1].link ? classes.active : classes.icon}>
                        {menuItems[menuItems.length-1].icon}
                    </ItemIcon>
                </ListItemIcon>
                <span className={ path == menuItems[menuItems.length-1].link ? classes.activeText : null} > {menuItems[menuItems.length-1].title} </span>
            </NavItem>
            </Link>
        </List>
    </SideBarWrapper>

    )
}

export default NavBar
