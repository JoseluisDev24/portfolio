import Card from "../Card/Card";

const ProjectsMap = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "Portfolio realizado con HTML, CSS, React JS.",
      image: "/portfolio-min.png",
      link: "https://my-portfolio-jlrc.netlify.app/",
      linkGithub: "https://github.com/JoseluisDev24/portfolio",
    },
    {
      id: 2,
      title: "Shopping Cart",
      description:
        "Carrito de compras hecho con React Js, Context API y Tailwind.",
      image: "/shopping.png",
      link: "https://shopping-cart-swart-tau.vercel.app/",
      linkGithub: "https://github.com/JoseluisDev24/shopping-cart.git",
    },
    {
      id: 3,
      title: "Todo List",
      description: "Todo list con HTML, CSS, Javascrypt.",
      image: "/tododom-min.png",
      link: "https://todo-bios.netlify.app/",
      linkGithub: "",
    },
    {
      id: 4,
      title: "Sarandí Fit",
      description: "Web con html y css.",
      image: "/sarandifit-min.png",
      link: "https://sarandifit-prueba.netlify.app/",
      linkGithub: "",
    },
    {
      id: 5,
      title: "Todo List React",
      description: "CRUD Todo List con Next JS y MongoDB.",
      image: "/todoreact-min.png",
      link: "https://back-next-js.vercel.app/",
      linkGithub: "https://github.com/JoseluisDev24/entregable-react-bios",
    },
    {
      id: 6,
      title: "Weather App",
      description: "App de clima con React JS y Tailwind.",
      image: "/clima.jpg",
      link: "https://weather-app-green-ten-93.vercel.app",
      linkGithub: "https://github.com/JoseluisDev24/entregable-react-bios",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 h-full">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          linkGithub={project.linkGithub}
        />
      ))}
    </div>
  );
};

export default ProjectsMap;
