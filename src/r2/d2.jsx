import React from "react";
import { useState, useEffect } from "react";

const D2 = () => {
  const [d1, setD1] = useState([]);

  const API = "/data.json";
  const f2 = async (API) => {
    try {
      let fRes = await fetch();
      let cRes = await fRes.json();

      setD1(cRes.con2);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    f2();
  });
  return (
    <>
      {d1.map((it) => (
        <div key={it.i} className="text-center rounded-2xl">
          <p>{it.p}</p>
          <img className="w-[200px] h-[300px]" src={it.proof2} alt="" />
          <article>{it.details2}</article>
        </div>
      ))}
    </>
  );
};
export default D2;
