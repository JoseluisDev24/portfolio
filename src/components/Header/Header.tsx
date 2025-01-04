import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";
import { useRef } from "react";

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
    <header className="header w-full animate-slideDown flex justify-between items-center gap-10 pt-4 text-white md:w-2/3">
      <div className="text-3xl font-bold">
        <a href="#">
          <span className="text-4xl">JR</span>
          <span className="text-yellow-400 text-4xl font-bold">Dev</span>
        </a>
      </div>
      <nav
        ref={navRef}
        className="flex justify-center sm:justify-between items-center gap-7 "
      >
        <a href="#" className="hover:text-yellow-300">
          Inicio
        </a>
        <a href="#sobre-mi" className="hover:text-yellow-300">
          Sobre mí
        </a>
        <a href="#proyectos" className="hover:text-yellow-300">
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
    </header>
  );
}

export default Header;
