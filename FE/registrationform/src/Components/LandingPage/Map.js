import React from 'react';
import Items from "./Items"
function Map(props){
    if(props.data.length === 0){
        return (<p>Loading</p>)
    }
    return (
        <div>
 {//props.data && props.data.map(ele => {
//       return <Items data ={ele}/> 
  })}

        </div>
    )
}
export default Map;