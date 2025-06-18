import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="/EduStrike Game Icon.png" alt="Profiel" />
        <h1>EduStrike</h1>
        <p>Technisch Portfolio</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Overzicht">Overzicht</Link></li>
          <li><Link to="/Projecten">Projecten</Link></li>
          <li><Link to="/RobloxBasics">Roblox Studio Basics</Link></li>
          <li><Link to="/GameMechanics">Game Mechanics</Link></li>
        </ul>
      </nav>
      <footer>
        <p>© 2025 EduStrike</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
