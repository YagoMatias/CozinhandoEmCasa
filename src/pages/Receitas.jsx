import React from 'react';
import PavlovaBanner from '../assets/pavlova.png';

const Receitas = () => {
  return (
    <div className="lg:container h-screen flex justify-center mt-32">
      <div
        style={{ width: '935px', height: '441px' }}
        className="flex flex-col justify-center items-center gap-10"
      >
        <h1 className="text-5xl font-bold text-white">PAVLOVA</h1>
        <img className="w-full h-full" src={PavlovaBanner} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Receitas;
