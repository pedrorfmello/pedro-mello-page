import SocialNetworks from '../SocialNetworks';
import InformationContainer from '../InformationContainer';
import Avatar from '../../img/pedromello.jpg';

import '../../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={ Avatar } alt="Pedro Mello" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download Curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
