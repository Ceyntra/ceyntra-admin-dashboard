import React from "react";
import "../App.css";
import "../css/hotel.css";
import beach from "../assets/images/beach.jpeg";

function Hotel() {
  return (
    <div>
      <div className = "hotel1">
        <div className = "hotel1maintopic">
          <h3>Hotels with complains</h3>
        </div>
        <div className = "hotel1left">
          <table className = "hotel1table">
            <tr>
              <td className = "hotel1tabletopic">Place Name</td>
              <td>Thalpe Beach</td>
            </tr>
            <tr>
              <td className = "hotel1tabletopic">Added by</td>
              <td>N.M. Perera</td>
            </tr>
            <tr>
              <td className = "hotel1tabletopic">Added date</td>
              <td>2021.07.04</td>
            </tr>
          </table>
          <img className="beach-img" src={beach} alt="" srcset="" height="110px" width="110px"/>
        </div>
        <div className = "hotel1right">
        <table className = "hotel1table">
            <tr>
              <td className = "hotel1tabletopic">Place Name</td>
              <td>Thalpe Beach</td>
            </tr>
            <tr>
              <td className = "hotel1tabletopic">Added by</td>
              <td>N.M. Perera</td>
            </tr>
            <tr>
              <td className = "hotel1tabletopic">Added date</td>
              <td>2021.07.04</td>
            </tr>
          </table>
          <img className="beach-img" src={beach} alt="" srcset="" height="110px" width="110px"/>
        </div>
        <div className = "hotel1left">
        <table className = "hotel1table">
            <tr>
              <td className = "hotel1tabletopic">Place Name</td>
              <td>Thalpe Beach</td>
            </tr>
            <tr>
              <td className = "hotel1tabletopic">Added by</td>
              <td>N.M. Perera</td>
            </tr>
            <tr>
              <td className = "hotel1tabletopic">Added date</td>
              <td>2021.07.04</td>
            </tr>
          </table>
          <img className="beach-img" src={beach} alt="" srcset="" height="110px" width="110px"/>
          
        </div>
        <div className = "hotel1right">
        <table className = "hotel1table">
            <tr>
              <td className = "hotel1tabletopic">Place Name</td>
              <td>Thalpe Beach</td>
            </tr>
            <tr>
              <td className = "hotel1tabletopic">Added by</td>
              <td>N.M. Perera</td>
            </tr>
            <tr>
              <td className = "hotel1tabletopic">Added date</td>
              <td>2021.07.04</td>
            </tr>
          </table>
          <img className="beach-img" src={beach} alt="" srcset="" height="110px" width="110px"/>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
