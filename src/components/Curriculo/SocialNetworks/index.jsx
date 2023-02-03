import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "./../../../styles/components/socialNetworks.sass";

function SocialNetworks() {
  const socialNetworks = [
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/pedro-rfmello/",
    },
    {
      name: "github",
      icon: <FaGithub />,
      link: "https://github.com/pedrorfmello",
    },
    { name: "instagram", icon: <FaInstagram />, link: "#" },
  ];

  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          className="social-btn"
          target="_blank"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
}

export default SocialNetworks;
