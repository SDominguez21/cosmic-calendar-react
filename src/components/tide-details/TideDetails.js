import React from 'react';


function TideDetails(props){

    if(props.ready){

        const theActualTide = props.listOfTideEvents.find((eachTide)=>{
            return eachTide._id === props.match.params.id
        })


    return(

        <div>

          <h1>Tide Info</h1>

            {/* <h1>{theActualTide}</h1>

            <h3>{theActualTide}</h3>

            <h6>{theActualTide}</h6>

            <p>: {theActualTide}</p>

            <p>: {theActualTide}</p>
            <p>: {theActualTide}</p> */}
        </div>
        )
    } else{
        return(<h1>Loading...</h1>)
    }
}
export default TideDetails;