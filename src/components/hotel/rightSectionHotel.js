import '../../css/rightSectionHotel.css';

import placePic from '../../assets/images/h4.jpg';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function RightSectionHotel(){
    return(
        <div className="topRatedHotel">
            <div>
              <Box component="fieldset" mb={0} borderColor="transparent">
                <Typography component="legend">Jetwing Hotel</Typography>
                <Rating name="read-only" value='2' readOnly />
              </Box>
            </div>
            <div>
              <img src={placePic} width='60px' height='60px' />
            </div>
        </div>
    );
}

export default RightSectionHotel;