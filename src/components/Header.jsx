import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center gap-5 mt-10">
      <nav className="flex gap-40 font-semibold text-white">
        <a
          href="#"
          className=" hover:bg-[#B79161] active:bg-[#B79161] focus:outline-none focus:ring focus:ring-[#B79161] p-2 rounded-md"
        >
          HOME
        </a>
        <a
          href="#"
          className=" hover:bg-[#B79161] active:bg-[#B79161] focus:outline-none focus:ring focus:ring-[#B79161] p-2 rounded-md"
        >
          RECEITAS
        </a>
        <a
          href=""
          className=" hover:bg-[#B79161] active:bg-[#B79161] focus:outline-none focus:ring focus:ring-[#B79161] p-2 rounded-md"
        >
          CONTATOS
        </a>
      </nav>
      <input
        type="search"
        name="search"
        id="search"
        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-xl focus:outline-none focus:border-[#812D25] focus:ring-[#812D25] focus:ring-1 sm:text-sm w-1/2"
        placeholder="Pesquisar..."
      />
    </div>
  );
};

export default Header;