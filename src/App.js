import './App.css';
import ContactMe from './ContactMe';
import AboutMe from './Home/AboutMe';
import FirstBanner from './Home/FirstBanner';
import Footer from './Home/Footer';
import MySkills from './Home/MySkills';
import Navbar from './Home/Navbar';

function App() {
  return (
    <>
      <Navbar>
        <FirstBanner></FirstBanner>
        <AboutMe></AboutMe>
        <MySkills></MySkills>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </Navbar>
      </>
  );
}

export default App;
