import SocialNetworks from '../SocialNetworks.jsx';
import Avatar from '../../img/pedromello.jpg';

import '../../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={ Avatar } alt="Pedro Mello" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <p>informações de contato</p>
      <a href="" className="btn">
        Download Curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
