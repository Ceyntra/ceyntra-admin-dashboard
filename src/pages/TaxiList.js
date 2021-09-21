import React, {useState, useEffect} from 'react';
import axios from "../service/axios";
import '../css/hotelList.css';
import FilterSearchBar from '../components/FilterSearchBar';

function TaxiList() {
    const [driverList, setDriverList] = useState([])

    const [searchedWord, setSearchedWord]=useState("");
    const [searchedResult, setSearchedResult] = useState([]);

    const filterHandler=(term)=>{
        if(term !== ""){
            setSearchedWord(term.toLowerCase());
            const newDriverList= driverList.filter((driver) =>{
                return driver['name'].toLowerCase().startsWith(term)
            })
            setSearchedResult(newDriverList);
        }else{
            setSearchedResult(driverList);
        }
    }

    var getDriverDetails = () => {
        axios.get(`/getDriverBriefDetails`).then((result) => {
          setDriverList(result.data);
          setSearchedResult(result.data);
        });
    };
    
    useEffect(() => {
        getDriverDetails();
    }, []);

    return(
        <div className="table-content">
            {
                driverList.length==0 
                    ? <h1>No drivers to be desplayed yet...</h1>
                    : 
                    <div>
                        <FilterSearchBar
                            filterFunction={filterHandler}
                            term={searchedWord}
                            word='driver'
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>DRIVER</th>
                                    <th>TELEPHONE</th>
                                    <th>EMAIL</th>
                                    <th>DISTRICT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchedResult.map((driver) => (
                                    <tr key={driver['id']}>
                                        <td>{driver['name']}</td>
                                        <td>{driver['userContactModel']['telephone']}</td>
                                        <td>{driver['userContactModel']['email']}</td>
                                        <td>{driver['district']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
}

export default TaxiList;