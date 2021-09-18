import {TableContainer, Table,TableHead,TableCell,TableBody,TableRow,Paper, makeStyles, Container } from '@material-ui/core'
import ProfileTableView from '../ProfileTableView';
import React,{useRef,useEffect}  from 'react'

function TravellerRow({userID,image,name,email,nic,telephone,country,isLoggedIn,active,activeItem}) {

    const inputEl=useRef();



    const activeRow=()=>{
        console.log(inputEl.current.id);
        active(inputEl.current.id,image,name,email);

    }

    return (
        <TableRow id={userID} key={userID} onClick={activeRow} ref={inputEl} b>
            <TableCell align='center'><ProfileTableView imageUrl={image} username={name} useremail={email} /></TableCell>
            <TableCell align='center'>{nic}</TableCell>
            <TableCell align='center'>{telephone}</TableCell>
            <TableCell align='center'>{country}</TableCell>
            <TableCell align='center'>{isLoggedIn == 0 ? 'Online' : 'Offline'}</TableCell>
        </TableRow>
    )
}

export default TravellerRow
