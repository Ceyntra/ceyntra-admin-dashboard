import React from 'react'
import {makeStyles,withStyles,TextField,InputAdornment,InputBase} from '@material-ui/core'
import { Search} from '@material-ui/icons'
import "../../css/traveller.css";


function SearchTraveller() {
    return (
        <div>
                <form  noValidate autoComplete="off" >
                    <InputBase id="outlined-basic"  variant="outlined" placeholder="Search email"  size="small" fullWidth 
                        startAdornment= {
                            <InputAdornment position="start">
                              <Search />
                            </InputAdornment>
                        }
                    />
                </form>
        </div>
    )
}

export default SearchTraveller;
