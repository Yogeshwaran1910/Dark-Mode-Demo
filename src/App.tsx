import { useTheme } from "./context/ThemeContext";
import "./App.css";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">⚡ DashUI</h2>
        <nav>
          <a className="active">🏠 Dashboard</a>
          <a>📊 Analytics</a>
          <a>👤 Users</a>
          <a>⚙ Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Navbar */}
        <header className="navbar">
          <h1>Dashboard Overview</h1>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </header>

        {/* Stats Cards */}
        <section className="stats">
          <div className="stat-card">
            <span>👥</span>
            <div>
              <h3>12,450</h3>
              <p>Total Users</p>
            </div>
          </div>

          <div className="stat-card">
            <span>💰</span>
            <div>
              <h3>$38,200</h3>
              <p>Revenue</p>
            </div>
          </div>

          <div className="stat-card">
            <span>📈</span>
            <div>
              <h3>89,120</h3>
              <p>Sessions</p>
            </div>
          </div>

          <div className="stat-card">
            <span>⚠️</span>
            <div>
              <h3>23</h3>
              <p>Errors</p>
            </div>
          </div>
        </section>

        {/* Activity Section */}
        <section className="activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>✅ New user registered</li>
            <li>💳 Payment received</li>
            <li>📈 Traffic spike detected</li>
            <li>⚠ Server warning resolved</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
