import React from 'react';
import ButtonCircle from './ButtonCircle';

const MainCircle = () => {
  return (
    <div className="w-full h-72 flex justify-center items-center bg-[#812D25]">
      <nav className="flex gap-52 w-auto ">
        <ButtonCircle img={'img1'} />
        <ButtonCircle img={'img2'} />
        <ButtonCircle img={'img3'} />
        <ButtonCircle img={'img4'} />
      </nav>
    </div>
  );
};

export default MainCircle;
