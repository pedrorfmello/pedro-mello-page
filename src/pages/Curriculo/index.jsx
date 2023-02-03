import MainContent from './MainContent';
import Sidebar from './Sidebar';

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
