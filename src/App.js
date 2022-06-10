import './App.css';
import AboutMe from './Home/AboutMe';
import FirstBanner from './Home/FirstBanner';
import MySkills from './Home/MySkills';
import Navbar from './Home/Navbar';

function App() {
  return (
    <>
      <Navbar>
        <FirstBanner></FirstBanner>
        <AboutMe></AboutMe>
        <MySkills></MySkills>
      </Navbar>
      </>
  );
}

export default App;
