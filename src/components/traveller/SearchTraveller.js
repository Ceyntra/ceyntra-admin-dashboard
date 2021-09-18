import React, {useRef} from 'react'
import {makeStyles,withStyles,TextField,InputAdornment,InputBase} from '@material-ui/core'
import { Search} from '@material-ui/icons'
import "../../css/traveller.css";


function SearchTraveller(props) {

    const inputEl=useRef();

    const getSearchTerm=()=>{
        const str=inputEl.current.value;
        props.searchFunction(str);
    }

    return (
        <div className="searchComponent" >
            <div >
                <Search  />
            </div>  
            <form noValidate autoComplete="off" >
                <input className="searchInput" id="outlined-basic"  variant="outlined" placeholder="Search email"  size="small" fullWidth 
                    onChange={getSearchTerm}
                    ref={inputEl}
                />
            </form>
        </div>
    )
}

export default SearchTraveller;
