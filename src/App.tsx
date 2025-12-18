import { useTheme } from "./context/ThemeContext";
import {
  FiMoon,
  FiSun,
  FiSmartphone,
  FiZap,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";
import "./App.css";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      {/* Header */}
      <header className="header">
        <h1 className="logo">CleanUI</h1>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
      </header>

      {/* Hero */}
      <section className="hero">
        <h2>
          Simple. Clean. <span>Modern UI</span>
        </h2>
        <p>
          A minimal React interface with elegant dark and light modes,
          designed for clarity and performance.
        </p>

        <button className="cta-btn">
          Get Started <FiArrowRight />
        </button>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <FiZap className="icon" />
          <h3>Fast Experience</h3>
          <p>Optimized UI with smooth transitions and clean layout.</p>
        </div>

        <div className="feature">
          <FiSmartphone className="icon" />
          <h3>Mobile First</h3>
          <p>Designed to look great on all screen sizes.</p>
        </div>

        <div className="feature">
          <FiShield className="icon" />
          <h3>Reliable Design</h3>
          <p>Professional structure suitable for real applications.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CleanUI • Built with React</p>
      </footer>
    </div>
  );
};

export default App;
