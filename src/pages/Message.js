import React, {useState,useEffect} from 'react'
import {TextField, makeStyles, Container,InputAdornment,TableContainer,Grid, Table,TableHead,TableCell,TableBody,TableRow,Paper} from '@material-ui/core'
import styled from 'styled-components';
import ProfileTableView from '../components/ProfileTableView';
import TravellerActivities from '../components/TravellerActivities';
import {Hotel, Search} from '@material-ui/icons'

const TableDiv=styled(TableContainer) `

    border-radius: 5px; 
    margin-bottom: 50px;
    max-height: 60vh;
    box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
    -webkit-box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
    -moz-box-shadow: -1px 9px 6px -4px rgba(189,177,177,0.62);
`


const useStyles= makeStyles({
    container:{
      border: "4px solid black",
      padding: "0px 40px 40px",
    
    },
    search:{
        padding: 0,
        margin: '0',
    }
})


function Message() {

    const classes = useStyles();

    return (
        <Container className={classes.container}>

            <div>
                <form  noValidate autoComplete="off" >
                    <TextField id="outlined-basic"  variant="outlined" placeholder="Search"  size="small"
                         InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Search />
                              </InputAdornment>
                            ),
                          }}
                    />
                </form>
            </div>

            <div>
            <TableDiv component={Paper}>
                    <Table  aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell align='center'><ProfileTableView imageUrl="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" username="Michal John" useremail="micheal@gmail.com" /></TableCell>
                                <TableCell align='left'>Hey there I'm using Ceyntra</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'><ProfileTableView imageUrl="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" username="Michal John" useremail="micheal@gmail.com" /></TableCell>
                                <TableCell align='left'>Hey there I'm using Ceyntra</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'><ProfileTableView imageUrl="https://image.shutterstock.com/z/stock-vector-african-bearded-man-wearing-t-shirt-hat-and-sunglasses-abstract-male-portrait-full-face-vector-1476685571.jpg" username="Michal John" useremail="micheal@gmail.com" /></TableCell>
                                <TableCell align='left'>Hey there I'm using Ceyntra</TableCell>
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
            </div>
            
        </Container>
    )
}

export default Message
