import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className="bg-[#B3864D] w-screen h-screen p-0 m-0 flex flex-col items-center">
      <header className="flex flex-col justify-center items-center gap-20">
        <Header />
        <Banner />
      </header>
      <main></main>
    </div>
  );
}

export default App;
