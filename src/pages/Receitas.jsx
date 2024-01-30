import React from 'react';
import PavlovaBanner from '../assets/pavlova.jpg';
import Separetor from '../components/Separetor';
import { useParams } from 'react-router-dom';
import receitasJson from '../database.json';

const Receitas = () => {
  const { id } = useParams();
  const receita = receitasJson;
  React.useEffect(() => {
    receita[id];
  }, [id]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="md:container flex justify-center mt-24 flex-col items-center gap-32 bg-[#B3864D] animate-slideLeft">
      <div className="w-full p-8 flex justify-between items-center bg-[#812D25]">
        <div
          style={{ maxWidthwidth: '935px', height: '441px' }}
          className="flex justify-start gap-x-20 "
        >
          <img
            style={{ maxWidth: '1280px', maxHeight: '720px' }}
            className="w-full h-full border-[#812D25] shadow-lg rounded-xl object-cover transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-105 duration-300 ml-4"
            src={receita[id].imagemCapa}
            alt="imagemCapa"
          />
          <div className=" flex flex-col gap-10 text-white items-center ">
            <h1 className="text-5xl font-bold w-96">{receita[id].Titulo}</h1>
            <p className="text-lg w-80">
              Desfrute da perfeição em forma de cookies com esta receita
              irresistível. Com uma base, mordida revela pedaços generosos de
              chocolate derretendo na boca. A combinação equilibrada de doce e
              textura crocante faz desses cookies uma verdadeira tentação.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full h-full bg-[#B3864D] pl-10 pr-10 mt-10">
        <Separetor />
        <div className="flex flex-col gap-5 slideDivs">
          <h2 className="text-3xl font-bold text-white">INGREDIENTES</h2>
          <ol
            key="macaco"
            className="text-2xl text-white list-disc ml-14 leading-loose list-inside"
          >
            {[receita[id].Ingredientes].map((item, index) => {
              return (
                <div key={index}>
                  {item[1] ? <li>{item[1]}</li> : null}
                  {item[2] ? <li>{item[2]}</li> : null}
                  {item[3] ? <li>{item[3]}</li> : null}
                  {item[4] ? <li>{item[4]}</li> : null}
                  {item[5] ? <li>{item[5]}</li> : null}
                  {item[6] ? <li>{item[6]}</li> : null}
                  {item[7] ? <li>{item[7]}</li> : null}
                  {item[8] ? <li>{item[8]}</li> : null}
                  {item[9] ? <li>{item[9]}</li> : null}
                  {item[10] ? <li>{item[10]}</li> : null}
                  {item[11] ? <li>{item[11]}</li> : null}
                  {item[12] ? <li>{item[12]}</li> : null}
                  {item[13] ? <li>{item[13]}</li> : null}
                  {item[14] ? <li>{item[14]}</li> : null}
                  {item[15] ? <li>{item[15]}</li> : null}
                  {item[16] ? <li>{item[16]}</li> : null}
                  {item[17] ? <li>{item[17]}</li> : null}
                  {item[18] ? <li>{item[18]}</li> : null}
                  {item[19] ? <li>{item[19]}</li> : null}
                  {item[20] ? <li>{item[20]}</li> : null}
                  {item[21] ? <li>{item[21]}</li> : null}
                  {item[22] ? <li>{item[22]}</li> : null}
                </div>
              );
            })}
          </ol>
        </div>
        <Separetor />
        <div className="flex flex-col gap-5 animate-slideDivs">
          <h2 className="text-3xl font-bold text-white">MODO DE PREPARO</h2>
          <ol className="text-2xl text-white list-decimal ml-14 leading-loose list-inside">
            {[receita[id].ModoDePreparo].map((item, index) => {
              return (
                <div key={index}>
                  {item[1] ? <li>{item[1]}</li> : null}
                  {item[2] ? <li>{item[2]}</li> : null}
                  {item[3] ? <li>{item[3]}</li> : null}
                  {item[4] ? <li>{item[4]}</li> : null}
                  {item[5] ? <li>{item[5]}</li> : null}
                  {item[6] ? <li>{item[6]}</li> : null}
                  {item[7] ? <li>{item[7]}</li> : null}
                  {item[8] ? <li>{item[8]}</li> : null}
                  {item[9] ? <li>{item[9]}</li> : null}
                  {item[10] ? <li>{item[10]}</li> : null}
                  {item[11] ? <li>{item[11]}</li> : null}
                  {item[12] ? <li>{item[12]}</li> : null}
                  {item[13] ? <li>{item[13]}</li> : null}
                  {item[14] ? <li>{item[14]}</li> : null}
                  {item[15] ? <li>{item[15]}</li> : null}
                  {item[16] ? <li>{item[16]}</li> : null}
                  {item[17] ? <li>{item[17]}</li> : null}
                  {item[18] ? <li>{item[18]}</li> : null}
                  {item[19] ? <li>{item[19]}</li> : null}
                  {item[20] ? <li>{item[20]}</li> : null}
                  {item[21] ? <li>{item[21]}</li> : null}
                  {item[22] ? <li>{item[22]}</li> : null}
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Receitas;
