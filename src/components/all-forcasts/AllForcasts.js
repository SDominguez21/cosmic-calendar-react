import React from 'react';
import {Link} from 'react-router-dom';
import ForcastToday from '../forcast-today/ForcastToday';


export default function AllForcasts(props){
    const list = props.listOfForcasts;

    const showForcasts = () =>{
        return list.map((eachForcast, i)=>{
            return <ForcastToday key={i} forcast = {eachForcast} />
        })
    }


    if(props.ready)
    return(
        <div>
        {showForcasts()}
        </div>
    ) 
    else
    return(<h1>Loading ...</h1>)
}