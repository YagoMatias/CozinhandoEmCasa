import React from 'react';
import ButtonCircle from './ButtonCircle';
import Bolo from '../assets/Bolo.png';
import Cookies from '../assets/Cookies.png';
import Tortas from '../assets/Tortas.png';
import Sobremesas from '../assets/Sobremesas.png';

const MainCircle = () => {
  return (
    <div className="w-full h-72 flex justify-center items-center bg-[#812D25]">
      <nav className="flex gap-52 md:container justify-center ">
        <ButtonCircle img={Bolo} />
        <ButtonCircle img={Cookies} />
        <ButtonCircle img={Tortas} />
        <ButtonCircle img={Sobremesas} />
      </nav>
    </div>
  );
};

export default MainCircle;
