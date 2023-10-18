import AI from './AI/AI';
import './App.css';
import FirstSection from './First_Section/FirstSection';
import SchoolPage from './School-Page/SchoolPage';
import Navbar from "./School/Navbar"
import Second_Section from './Second_Section/Second_Section';
import SeeUs from './SeeUs/SeeUs';
function App() {
  return (
    <div className="App">
        <Navbar />
        <FirstSection/>
        <Second_Section/>
        <SeeUs/>
        <SchoolPage />
    </div>
  );
}

export default App;
