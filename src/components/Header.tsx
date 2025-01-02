import React from "react";

interface Props {}



function Header(props: Props) {
  const {} = props;

  return (
    <header className="header flex justify-between items-center p-4 text-white flex-wrap">
      <div className="text-3xl font-bold shadow-md rounded-full hover:shadow-yellow-300">
        <a href="#">
          <span className="text-5xl">J</span>
          <span className="text-yellow-400 text-5xl font-bold">R</span>
        </a>
      </div>

      <ul className="flex justify-between items-center gap-7 ">
        <a href="#">
          <li className="hover:text-yellow-300">Inicio</li>
        </a>
        <a href="#">
          <li className="hover:text-yellow-300">Sobre mí</li>
        </a>
        <a href="#">
          <li className="hover:text-yellow-300">Contacto</li>
        </a>
      </ul>
      <button className="bg-slate-300 rounded-lg h-10 w-40 text-black shadow-lg hover:shadow-yellow-300">
        Contáctame
      </button>
    </header>
  );
}

export default Header;
