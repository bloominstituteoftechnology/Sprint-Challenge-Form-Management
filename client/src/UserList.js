import React from "react";
import Form from "./Form";
import User from "./User";

const UserList = props => {
  return (
    <div className="user-list">
      {props.users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
