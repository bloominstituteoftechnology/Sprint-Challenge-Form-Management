import {useState} from 'react';

export function useStoredLocalVal(key) {
    // useState hook is being used to hook into local storage 
    
    // Getting value from local storage that exists at the key and setting the React state
    // object storedLocalVal default value to value pulled from local storage

    const [storedLocalVal, setStoredLocalVal] = useState(localStorage.getItem(key));

    // Setter function similar to the useState hook that sets the local storage value and 
    // updates react state to reflect local storage.
    const setStoredVal = (key, value) => {
        localStorage.setItem(key, value);
        setStoredLocalVal(value)
    }

    // returning react state variable with setter function so you can call setter function to
    // update local storage value. It is returned as an array to allow multiple returned vals.
    return [storedLocalVal, setStoredVal]
};