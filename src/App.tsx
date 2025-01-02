import Header from "./components/Header";

function App() {
  return (
    <div className="relative bg-gradient-to-r from-blue-950 to-blue-500 text-white p-4">
      <Header />
      <section className="relative flex lg:flex-row justify-between items-center pt-12 gap-8">
        <div className="w-full lg:w-1/2 leading-10 flex flex-col gap-6 text-center lg:text-left relative z-10">
          <span className="text-gray-400 text-2xl">Hola,</span>
          <h1 className="text-4xl sm:text-5xl font-semibold">
            Soy <span className="text-yellow-300">José Luis</span>
          </h1>
          <p className="text-3xl sm:text-4xl font-semibold">
            Fullstack Developer
          </p>
          <p className="text-sm sm:text-base">
            Me apasiona crear soluciones digitales que marquen la diferencia.
            Como desarrollador fullstack, me especializo en el diseño y
            desarrollo de aplicaciones web robustas, dinámicas y funcionales.
          </p>
          <button className="bg-slate-300 rounded-lg sm:text-center h-10 w-40 text-black shadow-lg hover:shadow-yellow-300">
            Contáctame
          </button>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
            <img className="w-20 sm:w-32" src="../public/html.png" alt="HTML" />
            <img className="w-16 sm:w-28" src="../public/sass.png" alt="SASS" />
            <img
              className="w-16 sm:w-28"
              src="../public/react.png"
              alt="React"
            />
            <img
              className="w-16 sm:w-28"
              src="../public/node.png"
              alt="Node.js"
            />
          </div>
        </div>
        <img
          className="absolute bottom-0 inset-0 m-auto w-full lg:w-1/2 max-w-xl opacity-20 lg:opacity-100 lg:relative lg:inset-auto lg:m-0 "
          src="../public/sectionProfile2.png"
          alt="imagen de perfil"
        />
      </section>
    </div>
  );
}

export default App;
