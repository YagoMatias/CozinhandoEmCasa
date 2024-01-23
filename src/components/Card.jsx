import React from 'react';
import BoloChocolate from '../assets/boloChocolate.png';

const Card = () => {
  return (
    <div className="w-96 h-96 flex justify-center p-4 bg-bgcard shadow-lg m-10">
      <div className="flex justify-center items-center flex-col gap-5">
        <img src={BoloChocolate} alt="" className="w-40 h-40" />
        <h3 className="font-semibold text-2xl">Titulo</h3>
        <p className="text-base ml-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quaerat,
          placeat deleniti fuga natus, veniam dicta dolor mollitia accusantium
          repellat ipsum officia quae quia a culpa illum possimus error ea?
        </p>
      </div>
    </div>
  );
};

export default Card;
