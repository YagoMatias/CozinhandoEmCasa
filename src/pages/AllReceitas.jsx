import React from 'react';
import CardArea from '../components/CardArea';

const AllReceitas = ({ searchTerm }) => {
  return (
    <div className="flex justify-center items-center lg:container animate-slideLeft">
      <CardArea searchTerm={searchTerm} />
    </div>
  );
};

export default AllReceitas;
