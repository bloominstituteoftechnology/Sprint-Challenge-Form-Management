import React from 'react'



 function Items(props){
     return(
         <div >
             <div className = "StarInfo">
                 <p><strong>Name: </strong>{props.item.name}</p>
                 <p><strong>Course: </strong>{props.item.course}</p>
                 <p><strong>Technique: </strong>{props.star.technique}</p>
                
            </div>
         </div>
     )
 }
 export default Items;