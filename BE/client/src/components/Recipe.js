import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useStoredLocalVal } from '../hooks/useStoredLocalVal';


export default function Recipe() {
    const [data, setData] = useState([]);
    //  initializing state object for storing recipe data
    const [token] = useStoredLocalVal('token')
    //  retrieving value of key 'token' from local storage and setting to React state variable token


    //  useEffect executed on first render, makes a request to backend to retrieve recipe data
    useEffect(() => {
        // axiosWithAuth retrieves axios object with preset authorization header
        // then makes request to backend to get restricted recipe data
        // then sets recipe data to React state object data to be mapped over and displayed on screen
        axiosWithAuth(token)
        .get('http://localhost:5000/api/restricted/data')
        .then(response => {
            setData(response.data)
        })
        .catch(error => console.error('Error!', error))
    // eslint-disable-next-line
    }, [])
    
    // maps over individual recipes and displays on screen
    return (
        <div>
            {data.map((recipe) => (
                <div>
                    <h1>{recipe.name}</h1>
                    <h2>{recipe.course}</h2>
                    <h3>{recipe.technique}</h3>
                    <p>{recipe.ingredients}</p>
                </div>
            ))}
        </div>
    )
}

