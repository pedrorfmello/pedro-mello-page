import MainContent from '../../components/Curriculo/MainContent';
import Sidebar from '../../components/Curriculo/Sidebar';

import '../../styles/components/curriculo.sass';

function Curriculo() {
  return (
    <div id="portfolio">
      <h1>Pedro Mello</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default Curriculo
