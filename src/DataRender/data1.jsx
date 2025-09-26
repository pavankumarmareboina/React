import React from "react";
import { useState, useEffect } from "react";
import App from "../App";
const Json = () => {
  const [data, setData] = useState([]);

   const API = "/data.json";
    const datacome = async () => {
      try {
        const respose = await fetch(API);
        const comeData = await respose.json();
        setData(comeData.content1);
      } catch (error) {
        console.error("Server Down...!!", error);
      }
    };
  useEffect(() => {
    datacome(API);
  }, []);

  return (
    <>
    <div>
      {data.map((items) => (
        <div key={items.id}>
          <p>{items.age}</p>
          <p>{items.number}</p>
          <img src={items.proof} alt='' />
          <p>{items.details}</p>
        </div>
      ))}
    </div>
    <div>
      <center>fetch 1 </center>
    </div>
    </>
  );
};
export default Json;