import React from 'react';

const DisplayComponent = (props) => {

    return( 
    <span>
        <div key={props.results}>
            <p>{props.results}</p>
        </div>
    </span>
     )
}

export default DisplayComponent