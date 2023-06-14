import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import LandingTwo from './components/LandingTwo';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SkillSection from './components/SkillSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <LandingPage />
      <LandingTwo />
      <AboutMe />
      <SkillSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
