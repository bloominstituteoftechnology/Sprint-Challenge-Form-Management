import React from 'react';

class UserCard extends React.Component {
  constructor(props){
    super(props)
   
  }
  
  render(){
   
  return (
    <div>
   <h1>
       {this.props.name}
   </h1>
   <h2>
       {this.props.technique}
   </h2>
    </div>
  );
}
}
export default UserCard;