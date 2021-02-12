// import logo from './img/1.jpg';
import Navbar from './Halpper/navabar';
import './App.css';
import logo from './img/logo.jpg'
import Imgeshow from './Halpper/imgshow'
import ImgeShow from './Halpper/imgshow';
import imgdic from './Data/Imgedata'

function App() {
  return (
    <>
    <header>
      <img className="logo" src={logo}></img>
      <span className="logo-text">
        Zeel Prajapati's Personal Web site
      </span>
    </header>
    <Navbar />
      <ImgeShow imgdic={imgdic}></ImgeShow>
    </>
  );
}

export default App;
