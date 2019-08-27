import React from 'react';
import Recipe from './Recipe.js'

const Data = (props) => {
    return (
        <div>
            {props.data.map((point, index) => (
                <Recipe key={index} name={point.name} course={point.course} technique={point.technique}/>
            ))}
        </div>
    )
}

export default Data;