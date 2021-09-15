import React, {useState,useEffect} from 'react'
import {TableContainer,Grid, Table,TableHead,TableCell,TableBody,TableRow,Paper, makeStyles, Container } from '@material-ui/core'
import styled from 'styled-components';
import ProfileTableView from '../components/ProfileTableView';
import TravellerActivities from '../components/TravellerActivities';
import "../css/traveller.css";


function Traveller() {

    const [activeIndex, setactiveIndex]=useState(0);
    const [activityList,setactivityList]=useState([]);

    return (
        <div className="container">

            {/* Traveller List */}
            <div  className="tile">
                <TableContainer>
                    <Table  aria-label="simple table">
                        <TableHead>
                        <TableRow >
                            <TableCell align='center'>TRAVELLER</TableCell>
                            <TableCell align='center'>NIC/PASSPORT</TableCell>
                            <TableCell align='center'>CONTACT</TableCell>
                            <TableCell align='center'>COUNTRY</TableCell>
                            <TableCell align='center'>STATUS</TableCell>
                        </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow selected={true }>
                                <TableCell align='center'><ProfileTableView imageUrl="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" username="Michal John" useremail="micheal@gmail.com" /></TableCell>
                                <TableCell align='center'>7529964030V</TableCell>
                                <TableCell align='center'>+947529960</TableCell>
                                <TableCell align='center'>SriLanka</TableCell>
                                <TableCell align='center'>Active</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell align='center'><ProfileTableView imageUrl="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" username="Michal John" useremail="micheal@gmail.com" /></TableCell>
                                <TableCell align='center'>7529964030V</TableCell>
                                <TableCell align='center'>+947529960</TableCell>
                                <TableCell align='center'>SriLanka</TableCell>
                                <TableCell align='center'>Active</TableCell>
                            </TableRow>
                        
                       
                            
                        {/* {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))} */}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </div>
                    
                    {/* Details of a traveller */}
                    <div className="tile" >
                        <TravellerActivities />
                    </div>

        </div>
    )
}

export default Traveller
