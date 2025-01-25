import { TypeAnimation } from "react-type-animation";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import ProjectsMap from "./components/ProjectsMap/ProjectsMap";
import { FaDownload } from "react-icons/fa";

function App() {
  return (
    <div className="bg-black relative font-workSans text-slate-200 px-12 flex flex-col items-center sm: scroll-smooth">
      <Header />
      <section
        id="inicio"
        className="relative w-full h-screen flex flex-col lg:flex-row justify-center items-center sm:pt-24 lg:pt-36 sm-pb-20 sm:w-2/3"
      >
        <div className="w-full flex flex-col items-center sm:items-start gap-4 sm:gap-2 lg:gap-6 text-center lg:text-left relative z-10">
          <span className="text-slate-100 text-2xl sm:text-xl lg:text-3xl pt-40 lg:pt-30 sm:pt-0 font-custom">
            Hola,
          </span>
          <span className="text-4xl sm:text-3xl sm:text-left lg:text-5xl font-custom text-slate-100">
            Soy José Luis
            <br />
            Rosano
          </span>
          <h1 className="text-3xl sm:text-xl lg:text-4xl text-red-600 font-bold">
            Desarrollador Fullstack.
          </h1>
          <div className="py-4 sm:py-1 flex gap-4">
            <Button
              link="https://linkedin.com/in/josé-luis-rosano-3498ab287"
              className="bg-red-700 w-40 h-14 sm:h-10 font-semibold text-md rounded-md hover:bg-red-500 flex items-center justify-center"
            >
              Contrátame
            </Button>
            <div className="gap-4">
              <a
                href="/cv.pdf"
                download="José Rosano CV.pdf"
                className="border text-md w-40 h-14 sm:h-10 rounded-md hover:bg-red-700 transition flex items-center justify-center p-2"
              >
                Descargar CV
                <FaDownload className="ml-2" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-lg pb-2 font-custom">
              Si puedes pensarlo,
            </p>
            <div>
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
          </div>
        </div>
        <div className="flex w-full lg:w-1/2">
          <img
            className="absolute sm:left-64 sm:top-26 top-28 inset-0 mx-auto w-[50%] sm:w-[35%] h-auto rounded-full z-0 lg:w-80 lg:h-auto lg:relative lg:top-0 lg:inset-auto lg:opacity-100"
            src="../perfil2-min.jpg"
            alt="imagen de perfil"
          />
        </div>
      </section>
      <section
        id="sobre-mi"
        className="flex flex-col items-center justify-between text-center w-full h-full sm:w-2/3"
      >
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-4xl sm:pt-16 font-semibold font-custom">
            <span className="text-red-600 font-semibold text-5xl px-2">.</span>
            Sobre mí
          </h2>
          <p className="py-10">
            Soy Desarrollador Fullstack. Mis habilidades más fuertes son HTML5,
            CSS y Javascrypt. También me siento cómodo trabajando con frameworks
            como React y NextJs. Estoy constantemente ampliando mis
            conocimientos con nuevas herramientas y tecnologías. Mi objetivo es
            siempre aprender, innovar y aportar valor con cada línea de código.
          </p>
          <span className="font-custom font-semibold text-center sm:text-start text-4xl py-6">
            <span className="text-red-600 font-semibold text-5xl px-2">.</span>
            Habilidades técnicas
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <img className="w-8 sm:w-12" src="../html-min.png" alt="logo HTML" />
            <img className="w-10 sm:w-16" src="../css-min.png" alt="logo css" />
            <img
              className="w-10 sm:w-16"
              src="../js-min.png"
              alt="logo javascrypt"
            />
            <img className="w-16 sm:w-20" src="../sass-min.png" alt="logo SASS" />
            <img className="w-12 sm:w-16" src="../react-min.png" alt="logo React" />
            <img
              className="w-16 sm:w-20"
              src="../node-min.png"
              alt="logo Node.js"
            />
            <img
              className="w-14 sm:w-16"
              src="../tailwind-min.png"
              alt="logo tailwind"
            />
            <img className="w-28" src="../mongo1-min.jpg" alt="logo mongoDB" />
            <img
              className="w-12 sm:w-16"
              src="../nextJS-min.png"
              alt="logo Next JS"
            />

            <img
              className="w-10 sm:w-14"
              src="../github-min.png"
              alt="logo github"
            />
            <img className="w-14" src="../expressjs-min.jpg" alt="logo express" />
          </div>
        </div>
      </section>
      <section
        id="proyectos"
        className="min-h-screen w-full pt-16 flex flex-col items-center sm:w-2/3 pb-20"
      >
        <h3 className="text-4xl py-10 font-semibold font-custom">
          <span className="text-red-600 font-semibold text-5xl px-2">.</span>
          Proyectos
        </h3>
        <div className="flex flex-wrap justify-center gap-8 pt-6">
          <ProjectsMap />
        </div>
      </section>
      <footer
        id="contacto"
        className="flex flex-col gap-6 items-center w-full sm:w-2/3 pt-12"
      >
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <span className="text-xl font-semibold">Contacto</span>
          <a href="https://linkedin.com/in/josé-luis-rosano-3498ab287">
            <img
              className="w-16 hover:scale-110"
              src="../linkedinfooter-min.png"
              alt="logo github"
            />
          </a>
        </div>
        <div>
          <p className="text-center text-gray-400 text-sm pb-4">
            © 2025 José Luis Rosano.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
