import React from 'react';
import ButtonCircle from './ButtonCircle';
import BoloChocolate from '../assets/boloChocolate.png';

const MainCircle = () => {
  return (
    <div className="w-full h-72 flex justify-center items-center bg-[#812D25]">
      <nav className="flex gap-52 md:container md:mx-auto">
        <ButtonCircle img={BoloChocolate} />
        <ButtonCircle img={BoloChocolate} />
        <ButtonCircle img={BoloChocolate} />
        <ButtonCircle img={BoloChocolate} />
      </nav>
    </div>
  );
};

export default MainCircle;
