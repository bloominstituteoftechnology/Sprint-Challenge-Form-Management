import React, { useState, useEffect } from "react";
import { Card } from 'semantic-ui-react';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css';
import '../styles.css';



function Display({ token }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let config = {
            headers: {
                Authorization: token,
            }
        }

        axios.get('http://localhost:5000/api/restricted/data', config)
            .then(res => {
                console.log(res);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [token]);

    return (
        <div className="cards">
            {data.map(item => {
                return (
                    <Card>
                        <Card.Content>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Meta>{`Course: ${item.course || 'N/A'}`}</Card.Meta>
                            <Card.Meta>{`Technique: ${item.technique || 'N/A'}`}</Card.Meta>
                        </Card.Content>
                    </Card>)
                   
            })}
        </div>
    )
}

export default Display;