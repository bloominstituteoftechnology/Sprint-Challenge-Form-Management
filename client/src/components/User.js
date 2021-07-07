import React from 'react';

 const User = ({ food }) => {
  return (
      
    <div className= "user-cards">
      <h2>{food.name}</h2>
      <p>Meal: {food.course}</p>
    </div>
  );
};

 export default User;