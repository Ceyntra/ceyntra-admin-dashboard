import classes from '../../css/provinceButton.module.css';

function ProvinceButton(props){
    return(
        <div className={classes.hotelsSection}>
            {props.provinces.map((province) => (
                <button>{province}</button>
            ))}
        </div>
    );
    
}

export default ProvinceButton;