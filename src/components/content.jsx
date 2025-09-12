import React from "react";
import { useState, useEffect } from "react";

const Content = () => {
  const [message, setMessage] = useState("waiting...");
  const show = [
    {
      id: 1,
      name: "AIO",
      rating: 5,
      price: 599,
      img: "https://media.istockphoto.com/id/1458215547/photo/brown-bear.jpg?s=612x612&w=0&k=20&c=MRQhtNC_-P0llLRwwA3wmbQL6iroSjUla1PmvvEWCZU=",
    },
    {
      id: 2,
      name: "AIO",
      rating: 5,
      price: 599,
      img: "https://media.istockphoto.com/id/1458215547/photo/brown-bear.jpg?s=612x612&w=0&k=20&c=MRQhtNC_-P0llLRwwA3wmbQL6iroSjUla1PmvvEWCZU=",
    },
    {
      id: 3,
      name: "AIO",
      rating: 5,
      price: 599,
      img: "https://media.istockphoto.com/id/1458215547/photo/brown-bear.jpg?s=612x612&w=0&k=20&c=MRQhtNC_-P0llLRwwA3wmbQL6iroSjUla1PmvvEWCZU=",
    },
    {
      id: 4,
      name: "AIO",
      rating: 5,
      price: 599,
      img: "https://media.istockphoto.com/id/1458215547/photo/brown-bear.jpg?s=612x612&w=0&k=20&c=MRQhtNC_-P0llLRwwA3wmbQL6iroSjUla1PmvvEWCZU=",
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
      <div className="flex text-center">{listShow}</div>
    </>
  );
};

export default Content;
