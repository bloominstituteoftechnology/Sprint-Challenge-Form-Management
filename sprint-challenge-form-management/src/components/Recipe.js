import React from 'react';

const Recipe = (props) => {
    return(
        <div>
            <h1>Recipe</h1>
            <h2>{props.name}</h2>
            <h2>{props.course}</h2>
            <h2>{props.technique}</h2>
        </div>
    )
}

export default Recipe;