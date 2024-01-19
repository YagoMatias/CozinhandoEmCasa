import React from 'react';

const ButtonCircle = (props) => {
  return (
    <a
      href="#"
      className="w-40 h-40 bg-[#FFD59F] rounded-full flex items-center justify-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#F9CF9A] duration-300"
    >
      {props.img}
    </a>
  );
};

export default ButtonCircle;
