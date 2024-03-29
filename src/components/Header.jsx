import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center gap-5 mt-10 font-mali-regular">
      <nav className="flex gap-40 font-semibold text-white">
        <Link
          to="/"
          className=" hover:bg-[#B79161] active:bg-[#B79161] focus:outline-none focus:ring focus:ring-[#B79161] p-2 rounded-md"
        >
          HOME
        </Link>
        <Link
          to="allReceitas"
          className="hover:bg-[#B79161] active:bg-[#B79161] focus:outline-none focus:ring focus:ring-[#B79161] p-2 rounded-md"
          onChange={handleChange}
        >
          RECEITAS
        </Link>
        <a
          href="#contatos"
          className=" hover:bg-[#B79161] active:bg-[#B79161] focus:outline-none focus:ring focus:ring-[#B79161] p-2 rounded-md"
        >
          CONTATOS
        </a>
      </nav>
      <input
        type="search"
        name="search"
        id="search"
        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-2xl py-2 pl-9 pr-3 shadow-xl focus:outline-none focus:border-[#812D25] focus:ring-[#812D25] focus:ring-1 sm:text-sm w-11/12 transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-105 duration-300 ml-4"
        placeholder="Pesquisar..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
