interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <header className="header animate-slideDown flex justify-between items-center gap-10 pt-4 text-white flex-wrap w-2/3 sm:min-w-72 sm:m-auto">
      <div className="text-3xl font-bold">
        <a href="#">
          <span className="text-4xl">JR</span>
          <span className="text-yellow-400 text-4xl font-bold">Dev</span>
        </a>
      </div>
      <nav className="flex justify-between items-center gap-7 ">
        <a href="#" className="hover:text-yellow-300">
          Inicio
        </a>
        <a href="#about" className="hover:text-yellow-300">
          Sobre mí
        </a>
        <a href="#proyectos" className="hover:text-yellow-300">
          Proyectos
        </a>
      </nav>
      <button className="bg-slate-300 rounded-lg h-10 w-40 text-black shadow-lg hover:shadow-yellow-300">
        Contáctame
      </button>
    </header>
  );
}

export default Header;
