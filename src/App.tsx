import { TypeAnimation } from "react-type-animation";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import ProjectsMap from "./components/ProjectsMap/ProjectsMap";

function App() {
  return (
    <div className="bg-black relative font-workSans text-slate-200 px-12 flex flex-col items-center sm: scroll-smooth">
      <Header />
      <section
        id="inicio"
        className="relative w-full h-screen flex flex-col lg:flex-row justify-center items-center pt-12 sm-pb-20  sm:w-2/3"
      >
        <div className="w-full flex flex-col items-center sm:items-start  gap-6 text-center lg:text-left relative z-10">
          <span className="text-gray-300 sm:text-gray-400 text-4xl sm:text-2xl">
            Hola,
          </span>
          <span className="text-5xl font-semibold text-slate-200">
            Soy José Luis,
          </span>
          <h1 className="text-3xl text-yellow-300 font-bold">
            Desarrollador Fullstack.
          </h1>
          <div className="flex gap-4 py-8">
            <a href="#">
              <Button className="bg-blue-500">Contactame</Button>
            </a>
            <a href="#">
              <Button>Descargar CV</Button>
            </a>
          </div>
          <div>
            <p className="text-3xl sm:text-2xl pb-6">Si puedes pensarlo,</p>
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
        <div className="w-full lg:w-1/2">
          <img
            className="absolute top-14 inset-0 mx-auto w-[80%] h-auto rounded-full opacity-30 z-0 lg:w-80 lg:h-auto lg:relative lg:inset-auto lg:opacity-100"
            src="../sectionprofile3.png"
            alt="imagen de perfil"
          />
        </div>
      </section>
      <section
        id="sobre-mi"
        className="flex flex-col items-center text-center pb-6 w-full h-screen sm:w-2/3"
      >
        <h2 className="text-4xl sm:pt-16">Sobre mí</h2>
        <p className="py-10">
          Soy desarrollador frontend. Me apasiona crear interfaces web robustas
          y funcionales. Mis habilidades más fuertes son html, css y javascrypt.
          Estoy constantemente ampliando mis conocimientos con nuevas
          herramientas y tecnologías. También me siento cómodo trabajando con
          frameworks como React Js. Mi objetivo es siempre aprender, innovar y
          aportar valor con cada línea de código.
        </p>
        <span className="text-yellow-300 font-semibold text-center sm:text-start text-3xl py-6">
          Habilidades técnicas:
        </span>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
          <img className="w-8 sm:w-16" src="../html.png" alt="logo HTML" />
          <img className="w-10 sm:w-20" src="../css.png" alt="logo css" />
          <img className="w-10 sm:w-20" src="../js.png" alt="logo javascrypt" />
          <img className="w-16 sm:w-24" src="../sass.png" alt="logo SASS" />
          <img className="w-10 sm:w-16" src="../react.png" alt="logo React" />
          <img className="w-16 sm:w-24" src="../node.png" alt="logo Node.js" />
          <img
            className="w-14 sm:w-24"
            src="../tailwind.png"
            alt="logo tailwind"
          />
          <img className="w-10 sm:w-20" src="../github.png" alt="logo github" />
        </div>
      </section>
      <section className="min-h-screen w-full sm:pt-12 flex flex-col items-center sm:w-2/3 pb-20">
        <h3 className="text-4xl py-10">Proyectos</h3>
        <div className="flex flex-wrap justify-center gap-8 pt-6">
          <ProjectsMap />
        </div>
      </section>
      <footer className="pt-10">
        <hr />
        <div className="w-full h-32 flex justify-center items-center gap-4">
          <a href="#">
            <img
              className="w-16 hover:scale-110"
              src="../githubfooter.png"
              alt="logo github"
            />
          </a>
          <a href="#">
            <img
              className="w-16 hover:scale-110"
              src="../whatsappfooter.png"
              alt="logo github"
            />
          </a>
          <a href="#">
            <img
              className="w-14 hover:scale-110"
              src="../instagramfooter.png"
              alt="logo github"
            />
          </a>
          <a href="#">
            <img
              className="w-16 hover:scale-110"
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
