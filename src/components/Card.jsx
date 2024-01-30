import React from 'react';
import { Link } from 'react-router-dom';
import receitasJson from '../database.json';

const Card = () => {
  return (
    <>
      {receitasJson.map((receita) => {
        return (
          <div
            key={receita.id}
            className="w-96 h-96 flex justify-center p-4 bg-bgcard shadow-lg m-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:bg-bgcardHover duration-300"
          >
            <Link
              to={`/receitas/${receita.id}`}
              className="flex justify-center items-center flex-col gap-5"
            >
              <img
                src={receita.imagemCapa}
                alt=""
                className="w-40 h-40 min-w-28 min-h-28 rounded-full border-4 border-[#812D25] object-cover"
              />
              <h3 className="font-semibold text-2xl">{receita.Titulo}</h3>
              <p className="text-base ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                quaerat, placeat deleniti fuga natus, veniam dicta dolor
                mollitia accusantium repellat ipsum officia quae quia a culpa
                illum possimus error ea?
              </p>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default Card;
