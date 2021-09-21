import React, {useState, useEffect} from 'react';
import axios from "../service/axios";
import NewRequestHotel from "../components/hotel/newRequestHotel";
import '../css/request.css';
import NewRequestTaxi from '../components/taxi/newRequestTaxi';

function Requests(props){
    const { data } = props.location.state;
    const { newCount } = props.location.state;

    const [requestList, setRequestList] = useState([]);

    var getHotelRequests = () => {
        axios.get(`/getNewRequests/${data}`).then((result) => {
            setRequestList(result.data);
        });
    };
    
    useEffect(() => {
        if(newCount!=0){
            getHotelRequests();
        }
    }, []);

    if(data==1){
        return(
            <div className="request-content">
                {
                    requestList.length==0 
                        ? <h2>No new requests to be displayed yet...</h2>
                        : requestList.map((hotelRequest) => (
                            <NewRequestHotel 
                                id={hotelRequest['userAndHotelModel']['hotel']['hotel_id']}
                                name={hotelRequest['userAndHotelModel']['hotel']['name']}
                                district={hotelRequest['userAndHotelModel']['hotel']['district']}
                                register={hotelRequest['userAndHotelModel']['hotel']['registration_number']}
                                photo={hotelRequest['userAndHotelModel']['hotel']['profile_photo']}
                                email={hotelRequest['userAndHotelModel']['contact']['email']}
                                telephone={hotelRequest['userAndHotelModel']['contact']['telephone']}
                            >
                            </NewRequestHotel>
                        ))
                }
            </div>
        );
    }else if(data==2){
        return(
            <div className="request-content">
                {
                    requestList.length==0 
                        ? <h2>No new requests to be displayed yet...</h2>
                        : requestList.map((taxiRequest) => (
                            <NewRequestTaxi 
                                id={taxiRequest['userAndTaxiModel']['taxiDriver']['taxi_driver_id']}
                                name={taxiRequest['userAndTaxiModel']['taxiDriver']['first_name']+' '+taxiRequest['userAndTaxiModel']['taxiDriver']['last_name']}
                                district={taxiRequest['userAndTaxiModel']['taxiDriver']['district']}
                                license={taxiRequest['userAndTaxiModel']['taxiDriver']['driver_license']}
                                photo={taxiRequest['userAndTaxiModel']['taxiDriver']['profile_photo']}
                                price={taxiRequest['userAndTaxiModel']['taxiDriver']['per_km_price']}
                                email={taxiRequest['userAndTaxiModel']['contact']['email']}
                                telephone={taxiRequest['userAndTaxiModel']['contact']['telephone']}
                            >
                            </NewRequestTaxi>
                        ))
                }
            </div>
        );
    }else{
        return(
            <div>hghg</div>
        );
    }
}

export default Requests;