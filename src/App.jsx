import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Receitas from './pages/Receitas';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#B3864D] w-full h-full p-0 m-0 flex flex-col items-center">
        <header className="flex flex-col justify-center items-center gap-20">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="receitas" element={<Receitas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
