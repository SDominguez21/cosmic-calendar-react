import React from 'react';
// import Moment from 'react-moment';

function ForcastDetails(props){

    if(props.ready){

        const EntireForcast = props.listOfForcasts.find((eachForcast)=>{
            return eachForcast._id === props.match.params.id
        })


    return(

        <div>

          <h1>Forcast Info</h1>

            <h1>{EntireForcast.weather}</h1>

            {/* <h3>{EntireForcast.}</h3>

            <h6>{EntireForcast}</h6>

            <p>: {EntireForcast}</p>

            <p>: {EntireForcast}</p>
            <p>: {EntireForcast}</p> */}
        </div>
        )
    } else{
        return(<h1>Loading...</h1>)
    }
}
export default ForcastDetails;