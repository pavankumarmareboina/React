import React from 'react';
import { data } from 'react-router-dom';

const Content = () => {

  return (
    <div className="flex flex-wrap gap-4">
      {
      list.map((box) => (
        <div
          key={box.id}
          className="border w-[30%] text-center cursor-pointer rounded-[8px] p-4"
        >
          <img src={box.image} alt={box.title} className="mx-auto mb-2" />
          <h2 className="text-[22px] tracking-[2px]">{box.title}</h2>
          <p className="text-[12px] tracking-[2px] text-gray-500">
            {box.description}
          </p>
          <button className="w-[50px] h-[30px] bg-fuchsia-300 rounded-[4px] text-white border border-gray-400 cursor-pointer hover:bg-white hover:text-black">
            More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Content;
