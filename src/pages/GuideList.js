import React, {useState, useEffect} from 'react';
import axios from "../service/axios";
import '../css/hotelList.css';
import FilterSearchBar from '../components/FilterSearchBar';

function GuideList() {
    const [guideList, setGuideList] = useState([])

    const [searchedWord, setSearchedWord]=useState("");
    const [searchedResult, setSearchedResult] = useState([]);

    const filterHandler=(term)=>{
        if(term !== ""){
            setSearchedWord(term.toLowerCase());
            const newGuideList= guideList.filter((guide) =>{
                return guide['name'].toLowerCase().startsWith(term)
            })
            setSearchedResult(newGuideList);
        }else{
            setSearchedResult(guideList);
        }
    }

    var getGuideDetails = () => {
        axios.get(`/getGuideBriefDetails`).then((result) => {
          setGuideList(result.data);
          setSearchedResult(result.data);
        });
    };
    
    useEffect(() => {
        getGuideDetails();
    }, []);

    return(
        <div className="table-content">
            {
                guideList.length==0 
                    ? <h1>No guides to be desplayed yet...</h1>
                    : 
                    <div>
                        <FilterSearchBar
                            filterFunction={filterHandler}
                            term={searchedWord}
                            word='guide'
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>GUIDE</th>
                                    <th>TELEPHONE</th>
                                    <th>EMAIL</th>
                                    <th>DISTRICT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchedResult.map((guide) => (
                                    <tr key={guide['id']}>
                                        <td>{guide['name']}</td>
                                        <td>{guide['userContactModel']['telephone']}</td>
                                        <td>{guide['userContactModel']['email']}</td>
                                        <td>{guide['district']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
}

export default GuideList;