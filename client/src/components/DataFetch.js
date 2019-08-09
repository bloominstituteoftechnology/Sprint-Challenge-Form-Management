// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import DataCard from "./DataCard";

// export default function DataFetch() {
//   const [food, setFood] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/restricted/data")
//       .then(res => {
//         console.log("food data:", res.data);
//         setFood(res.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <section className="food-container">
//       {food.map(tasty => {
//         return <DataCard key={tasty.id} tasty={tasty} />;
//       })}
//     </section>
//   );
// }
