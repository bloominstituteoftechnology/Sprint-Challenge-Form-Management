import React from 'react';

 const User = ({ user }) => {
  return (
      
    <div className= "user-cards">
      <h2>{user.name}</h2>
      <p>Name: {user.name}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

 export default User;