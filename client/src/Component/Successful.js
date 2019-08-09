import React from 'react';

export default function Successful(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.location.state.message}</h1>
        </div>
    )
}