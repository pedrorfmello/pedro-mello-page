import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiJqueryLogo,
  DiSass,
  DiMysql,
} from "react-icons/di";

import {
  SiRedux,
  SiBootstrap,
  SiMaterialui,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiMongodb,
  SiRailway,
} from "react-icons/si"

import "/../../../styles/components/technologiesContainer.sass";

const TechnologiesContainer = () => {
  const frontend = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "jquery", name: "Jquery", icon: <DiJqueryLogo /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "redux", name: "Redux", icon: <SiRedux /> },
    { id: "bootstrap", name: "Bootstrap", icon: <SiBootstrap /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "materialui", name: "MaterialUi", icon: <SiMaterialui /> },
  ];

  const backend = [
    { id: "typescript", name: "Typescript", icon: <SiTypescript /> },
    { id: "nodejs", name: "NodeJs", icon: <SiNodedotjs /> },
    { id: "docker", name: "Docker", icon: <SiDocker /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "mongodb", name: "MongoDB", icon: <SiMongodb /> },
    { id: "railway", name: "Railway", icon: <SiRailway /> },
  ];

  return <section className="technologies-container">
    <h2>Tecnologias Front-End</h2>
    <div className="technologies-grid">
      {frontend.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      ))}
    </div>
    <h2>Tecnologias Back-End</h2>
    <div className="technologies-grid">
      {backend.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      ))}
    </div>
  </section>;
}

export default TechnologiesContainer;
