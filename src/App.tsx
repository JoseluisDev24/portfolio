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
        className="relative w-full h-screen flex flex-col lg:flex-row justify-center items-center sm:pt-36 sm-pb-20 sm:w-2/3"
      >
        <div className="w-full flex flex-col items-center sm:items-start gap-6 sm:gap-3 text-center lg:text-left relative z-10">
          <span className="text-slate-100 text-4xl pt-64 sm:pt-0 sm:text-2xl font-custom">
            Hola,
          </span>
          <span className="text-5xl font-custom text-slate-100">
            Soy José Luis,
            <br />
            Rosano
          </span>
          <h1 className="text-3xl text-red-600 font-bold">
            Desarrollador Fullstack.
          </h1>
          <div className="py-6 flex gap-4">
            <Button className="bg-red-700 text-slate-200 w-40 h-14 font-semibold text-xl rounded-md hover:bg-red-500 flex items-center justify-center">
              Contáctame
            </Button>
            <div className="sm:flex gap-4 sm:hidden">
                    <a
                      href="/cv.pdf"
                      download="José Rosano CV.pdf"
                      className="border text-sm w-40 h-14 rounded-md hover:bg-red-700 transition flex items-center justify-center p-2"
                    >
                      Descargar CV
                      <FaDownload className="ml-2" />
                    </a>
                  </div>
          </div>
          <div>
            <p className="text-3xl sm:text-2xl pb-6 font-custom text-slate-200">
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
        <div className="w-full lg:w-1/2">
          <img
            className="absolute top-28 inset-0 mx-auto w-[60%] h-auto rounded-full z-0 lg:w-80 lg:h-auto lg:relative lg:top-0 lg:inset-auto lg:opacity-100"
            src="../perfil2.jpg"
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
            Sobre mí
          </h2>
          <p className="py-10">
            Soy desarrollador frontend. Me apasiona crear interfaces web
            robustas y funcionales. Mis habilidades más fuertes son html, css y
            javascrypt. Estoy constantemente ampliando mis conocimientos con
            nuevas herramientas y tecnologías. También me siento cómodo
            trabajando con frameworks como React Js. Mi objetivo es siempre
            aprender, innovar y aportar valor con cada línea de código.
          </p>
          <span className="text-red-600 font-semibold text-center sm:text-start text-3xl py-6">
            Habilidades técnicas
          </span>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
            <img className="w-8 sm:w-12" src="../html.png" alt="logo HTML" />
            <img className="w-10 sm:w-16" src="../css.png" alt="logo css" />
            <img
              className="w-10 sm:w-16"
              src="../js.png"
              alt="logo javascrypt"
            />
            <img className="w-16 sm:w-20" src="../sass.png" alt="logo SASS" />
            <img className="w-12 sm:w-16" src="../react.png" alt="logo React" />
            <img
              className="w-16 sm:w-20"
              src="../node.png"
              alt="logo Node.js"
            />
            <img
              className="w-14 sm:w-16"
              src="../tailwind.png"
              alt="logo tailwind"
            />
            <img
              className="w-10 sm:w-16"
              src="../github.png"
              alt="logo github"
            />
          </div>
        </div>
      </section>
      <section
        id="proyectos"
        className="min-h-screen w-full pt-16 flex flex-col items-center sm:w-2/3"
      >
        <h3 className="text-4xl py-10 font-semibold font-custom">Proyectos</h3>
        <div className="flex flex-wrap justify-center gap-8 pt-6">
          <ProjectsMap />
        </div>
      </section>
      <footer className="pt-10">
        <hr />
        <div className="w-full h-32 flex justify-center items-center gap-4">
          <a href="#">
            <img
              className="w-14 sm:w-14 hover:scale-110"
              src="../githubfooter.png"
              alt="logo github"
            />
          </a>
          <a href="#">
            <img
              className="w-12 hover:scale-110"
              src="../whatsappfooter.png"
              alt="logo whatsapp"
            />
          </a>
          <a href="#">
            <img
              className="w-10 sm:w-12 hover:scale-110"
              src="../instagramfooter.png"
              alt="logo instagram"
            />
          </a>
          <a href="#">
            <img
              className="w-12 sm:w-16 hover:scale-110"
              src="../linkedinfooter.png"
              alt="logo github"
            />
          </a>
        </div>
        <div>
          <p className="text-center text-gray-400 text-sm pb-4">
            {" "}
            © 2025 José Luis. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
