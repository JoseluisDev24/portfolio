import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";


interface Props {}

function Header(props: Props) {
  const {} = props;
  const navRef = useRef<HTMLElement | null>(null);
  const handleShowNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle(styles.responsiveNav);
    }
  };

  return (
    <header className="fixed bg-black font-custom px-4 w-full sm:w-2/3 animate-slideDown z-20 opacity-95 flex justify-between items-center gap-10 sm:py-4 sm:px-8 h-20 text-slate-200 ">
      <div className="text-3xl font-bold">
        <a href="#">
          <span className="text-4xl">JR</span>
          <span className="text-red-600 text-4xl font-bold ">Dev</span>
        </a>
      </div>
      <nav
        ref={navRef}
        className="flex justify-center sm:justify-between items-center gap-7"
      >
        <a
          href="#inicio"
          className="hover:text-red-500 hover:scale-110 transition"
          onClick={handleShowNavbar}
        >
          Inicio
        </a>
        <a
          href="#sobre-mi"
          className="hover:text-red-500 hover:scale-110 transition"
          onClick={handleShowNavbar}
        >
          Sobre mí
        </a>
        <a
          href="#proyectos"
          className="hover:text-red-500 hover:scale-110 transition"
          onClick={handleShowNavbar}
        >
          Proyectos
        </a>
        <button
          className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={handleShowNavbar}
        >
          <FaTimes className="text-3xl text-white" />
        </button>
      </nav>
      <button className={styles.navBtn} onClick={handleShowNavbar}>
        <FaBars className="text-3xl text-white" />
      </button>
      <div className="hidden sm:flex gap-4">
        <a
          href="/cv.pdf"
          download="José Rosano CV.pdf"
          className="border text-sm w-40 rounded-md hover:bg-red-700 transition flex items-center justify-center p-2"
        >
          Descargar CV
          <FaDownload className="ml-2" />
        </a>
      </div>
    </header>
  );
}

export default Header;
