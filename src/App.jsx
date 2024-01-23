import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MainCircle from './components/MainCircle';
import Card from './components/Card';
import CardArea from './components/CardArea';

function App() {
  return (
    <div className="bg-[#B3864D] w-full h-full p-0 m-0 flex flex-col items-center">
      <header className="flex flex-col justify-center items-center gap-20">
        <Header />
        <Banner />
      </header>
      <main className="w-full h-full flex flex-col justify-center items-center mt-20">
        <MainCircle />
        <CardArea />
      </main>
    </div>
  );
}

export default App;
