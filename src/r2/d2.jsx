import React from "react";
import { useState, useEffect } from "react";

const D2 = () => {
  const [d1, setD1] = useState([]);

  const API = "/data.json";
      const datacome = async () => {
        try {
          const respose = await fetch(API);
          const comeData = await respose.json();
          setD1(comeData.con2)
        } catch (error) {
          console.error("Server Down...!!", error);
        }
      };
    useEffect(() => {
      datacome(API);
    }, []);
  return (
    <>
      <div className="grid grid-cols-5 text-center">
        {d1.map((it) => (
        <div key={it.i} className="text-center border-1 p-16">
          <p>{it.p}</p>
          <img className="w-[200px] h-[300px] m-auto" src={it.proof2} alt="" />
          <article>{it.details2}</article>
        </div>
      ))}
      </div>
    </>
  );
};
export default D2;
