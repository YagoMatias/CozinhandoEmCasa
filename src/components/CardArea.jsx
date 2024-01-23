import React from 'react';
import Card from './Card';

const CardArea = () => {
  return (
    <div className=" mt-32 grid text-white lg:grid-cols-3 md:grid-cols-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardArea;
