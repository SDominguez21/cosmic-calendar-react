import React from 'react'
import TideEventToday from './tide-event-today/TideEventToday';


export default function AllTide(props){
    const list = props.listOfTideEvents;

    const showTideEvents = () =>{
        return list.map((eachTideEvent, i)=>{
            return <TideEventToday key={i} beer = {eachTideEvent} />
        })
    }


    if(props.ready)
    return(
        <div>
        {showTideEvents()}
        </div>
    ) 
    else
    return(<h1>Loading ...</h1>)
}