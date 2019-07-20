import axios from 'axios';


// helper function that sets authorization header to the token value and returns axios object
export const axiosWithAuth = (token) => {
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};