import { Route, Routes } from 'react-router-dom';
import Curriculo from './pages/Curriculo';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Curriculo /> } />
    </Routes>
  )
}

export default App
