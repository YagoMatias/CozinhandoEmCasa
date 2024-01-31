import React from 'react';

const ButtonCircle = (props) => {
  return (
    <a
      href="#"
      className=" bg-[#FFD59F] rounded-full flex  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#F9CF9A] duration-300 border-2 border-white"
    >
      <img
        src={props.img}
        alt=""
        className="w-40 h-40 min-w-28 min-h-28 rounded-full border-4 border-[#812D25] object-cover"
      />
    </a>
  );
};

export default ButtonCircle;
