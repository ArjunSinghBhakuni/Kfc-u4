import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import HomeSliding from './component/HomeSliding';
import Welcome from './component/Welcome';
import Location from './component/Location';

function App() {
  return (
    <div >
   <Navbar/>
   <Location/>
   <HomeSliding/>
   <Welcome/>
    </div>
  );
}

export default App;
