import React, { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./DataCard";

const DataFetch = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        setFood(res.data);
        console.log("state test:", res.data);
      })
      .catch(err => console.error("catch me", err));
  }, []);

  return (
    <div className="data-box">
      <h2>Food Stuffs</h2>

      <div className="cardContainer">
        {food.map(foo => {
          return <DataCard key={foo.name} foo={foo} />;
        })}

        {/* {food.map(foo => (
          <div className="cards" key={foo.name}>
            <h3>{foo.name}</h3>
            <p>{foo.course}</p>
            <p>{foo.technique}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default DataFetch;
