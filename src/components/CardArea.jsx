import React from 'react';
import Card from './Card';

const CardArea = ({ searchTerm }) => {
  return (
    <div id="" className=" mt-32 grid text-white lg:grid-cols-3 md:grid-cols-2">
      <Card searchTerm={searchTerm} />
    </div>
  );
};

export default CardArea;
