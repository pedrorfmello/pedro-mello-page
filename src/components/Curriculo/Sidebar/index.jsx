import SocialNetworks from "../SocialNetworks";
import InformationContainer from "../InformationContainer";
import Avatar from "../../../img/pedromello.jpg";

import "./../../../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Pedro Mello" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1hcDlVhTvs5k2ClzvVKxHrIogkMd-n-dk/view?usp=share_link"
        target="_blank"
        className="btn"
      >
        Download Curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
