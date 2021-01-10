import React from 'react';

function Dinner(props)
{
    return(
        <div>
        <h1 style={{color: "red"}}>We are surving {props.Dishes}</h1>
        <h1 style={{color: "green"}} style={{fontFamily: "sans-serif"}}>WE are also serving {props.sweet}</h1>
        
        </div>
    )
}

export default Dinner;