import React from 'react';
// import Moment from 'react-moment';
import {Link} from 'react-router-dom';


function ForcastToday(props){
  console.log(props.weather)
    return(
        <div>
            This is today's forcast component
            <h2>{props.weather.weather}</h2>
            <h6>{props.weather.maxTempF}</h6>
            {/* <p>{props.weather.}</p> */}
            <Link to ={"/forcast-details/"+props.forcast._id}> See Details </Link>
        </div>
    )
}



export default ForcastToday;