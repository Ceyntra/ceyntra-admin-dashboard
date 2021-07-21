import classes from '../../css/newRequestPlace.module.css';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ForwardIcon from '@material-ui/icons/Forward';
import placePic from '../../assets/images/h4.jpg';

function NewRequestPlace(){
    return(
        <div className={classes.newRequestItem}>
            <div>
              Place Name:  <br />
              Added By: <br />
              Added Date: <br />
            </div>
            <div>
              Thalpe Beach  <br />
              N.K.Perera <br />
              2021.05.23 <br />
            </div>
            <div>
              <img src={placePic} width='60px' height='60px' />
            </div>
            <div>
              <CheckCircleIcon style={{color:"green"}}></CheckCircleIcon> Approve <br />
              <DeleteForeverIcon style={{color:"red"}}></DeleteForeverIcon> Delete <br />
            </div>
            <div className={classes.forwardIcon}>
              <ForwardIcon></ForwardIcon>
            </div>
        </div>
    );
}

export default NewRequestPlace;