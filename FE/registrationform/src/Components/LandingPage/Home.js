import React,{useEffect,useState} from 'react';


import Map from './Map'
import axios from "axios";

import styled from "styled-components"
import AxiosWithAuth from "./AxiosWithAuth"

const Sap = styled.div`
font-family: sans-serif;
text-align: center;
height: 100%;
background-image: url("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
background-size: cover;
background-position: center center;
background-repeat: none;`

const Home = () => {
  // const [starwarsChars, setChars] = useState()
  
  localStorage.getItem("token")
    const [data, setData] = useState({});
    
localStorage.getItem('token')
    // useEffect(() => {
    //   setToken(localStorage.getItem('token'))
    //   console.log('test')
    // }, [token]);
    const [secretData, setSecretData] = useState([]);
    function setRestricted(res) {
      setSecretData(res);
    }
    useEffect(() => {
      AxiosWithAuth()
        .get("http://localhost:4000/restricted/data")
        .then(res => {
          console.log(res);
          setRestricted(res.data);
        })
        .catch(err => console.log(err));
    }, []);
    // const fetchData = () => {
    //   axios.get(`http://localhost:4000/api/restricted/data`)
    //   .then(res => {
    //     console.log(res.data);
    //     setData(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // }
  
    // useEffect(fetchData, [localStorage.getItem('token')]);
  console.log(data,"data")

  return(
    <div>
 <Sap className="App">
         <h1>Private route</h1>
         <Map data={secretData} />
         <div>
          {secretData.map(food => (
              <div>
                <h2>Name:{food.name}</h2>
                <p>Course:{food.course}</p>
                <div>
                  Technique: {food.technique}
                </div>
              
            </div>
          ))}
        </div>
        

       </Sap>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       starwarsChars: []
//     };
//   }

//   componentDidMount() {
//     this.getCharacters("https://build-week-tess.herokuapp.com/planets/");
//   }
//'https://swapi.co/api/people'
//   getCharacters = URL => {
//     // feel free to research what this code is doing.
//     // At a high level we are calling an API to fetch some starwars data from the open web.
//     // We then take that data and resolve it our state.
//     fetch(URL)
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         this.setState({ starwarsChars: data.results });
//       })
//       // .catch(err => {
//       //   throw new Error(err);
//       // });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1 className="Header">React Wars</h1>
//         <ChararcterList starwarsChars={this.state.starwarsChars} />
        

//       </div>
//     );
//   }
// }




export default Home;