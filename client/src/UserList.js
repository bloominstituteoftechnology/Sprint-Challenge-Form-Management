import React from "react";
import User from "./User";

const UserList = props => {
  return (
    <div className="user-list">
      {props.dataProp.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
