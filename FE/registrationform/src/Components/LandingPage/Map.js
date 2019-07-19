import React from 'react';
import Items from "./Items"
function Map(props){
    return (
        <div className = "starList-wrapper">
{props.state.map(ele => {
     return <Items item ={ele}/> 
 })}

        </div>
    )
}
export default Map;