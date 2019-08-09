import React from 'react'

const FoodCard = ({ food }) => {
    return (
        <div>
            <h2>{food.name}</h2>
            <p>Course: {food.course}</p>
            <p>Technique: {food.technique}</p>
            <div>
                Ingredients:
                {food.ingredients.map(ing => (
                    <span> {ing},</span>
                ))}
            </div>
        </div>
    )
}

export default FoodCard