import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Overzicht from './pages/Overzicht';
import Projecten from './pages/Projecten';
import './styles/PageLayout.css';
import GameMechanics from './pages/GameMechanics';
import RobloxBasics from './pages/RobloxBasics';
function App() {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projecten" element={<Projecten />} />
            <Route path="/Overzicht" element={<Overzicht />} />
            <Route path="/RobloxBasics" element={<RobloxBasics />} />
            <Route path="/GameMechanics" element={<GameMechanics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
