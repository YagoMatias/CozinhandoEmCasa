import React from 'react';
import MainCircle from '../components/MainCircle';
import CardArea from '../components/CardArea';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className="bg-[#B3864D] w-full h-full p-0 m-0 flex flex-col items-center animate-slideLeft">
      <header className="flex flex-col justify-center items-center gap-20">
        <Banner />
      </header>
      <main className="w-full h-full flex flex-col justify-center items-center mt-20">
        <MainCircle />
        <CardArea />
      </main>
    </div>
  );
};

export default Home;
