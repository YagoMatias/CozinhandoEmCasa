import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Receitas from './pages/Receitas';
import Header from './components/Header';
import Footer from './components/Footer';
import AllReceitas from './pages/AllReceitas';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <BrowserRouter>
      <div className="bg-[#B3864D] w-full h-full p-0 m-0 flex flex-col items-center justify-center">
        <header className="flex flex-col justify-center items-center gap-20">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="receitas/:id" element={<Receitas />} />
          <Route path="allReceitas" element={<AllReceitas />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
