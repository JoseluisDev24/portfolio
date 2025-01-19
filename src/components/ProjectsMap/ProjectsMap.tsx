import Card from "../Card/Card";

const ProjectsMap = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "Portfolio realizado con HTML, CSS, React JS.",
      image: "/portfolio.png",
      link: "https://my-portfolio-jlrc.netlify.app/",
      linkGithub: "https://github.com/JoseluisDev24/portfolio",
    },
    {
      id: 2,
      title: "Todo List",
      description: "Todo list con HTML, CSS, Javascrypt.",
      image: "/tododom.png",
      link: "https://todo-bios.netlify.app/",
      linkGithub: "",
    },
    {
      id: 3,
      title: "Sarandí Fit",
      description: "Web con html y css.",
      image: "/sarandifit.png",
      link: "https://sarandifit-prueba.netlify.app/",
      linkGithub: "",
    },
    {
      id: 4,
      title: "Todo List React",
      description: "Todo List usando React Js.",
      image: "/todoreact.png",
      link: "https://back-next-js.vercel.app/",
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
