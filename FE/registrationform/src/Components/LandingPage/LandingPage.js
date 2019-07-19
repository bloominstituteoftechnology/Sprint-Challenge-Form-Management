import React from 'react';


import Map from './Map'
import axios from "axios";

class LandingPage extends React.Component {
  constructor(){
    super();
    this.state = {
      state: []
    };
  }
  
  componentDidMount(){
    console.log("inside ComponentDIdMOunt2");
    this.getStar();
  }
  getStar = URL => {
    axios.get(`http://localhost:6000/api/restricted/data`)
       .then(res => {
         console.log(res.data);
         this.setState({state: res.data})
       })
       .catch(err =>{
         console.log(err);
       })


  };
    render(){
      return (
         <div>
          
            <Map state ={this.state.state}/>
           
        </div>
  );
  }
}

export default LandingPage;