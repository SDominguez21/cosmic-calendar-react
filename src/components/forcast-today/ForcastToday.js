import React from 'react';
// import Moment from 'react-moment';
import {Link} from 'react-router-dom';


function ForcastToday(props){
  console.log(props.tide)
    return(
        <div>
            This is today's forcast component
  
            {/* <h2>{props.tide.place}</h2>
            <h6>{props.tide.type}</h6>
            <p>{props.tide.heightFT}</p> */}
            <Link to ={"/forcast-details/"+props.forcast._id}> See Details </Link>
        </div>
    )
}



export default ForcastToday;