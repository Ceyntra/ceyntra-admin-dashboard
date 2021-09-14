import React, {useState,useEffect} from 'react'
import {TableContainer,Grid, Table,TableHead,TableCell,TableBody,TableRow,Paper, makeStyles, Container } from '@material-ui/core'
import styled from 'styled-components';
import ProfileTableView from '../components/ProfileTableView';
import TravellerActivities from '../components/TravellerActivities';

const TableDiv=styled(TableContainer) `

    border-radius: 5px; 
    margin-bottom: 50px;
    max-height: 60vh;
    overflow-y: scroll;
    box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
    -webkit-box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
    -moz-box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
`

const useStyles= makeStyles({
    container:{
    //   border: "4px solid black",
      padding: "0px 40px 40px",
    
    }
})


function Traveller() {

    const [activeIndex, setactiveIndex]=useState(0);
    const [activityList,setactivityList]=useState([]);

    const classes = useStyles();

    return (
        <Container className={classes.container}>

            {/* Traveller List */}
                <TableDiv component={Paper}>
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
                            <TableRow >
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
                            <TableRow >
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
                            <TableRow>
                            <TableCell align='center'><ProfileTableView imageUrl="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" username="Michal John" useremail="micheal@gmail.com" /></TableCell>
                                <TableCell align='center'>7529964030V</TableCell>
                                <TableCell align='center'>+947529960</TableCell>
                                <TableCell align='center'>SriLanka</TableCell>
                                <TableCell align='center'>Active</TableCell>
                            </TableRow>
                            <TableRow >
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
                            <TableRow >
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
                            <TableRow>
                            <TableCell align='center'><ProfileTableView imageUrl="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" username="Michal John" useremail="micheal@gmail.com" /></TableCell>
                                <TableCell align='center'>7529964030V</TableCell>
                                <TableCell align='center'>+947529960</TableCell>
                                <TableCell align='center'>SriLanka</TableCell>
                                <TableCell align='center'>Active</TableCell>
                            </TableRow>
                            <TableRow >
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
                            <TableRow >
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
                    </TableDiv>
              

       
                    
                    {/* Details of a traveller */}
                    <div>
                        <TravellerActivities />
                    </div>





  

        </Container>
    )
}

export default Traveller
