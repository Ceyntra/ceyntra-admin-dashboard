import React, {useRef} from 'react';
import { Search} from '@material-ui/icons'

function FilterSearchBar(props) {
    const inputEl=useRef();

    const getSearchedWord=()=>{
        const string=inputEl.current.value;
        props.filterFunction(string);
    }

    return(
        <div className="filter-bar">
            <div >
                <Search  />
            </div>  
            <form noValidate autoComplete="off" >
                <input classname="input-field" type="text" id="outlined-basic"  variant="outlined" placeholder={'Search '+props.word+' here...'}  size="small" fullWidth 
                    onChange={getSearchedWord}
                    ref={inputEl}
                />
            </form>
        </div>
    );
}

export default FilterSearchBar;