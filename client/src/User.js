import React from "react";

const User = props => {
  return (
    <div className="user">
      <h2>{props.user.username}</h2>
      <p>{props.user.password}</p>
    </div>
  );
};

export default User;
