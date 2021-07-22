import '../../css/statcard.css';

function StatCard(props){
    return(
        <div className="card">
          <div>
            <p>{props.text}</p>
            <p className="heading">{props.count}</p>
          </div>
          <div className="iconCard">
            {props.icon}
          </div>
        </div>
    );
}

export default StatCard;