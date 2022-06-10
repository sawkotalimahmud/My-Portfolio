import './App.css';
import AboutMe from './Home/AboutMe';
import FirstBanner from './Home/FirstBanner';
import Navbar from './Home/Navbar';

function App() {
  return (
    <>
      <Navbar>
        <FirstBanner></FirstBanner>
        <AboutMe></AboutMe>
      </Navbar>
      </>
  );
}

export default App;
