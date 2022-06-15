import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Location from './components/Location';
import HomeSliding from './components/HomeSliding';
import Welcome from './components/Welcome';

function App() {
  return (
    <div  >
    <Navbar/>
    <Location/>
    <HomeSliding/>
    <Welcome/>
    <Footer/>
    </div>
  );
}

export default App;
