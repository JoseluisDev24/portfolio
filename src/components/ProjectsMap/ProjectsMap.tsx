import Card from "../Card/Card";

const ProjectsMap = () => {
  const projects = [
    {
      id: 1,
      title: "Sarandí Fit Web",
      description: "Web con html y css.",
      image: "/sarandifit.png",
      link: "https://sarandifit-prueba.netlify.app/",
    },
    {
      id: 2,
      title: "Sarandí Fit Web",
      description: "Web con html y css.",
      image: "/sarandifit.png",
      link: "https://sarandifit-prueba.netlify.app/",
    },
    {
      id: 3,
      title: "Sarandí Fit Web",
      description: "Web con html y css.",
      image: "/sarandifit.png",
      link: "https://sarandifit-prueba.netlify.app/",
    },
    {
      id: 4,
      title: "Sarandí Fit Web",
      description: "Web con html y css.",
      image: "/sarandifit.png",
      link: "https://sarandifit-prueba.netlify.app/",
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
        />
      ))}
    </div>
  );
};

export default ProjectsMap;
