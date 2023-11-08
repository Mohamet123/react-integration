import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/Navbars";
import {Banner} from "./components/Banner";
import {Services} from "./components/Service";
import Carrousel from "./components/Carousels"
import {DefileImg} from './components/defileImg';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Services/>
      <Carrousel/>
      <DefileImg/>
      <Footer/>
    </div>
  );
}

export default App;
