import './App.css';
import AboutMe from './components/AboutMe';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SkillSection from './components/SkillSection';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <SkillSection />
      <Projects />
    </div>
  );
}

export default App;
