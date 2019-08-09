import React from 'react';

function DisplayFood({food}) {
    return (
        <div>
            <h2>{food.name}</h2>
            <p>{food.course}</p>
            <p>{food.technique}</p>
            <p>{food.ingredients}</p>
        </div>
    )
}

export default DisplayFood;