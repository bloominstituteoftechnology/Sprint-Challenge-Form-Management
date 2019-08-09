import React from 'react';
import UserCard from './UserCard';
class UserInfo extends React.Component {
  constructor(props){
    super(props)
   
  }
  
  render(){
    console.log(this.props.userData)
  return (
    <div className="App">
    {this.props.userData.map((item,index)=>{
        return <UserCard key={index} name={item.name} technique={item.technique}/>
    })}
    </div>
  );
}
}
export default UserInfo;
