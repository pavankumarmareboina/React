import React from "react";
import { useState, useEffect } from "react";

const Content = () => {
 const comeIN = ()=>{
  alert('djkfg')
 }
  const [message, setMessage] = useState("waiting...");
  const show = [
    {
      id: 1,
      name: "AIO",
      rating: 5,
      price: 599,
      img: "./src/assets/image.png",
    },
    {
      id: 2,
      name: "AIO",
      rating: 5,
      price: 599,
      img: "./src/assets/image.png",
    },
    {
      id: 3,
      name: "AIO",
      rating: 5,
      price: 599,
      img: "./src/assets/image.png",
    },
    {
      id: 4,
      name: "AIO",
      rating: 5,
      price: 599,
      img: "./src/assets/image.png",
    },
  ];
  let listShow = show.map((item) => (
    <div
      key={item.id}
      className="w-[30%] border-1 border-gray-500 rounded-[5px] tracking-[1px]"
    >
      <img src={item.img} alt={item.img} />
      <p>{item.name}</p>
      <p>{item.rating}</p>
      <p>{item.price}</p>
    </div>
  ));
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(
        (listShow = show.map((item) => (
          <div
            key={item.id}
            className="w-[30%] border-1 border-gray-500 rounded-[5px] tracking-[1px]"
          >
            <img src={item.img} alt={item.img} />
            <p>{item.name}</p>
            <p>{item.rating}</p>
            <p>{item.price}</p>
          </div>
        )))
      );
    }, 1000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div onDoubleClick={comeIN} className="flex text-center">{listShow}</div>
      <div className="flex">{message}</div>
    </>
  );
};

export default Content;
