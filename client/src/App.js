import React, {useState, useEffect} from 'react';
import './App.css';
import UserForm from './components/UserForm'
import DisplayFood from './components/DisplayFood'
import axios from 'axios';

function App() {
  const [foods, setFoods] = useState([])
  useEffect( () => {
          axios.get(`http://localhost:5000/api/restricted/data`)
          .then(res => {
              console.log(res.data);
              setFoods(res.data);
          })
          .catch(error => {
              console.log('GET Error', error)
          })
  
     }, [setFoods])
    return (
      <div className="App">
        <UserForm />
        {foods.map((food, index) => <DisplayFood key={index} food={food}/>)}
      </div>
    );
}

export default App;
