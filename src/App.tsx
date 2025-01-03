import { TypeAnimation } from "react-type-animation";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-black relative text-white pt-4 px-8 font-mono flex flex-col items-center scroll-smooth">
      <Header />
      <section className="relative flex flex-col lg:flex-row justify-between items-center pt-12 pb-36 gap-8 w-full lg:w-2/3">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left relative z-10">
          <span className="text-gray-400 text-2xl">Hola,</span>
          <span className="text-4xl sm:text-5xl font-semibold">
            Soy José Luis
          </span>
          <h1 className="sm:text-3xl text-yellow-300 font-semibold">
            Desarrollador Fullstack
          </h1>
          <p>
            Cuento con habilidades tanto en el frontend como en el backend. Mi
            objetivo es siempre aprender, innovar y aportar valor con cada línea
            de código.
          </p>
          <div>
            <p className="text-2xl">Si puedes pensarlo,</p>
            <TypeAnimation
              sequence={[
                1000,
                "puedes programarlo",
                1000,
                "puedes implementarlo",
                1000,
                "puedes optimizarlo",
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </div>
          <button className="bg-slate-300 rounded-lg sm:text-center h-10 w-40 text-black shadow-lg hover:shadow-yellow-300">
            Contáctame
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="absolute inset-0 mx-auto w-[80%] h-auto lg:w-80 lg:h-auto lg:relative lg:inset-auto rounded-full opacity-30 lg:opacity-100 z-0"
            src="../sectionprofile3.png"
            alt="imagen de perfil"
          />
        </div>
      </section>
      <section
        id="sobre-mi"
        className="flex flex-col items-center justify-center py-6 w-2/3"
      >
        <h2 className="text-4xl pb-8">Sobre mí</h2>
        <p>
          Me apasiona crear soluciones digitales que marquen la diferencia. Como
          desarrollador fullstack, me especializo en el diseño y desarrollo de
          aplicaciones web robustas, dinámicas y funcionales. Cuento con
          habilidades tanto en el frontend como en el backend, lo que me permite
          abordar proyectos desde su concepción hasta su implementación final.
          Mi objetivo es siempre aprender, innovar y aportar valor con cada
          línea de código. ¡Echa un vistazo a mi portafolio y descubre algunos
          de los proyectos en los que he trabajado!
        </p>
        <span className="text-yellow-300 font-semibold pt-6 text-3xl">
          Habilidades técnicas
        </span>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
          <img className="w-20 sm:w-32" src="../html.png" alt="HTML" />
          <img className="w-16 sm:w-28" src="../sass.png" alt="SASS" />
          <img className="sm:w-20" src="../react.png" alt="React" />
          <img
            className="w-16 sm:w-28"
            src="../node.png"
            alt="Node.js"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
