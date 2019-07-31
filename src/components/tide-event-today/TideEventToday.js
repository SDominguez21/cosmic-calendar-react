import React from 'react';
// import {Link} from 'react-router-dom';


function TideEventToday(props){
  console.log(props.tide)
    return(
        <div>
            This is today's tide event component
  
            {/* <h2>{props.tide.place}</h2>
            <h6>{props.tide.type}</h6>
            <p>{props.tide.heightFT}</p> */}
            <Link to ={"/tide-details/"+props.tide._id}> See Details </Link>
        </div>
    )
}



export default TideEventToday;